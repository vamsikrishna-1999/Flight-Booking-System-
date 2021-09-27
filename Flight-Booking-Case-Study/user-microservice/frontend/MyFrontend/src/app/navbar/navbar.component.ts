import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthServiceService,private toastr:ToastrService,private dialog:MatDialog) { }

  ngOnInit(): void 
  {
  }

  pass:any;

  //Function for navigating to Admin Component
  verify()
  {
    const dialogRef = this.dialog.open(MyDialogComponent, {
  
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
  }

  //Function for navigating to Search Component
  send()
  {
    if(this.auth.loggedIn())
    {
      location.assign("http://localhost:4300/user");
    }
    else
    {
      location.assign("http://localhost:4300/user1");
    }
  }


  //Function for navigating to Home Component
  verify1()
  {
    location.assign("http://localhost:4200/") 
  }

  
  
}
