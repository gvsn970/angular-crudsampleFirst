import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from './employee/employee.component';
import { UpdateemployeeComponent} from './updateemployee/updateemployee.component';
import { FileuploadComponent} from './fileupload/fileupload.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'updateEmp/:id',component:UpdateemployeeComponent},
  {path:'file',component:FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
