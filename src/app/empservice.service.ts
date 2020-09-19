import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http :HttpClient) { }

  addEmployee(name,country,file){
    const formdata: FormData = new FormData();
    
    formdata.append('file', file);
    formdata.append("name",name);
    formdata.append("country",country);
    return this.http.post("http://localhost:8080/emp/add",formdata)
  }
  updateEmployee(id,name,country){
    const formdata: FormData = new FormData();

    formdata.append("id",id)
    formdata.append("name",name);
    formdata.append("country",country);
    return this.http.put("http://localhost:8080/emp/update",formdata)
  }
  getEmpDetailesById(id){
    return this.http.get("http://localhost:8080/emp/getemp?id="+id);
  }
  getAllEmpData(){
    return this.http.get("http://localhost:8080/emp/getallemp");
  }

  deleteEmp(id){
    return this.http.delete("http://localhost:8080/emp/delete?id="+id);
  }

}
