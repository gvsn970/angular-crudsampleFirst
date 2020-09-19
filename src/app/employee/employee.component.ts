import { Component, OnInit } from '@angular/core';
import { EmpserviceService} from '../empservice.service';
import { HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 
  constructor(private servie :EmpserviceService) { }

  successMessage:boolean=false;
  failMessage:boolean=false;
  statusMessage;

  selectFile=null;
  onFileSelected(event){
    console.log(event)
    this.selectFile=event.target.files[0];
  }

  saveEmpData(data){
    console.log(this.selectFile)
    return this.servie.addEmployee(data.name,data.country,this.selectFile).subscribe(
      (data)=>{
          
          this.statusMessage=data["statusMessage"];
          this.successMessage=true;

      },
      (error)=>{
        console.log(error)
       
      },
      ()=>{

      }
    );
  }
  ngOnInit() {
  }

}
