import { Component, OnInit } from '@angular/core';
import { EmpserviceService} from '../empservice.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  temp=[]
  confirmationString;
  isdelete: boolean = false;

  constructor(private service:EmpserviceService,private router :Router){}

  ngOnInit(){
    this.service.getAllEmpData().subscribe( (data : any[])=>{
    console.log(data);
      this.temp = data;
  });
    
  }
  deleteEmp(id){
    this.service.deleteEmp(id).subscribe(
      (data)=>{
        console.log(data)
        this.confirmationString=data["statusMessage"];
        this.isdelete=true;
      },
      (error)=>{},
      ()=>{
        this.service.getAllEmpData().subscribe( (data : any[])=>{
          console.log(data);
            this.temp = data;
        });
      }

    );

  }

  getEmpDatabyId(id){
    this.router.navigate(['updateEmp', id]);

    
  }

}
