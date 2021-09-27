import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  title = 'MyFrontend';
  [x: string]: any;
  componentName="LoginComponent";

  constructor(public auth:AuthServiceService) { }

  LoginForm=new FormGroup 
  ({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  })


  //Storing User credentials in loginObj
  public loginObj={email:'',pwd:''} 
  boo:any;
  

  ngOnInit(): void { }

  //Function for User logging 
  login() 
  {
      this.auth.loginUser(this.loginObj);
     
  }
  

  //Function for User logout
  logout()
  {
      this.auth.logoutUser();
      alert("logout success")
      location.assign('/login');
  }
 
  submitData()
  { 
    
  }
}
