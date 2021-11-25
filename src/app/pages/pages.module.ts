import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackgroundColorDirective } from '../directives/background-color.directive';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    EditFormComponent,
    AddFormComponent,
    BackgroundColorDirective
  ],
  exports:[
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
