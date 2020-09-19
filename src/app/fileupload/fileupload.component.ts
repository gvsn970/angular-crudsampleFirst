import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  selectFile=null;
  constructor() { }
  onFileSelected(event){
    console.log(event)
    this.selectFile=event.target.files[0];
  }
  onUpload(){
    
  }

  ngOnInit() {
  }

}
