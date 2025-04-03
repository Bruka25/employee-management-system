import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Employee } from "../models/employee";
import { Department } from "../models/department";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const departments = [
      { id: 1, name: "IT", description: "Information Technology Department" },
      { id: 2, name: "HR", description: "Human Resources Department" },
    ];

    const employees = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@company.com",
        phone: "123-456-7890",
        hireDate: new Date("2020-01-01"),
        departmentId: 1,
        position: "Software Engineer",
        salary: 75000,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@company.com",
        phone: "123-456-7891",
        hireDate: new Date("2020-02-01"),
        departmentId: 2,
        position: "HR Manager",
        salary: 80000,
      },
    ];

    return { employees, departments };
  }

  genId<T extends { id: number }>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map((t) => t.id)) + 1 : 1;
  }
}
