import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Dialog2Component } from '../dialog2/dialog2.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog,private toastr:ToastrService) { }
  pass:any;
  ngOnInit(): void 
  {
  }
  verify()
  {

    const dialogRef = this.dialog.open(Dialog2Component, {
  
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The dialog was closed');
      this.pass=result;
      if(this.pass=="123456789")
      {
        location.assign("http://localhost:4300/admin");
      }

      else
      {
        this.toastr.success("Incorrect Password");
      }
    });
      /*var x=prompt("Enter password to access");
      if(x=="123456789")
      {
        location.assign("http://localhost:4300/admin")
      }*/
  }
  verify1()
  {
      location.assign("http://localhost:4200/register");
  }
  verify2()
  {
      location.assign("http://localhost:4200/login")
  }
  verify3()
  {
      location.assign("http://localhost:4200/") 
  }

}
