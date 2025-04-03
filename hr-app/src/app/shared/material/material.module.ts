import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";

const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatDialogModule,
  MatMenuModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
