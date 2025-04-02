Steps for the Sample Employee Management Application

1. Set Up the Angular 8 Project
   Goal: Get the basic Angular 8 environment ready with all required dependencies.
   Actions:
   Install Node.js (if not already installed) and Angular CLI 8.x.
   Create the project: ng new hr-app --style=scss --routing.
   Install Angular Material and the in-memory web API.
   Push the initial setup to GitHub.
2. Define Data Models
   Goal: Create TypeScript interfaces for Candidate, Company, Employees, Department, and Salary.
   Actions:
   Set up a models/ folder with files like employee.ts, department.ts, etc.
   Define fields and relationships as per the PRD.
3. Implement In-Memory Database Service
   Goal: Simulate a backend API with mock data for all entities.
   Actions:
   Create an InMemoryDataService to handle CRUD endpoints.
   Populate it with sample data (e.g., 5 employees, 2 departments).
4. Build Angular Services
   Goal: Create services to interact with the in-memory API.
   Actions:
   Generate services like EmployeeService, DepartmentService, etc.
   Add methods for CRUD operations (e.g., getEmployees(), addEmployee()).
5. Design the UI with Angular Material
   Goal: Set up a basic dashboard and employee list with a beautiful UI.
   Actions:
   Add Angular Material components (e.g., MatTable, MatSidenav).
   Create components like EmployeeListComponent and EmployeeFormComponent.
   Apply a theme for that polished look.
6. Test the Initial Setup
   Goal: Ensure the app runs and displays mock data.
   Actions:
   Run ng serve and check the dashboard/employee list.
   Push updates to GitHub.
