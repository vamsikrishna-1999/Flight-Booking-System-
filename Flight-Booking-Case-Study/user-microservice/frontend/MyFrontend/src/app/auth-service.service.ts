import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public token:any;
  public bool:any;
  public res1:any;
  public s:string=''
  public users:any;
  constructor
  (
    public http:HttpClient,
    private toastr:ToastrService
  ) { } 

  
  //Function for calling the Http post method for registering the user
  registerUser(registerObj:any)
  {
      this.http.post('http://localhost:1000/register',registerObj).subscribe(res=>
      {
        console.log(res);
          this.token=res;
          if(this.token)
          {
            this.toastr.success("Registration Success Please Login"); 
          }
          localStorage.setItem('token',this.token.token);
          location.assign("http://localhost:4200/login");
      });
      
  }


  //Function for calling the Http post method for logging the user
  loginUser(loginObj:any)
  {
    this.http.post('http://localhost:1000/login',loginObj).subscribe(res =>
    {
      
        console.log(res);
        this.token=res;
        if(this.token)
          {
            this.toastr.success("Login Success"); 
          }
        console.log(this.token);
        localStorage.setItem('token',this.token.token); 
        location.assign('http://localhost:4300/user');
      
      
      
    });
  }

  //Function to logout the user
  logoutUser()
  {
    this.toastr.success("Logout Success"); 
    localStorage.removeItem('token')
  }


  //Function to check if user is loggedIn or Not loggedIn
loggedIn()
{
  return !!localStorage.getItem('token');
}
}
