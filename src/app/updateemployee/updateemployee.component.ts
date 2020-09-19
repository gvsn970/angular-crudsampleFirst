import { Component, OnInit } from '@angular/core';
import {EmpserviceService} from '../empservice.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  constructor(private service :EmpserviceService,private activeroute: ActivatedRoute,private router :Router) {
    this.activeroute.params.subscribe( params =>this.id=params.id);
    
  }
  successMessage:boolean=false;
  failMessage:boolean=false;
  statusMessage;
id;
name;
country;
  ngOnInit() {
    console.log(this.id)
     this.service.getEmpDetailesById(this.id).subscribe(
       (data)=>{
        console.log(data["empId"])
         this.name=data["empName"];
         this.country=data["empCountry"]
       },
       (error)=>{},
       ()=>{
      }

     );
  }
  
  editEmpData(data){
        this.service.updateEmployee(data.id,data.name,data.country).subscribe(
          (data)=>{
           
           ;
              this.successMessage=true;
              alert( this.statusMessage=data["statusMessage"])
             
              
          },
          (error) =>{},
          ()=>{
            this.router.navigate(["/"]);

          }

        );
  }
  

}
