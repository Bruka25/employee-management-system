import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { Employee } from "../../../models/employee";
import { DepartmentService } from "../../../services/department.service";
import { EmployeeService } from "../../../services/employee.service";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.scss"],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  departments: any[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeFormComponent>,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee }
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.initializeForm();
    if (this.data?.employee) {
      this.isEditMode = true;
      this.employeeForm.patchValue(this.data.employee);
    }
  }

  private initializeForm(): void {
    this.employeeForm = this.fb.group({
      id: [null],
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [
          Validators.required,
          Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{4}$"),
        ],
      ],
      hireDate: ["", Validators.required],
      departmentId: ["", Validators.required],
      position: ["", Validators.required],
      salary: ["", [Validators.required, Validators.min(0)]],
    });
  }

  private loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (departments) => (this.departments = departments),
      (error) => console.error("Error loading departments:", error)
    );
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.value;
      const operation = this.isEditMode
        ? this.employeeService.updateEmployee(employee)
        : this.employeeService.addEmployee(employee);

      operation.subscribe(
        () => {
          this.dialogRef.close(true);
        },
        (error) => console.error("Error saving employee:", error)
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
