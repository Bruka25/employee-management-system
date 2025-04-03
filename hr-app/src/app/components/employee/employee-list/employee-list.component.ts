import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Employee } from "../../../models/employee";
import { EmployeeService } from "../../../services/employee.service";
import { DepartmentService } from "../../../services/department.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    "avatar",
    "name",
    "position",
    "department",
    "actions",
  ];
  dataSource: MatTableDataSource<Employee>;
  departments: any = {};

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.dataSource = new MatTableDataSource(employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Custom sorting for name column
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case "name":
              return item.firstName + " " + item.lastName;
            default:
              return item[property];
          }
        };
      },
      (error) => {
        this.showMessage("Error loading employees");
        console.error("Error:", error);
      }
    );
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (departments) => {
        departments.forEach((dept) => {
          this.departments[dept.id] = dept.name;
        });
      },
      (error) => {
        this.showMessage("Error loading departments");
        console.error("Error:", error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDepartmentName(departmentId: number): string {
    return this.departments[departmentId] || "N/A";
  }

  addEmployee(): void {
    // Will implement when we create the form component
    this.showMessage("Add Employee functionality coming soon!");
  }

  editEmployee(employee: Employee): void {
    // Will implement when we create the form component
    this.showMessage("Edit Employee functionality coming soon!");
  }

  viewEmployee(employee: Employee): void {
    // Will implement when we create the detail component
    this.showMessage("View Employee functionality coming soon!");
  }

  deleteEmployee(employee: Employee): void {
    if (
      confirm(
        `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`
      )
    ) {
      this.employeeService.deleteEmployee(employee.id).subscribe(
        () => {
          this.loadEmployees();
          this.showMessage("Employee deleted successfully");
        },
        (error) => {
          this.showMessage("Error deleting employee");
          console.error("Error:", error);
        }
      );
    }
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, "Close", {
      duration: 3000,
      horizontalPosition: "end",
      verticalPosition: "top",
    });
  }
}
