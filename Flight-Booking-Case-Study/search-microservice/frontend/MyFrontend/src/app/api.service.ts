import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  message:any; 
  users:any;
  constructor
  (
    private http:HttpClient,
    private toastr:ToastrService
    )  
  { 

  }


  //Function for calling Http get mwthod for getting the flight details
  getUsers(starting:any,ending:any,departure:any,type1:any)
  {
   
    this.http.get(`http://localhost:1330/user/${starting}/${ending}/${departure}/${type1}`).subscribe(res=>
    {
      this.users=res;
      console.log(this.users);
      
      if(this.users==0)
      {
        this.toastr.success("No Flights Available");
        
        
      }
      this.message=res;
    }) 


   
  } 
  
  
//Function for calling Http post method for saving the flight details
  registerUser(registerObj:any)
  {
    this.http.post('http://localhost:1330/register',registerObj).subscribe(res =>
    {
      
      console.log(res);  
      
    })
  }


  //Function for calling Http delete method for deleting the flight details
  deleteFlight(id:any)
  {
     this.http.delete(`http://localhost:1330/delete/${id}`).subscribe(res=>
     {
        console.log(res);
        this.toastr.success("Flight details Deleted")
     })
  }


  //Function for sending  the selected flight details
  senddata(starting:any,ending:any,departure:any,type1:any)
  {
      this.http.post(`http://localhost:3000/user/${starting}/${ending}/${departure}/${type1}`,{}).subscribe(res=>
      {
            console.log(res);
      })
  }

}
