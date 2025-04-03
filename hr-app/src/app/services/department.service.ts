import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Department } from "../models/department";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  private apiUrl = "api/departments";

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartment(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(department: Department): Observable<any> {
    return this.http.put(this.apiUrl, department);
  }

  deleteDepartment(id: number): Observable<Department> {
    return this.http.delete<Department>(`${this.apiUrl}/${id}`);
  }
}
