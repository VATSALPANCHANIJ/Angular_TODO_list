import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';

const routes: Routes = [
  {
    path: 'Add',
    component: AddstudentComponent
  },
  {
    path: 'Edit/:id',
    component: EditStudentComponent
  },
  {
    path: 'List',
    component: ListStudentComponent
  },
  {
    path: 'Login',
    component: LoginStudentComponent
  },
  {
    path: 'Register',
    component: RegisterStudentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
