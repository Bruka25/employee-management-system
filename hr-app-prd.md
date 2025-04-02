# Product Requirements Document (PRD)  
## Sample Employee Management Application (HR System)  

### 1. Overview  
#### 1.1 Purpose  
The purpose of this project is to develop a simple, web-based HR management application using Angular 8. The application will enable HR personnel to manage employee-related data efficiently with full CRUD (Create, Read, Update, Delete) functionality, handle relationships between entities, and provide a visually appealing user interface. The app will use an in-memory database for data persistence during the session, making it a lightweight sample suitable for demonstration or further development.

#### 1.2 Scope  
This PRD defines the initial requirements for a sample HR application with the following key features:  
- Fully functional CRUD operations for managing HR data.  
- Relationships between entities (e.g., Employee-Department, Employee-Salary).  
- A modern, beautiful UI built with Angular Material.  
- Use of Angular 8 with in-memory database services, Angular services, and Angular directives.  

---

### 2. Features  
#### 2.1 Fully Functional CRUD Operations  
- **Create**: Add new records for employees, candidates, departments, salaries, and company details.  
- **Read**: View lists and detailed information for all entities.  
- **Update**: Edit existing records.  
- **Delete**: Remove records from the system.  

#### 2.2 Manage Relationships Between Two Classes  
- Relationships will be established between entities, such as:  
  - `Employee` linked to `Department` via `departmentId`.  
  - `Employee` linked to `Salary` via `salaryId`.  
  - `Candidate` linked to `Company` via `companyId`.  

#### 2.3 Beautiful UI  
- The application will feature a modern, responsive, and user-friendly interface using Angular Material components.  
- Examples: Data tables, forms, modals, and navigation menus with a consistent theme.  

---

### 3. Data Model  
The application will manage the following entities (tables) with their respective fields and relationships:  

#### 3.1 Candidate  
- **Fields**:  
  - `candidateId` (number, primary key)  
  - `firstName` (string)  
  - `lastName` (string)  
  - `email` (string)  
  - `phone` (string)  
  - `status` (string, e.g., "Applied", "Interviewed")  
  - `companyId` (number, foreign key to `Company`)  
- **Purpose**: Tracks job applicants applying to the company.  

#### 3.2 Company  
- **Fields**:  
  - `companyId` (number, primary key)  
  - `companyName` (string)  
  - `location` (string)  
  - `industry` (string)  
- **Purpose**: Represents the organization managing employees and candidates.  

#### 3.3 Employees  
- **Fields**:  
  - `employeeId` (number, primary key)  
  - `firstName` (string)  
  - `lastName` (string)  
  - `email` (string)  
  - `departmentId` (number, foreign key to `Department`)  
  - `salaryId` (number, foreign key to `Salary`)  
  - `hireDate` (date)  
- **Purpose**: Stores employee records with links to departments and salaries.  

#### 3.4 Department  
- **Fields**:  
  - `departmentId` (number, primary key)  
  - `departmentName` (string)  
  - `location` (string)  
  - `managerId` (number, optional foreign key to `Employees`)  
- **Purpose**: Organizes employees into departments.  

#### 3.5 Salary  
- **Fields**:  
  - `salaryId` (number, primary key)  
  - `employeeId` (number, foreign key to `Employees`)  
  - `amount` (number)  
  - `effectiveDate` (date)  
- **Purpose**: Tracks salary details for employees.  

#### 3.6 Additional Table (Optional)  
- **JobHistory**:  
  - **Fields**:  
    - `historyId` (number, primary key)  
    - `employeeId` (number, foreign key to `Employees`)  
    - `departmentId` (number, foreign key to `Department`)  
    - `startDate` (date)  
    - `endDate` (date)  
  - **Purpose**: Tracks employee job history across departments (optional for basic HR).  

---

### 4. Technical Requirements  
#### 4.1 In-Memory Database Service/API  
- Use Angular’s `InMemoryWebApiModule` to simulate a backend API with in-memory data storage.  
- Mock endpoints: `/api/employees`, `/api/departments`, `/api/candidates`, etc.  

#### 4.2 Angular Material  
- Utilize Angular Material components for UI:  
  - `MatTable` for data display.  
  - `MatFormField` and `MatInput` for forms.  
  - `MatDialog` for modals (e.g., confirmation dialogs).  
  - `MatCard` for layout sections.  
  - Apply a theme (e.g., Indigo-Pink) for visual consistency.  

#### 4.3 Angular Services  
- Create services to handle CRUD operations and API interactions:  
  - `EmployeeService`, `DepartmentService`, `SalaryService`, `CandidateService`, `CompanyService`.  
- Example methods: `getEmployees()`, `addEmployee()`, `updateEmployee()`, `deleteEmployee()`.  

#### 4.4 Angular Directives  
- Use built-in directives:  
  - `*ngFor` for rendering lists (e.g., employee table).  
  - `*ngIf` for conditional UI elements.  
- Create a custom directive (e.g., `highlightEmployee`) to enhance UX (e.g., highlight new hires in the table).  

#### 4.5 Framework  
- Built with Angular 8 using TypeScript and SCSS for styling.  

---

### 5. User Interface Design  
#### 5.1 Layout  
- **Dashboard**: Overview with stats (e.g., total employees, departments) using `MatCard`.  
- **Employee List**: `MatTable` with columns: ID, Name, Department, Salary, Actions (Edit/Delete).  
- **Forms**: Add/Edit forms with `MatFormField` (e.g., dropdown for departments).  
- **Navigation**: `MatSidenav` for switching between Candidates, Employees, Departments, etc.  

#### 5.2 Components  
- `EmployeeListComponent`: Displays employee table.  
- `EmployeeFormComponent`: Handles add/edit forms.  
- `DepartmentListComponent`: Shows department data.  
- `CandidateListComponent`: Manages candidate records.  
- `CompanyDetailsComponent`: Displays company info.  

---

### 6. Implementation Plan  
#### 6.1 Setup  
- Create Angular 8 project: `ng new hr-app --style=scss`.  
- Install dependencies:  
  - Angular Material: `ng add @angular/material`.  
  - In-Memory API: `npm install angular-in-memory-web-api --save`.  

#### 6.2 Development Steps  
1. **Define Models**: Create interfaces for all entities in `models/` folder.  
2. **In-Memory API**: Implement `InMemoryDataService` with mock data and endpoints.  
3. **Services**: Build Angular services for CRUD operations.  
4. **UI Components**: Design dashboard, tables, and forms with Angular Material.  
5. **Relationships**: Link entities in service logic (e.g., fetch department name for employee).  
6. **Test**: Verify CRUD functionality for all entities.  

#### 6.3 Sample Workflow  
- User opens app → Views dashboard → Clicks "Employees" → Sees `MatTable` → Clicks "Add Employee" → Fills form (selects department) → Submits → Employee appears in list.  

---

### 7. Assumptions  
- This is a sample app; no persistent database (e.g., MySQL) is required.  
- Relationships are managed via foreign keys in the in-memory data structure.  
- Basic validation (e.g., required fields) will be implemented in forms.  

### 8. Future Considerations  
- Add authentication for HR users.  
- Integrate a real backend API (e.g., Node.js, Spring Boot).  
- Expand with features like reporting or employee performance tracking.  

---

**Last Updated**: April 02, 2025  
