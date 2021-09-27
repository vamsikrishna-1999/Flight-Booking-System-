import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient,private toastr:ToastrService) { }


  //Function for calling Http post method for checking the booking Id
  check1(registerObj:any)
  {
    console.log(registerObj);
    this.http.post('http://localhost:4000/user',registerObj).subscribe(res =>
    {
      
      console.log(res);  
      if(res)
      {
        this.toastr.success("CheckIn Success");
        location.assign("http://localhost:4200/");
      }
      else
      {
        this.toastr.success("CheckIn Failed");
      }
    })
  }
}
