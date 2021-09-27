import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  pass:any;

  //Function for navigating to Admin Component by checking the Credentials 
  verify() 
  {
    const dialogRef = this.dialog.open(DialogComponent, {
  
    });

    dialogRef.afterClosed().subscribe(result => { 
      console.log('The dialog was closed');
      this.pass=result;
      console.log(this.pass);
      if(this.pass=="123456789")
      {
        location.assign("http://localhost:4300/admin");
      }

      else
      {
        this.toastr.success("Incorrect Password");
      }
    });
  }




//Function for navigating to Home Component
  verify3()
  {
      location.assign("http://localhost:4200/") 
  }

}
