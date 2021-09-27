import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root' 
})
export class ApiService 
{

 
  
  constructor(public http:HttpClient,public toastr:ToastrService)
  {

  }

// Functon for calling Http Post method for displaying the Booking_id
  sav(x:any)
  {
      this.http.post(`http://localhost:4000/user/${x}`,{}).subscribe(res=>{
        console.log(res);
      })   
  }


// Function for calling the Http Post method for send Booking to user via SMS
  sav1(x:any,pass:any)
  {
    this.http.post(`http://localhost:3000/sendMessage/${x}/${pass}`,{}).subscribe(res=>
    {
      console.log(res);
    })
    this.toastr.success("Message Sent Successfully");
  }

  
 


}
