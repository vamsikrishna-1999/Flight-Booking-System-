import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog1Component } from '../dialog1/dialog1.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  
{

  RegisterForm=new FormGroup
  ({
      Flight_id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      from:new FormControl('',[Validators.required]),
      to:new FormControl('',[Validators.required]),
      departure:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      class1:new FormControl('',[Validators.required])
  })
  public registerObj={Flight_id:'',name:'',starting:'',ending:'',departure:'',total:'',type1:''}

  constructor(public api:ApiService,private toastr:ToastrService,private dialog:MatDialog) { }

  ngOnInit(): void 
  {
  }

  //Function for saving the flight details 
  sendData()
  {  
    this.api.registerUser(this.registerObj);
    this.toastr.success("saved successfully");
    location.assign('/admin');
  }  

  boo:any;

  //Function for deleting the flight details
  deleteData()
  {

    const dialogRef = this.dialog.open(DialogComponent, 
    {
      
    });

    dialogRef.afterClosed().subscribe(result => 
    {
      console.log('The dialog was closed');
      this.boo=result;
      console.log(this.boo);

      const dialogRef = this.dialog.open(Dialog1Component, 
        {
          
        });
    
        dialogRef.afterClosed().subscribe(result => 
        {
          console.log('The dialog was closed');
          console.log(result);

          if(result=="true")
          {
            this.api.deleteFlight(this.boo);
          }
          else{
            this.toastr.success("Process Terminated");
          }
        });

    });

  }
  submitData()
  {

  }
}
