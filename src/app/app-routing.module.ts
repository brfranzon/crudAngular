import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
  // canActivate: [LoginGuard]
  },
  { path: 'edit-form/:id', component: EditFormComponent },
  { path: 'add-form', component: AddFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
