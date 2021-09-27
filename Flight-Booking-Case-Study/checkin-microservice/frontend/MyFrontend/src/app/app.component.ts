import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  public registerObj={num:''};
  CheckInform=new FormGroup
  ({
      num:new FormControl('',[Validators.required])
  })
  
  constructor(public api:ApiService)
  {
 
  }
  title = 'MyFrontend';

  //Function for checking if bookingid is present in database or not
  check()
  {
    console.log(this.registerObj);
      this.api.check1(this.registerObj)
  }
}
 