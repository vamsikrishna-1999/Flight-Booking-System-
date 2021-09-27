import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface Flight 
{
  value: string;
  viewValue: string;
}

interface Flight1
{
  value: string;
  viewValue: string;
}

interface Type1
{
  value: string;
  viewValue: string;
} 

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit 
{

  departure!: Date;
  return1:string='';
  selectedvalue1:string='';
  selectedvalue:string='';
  selectedvalue2:string='';
  flights: Flight[] = 
  [
          {value:"Hyderabad",viewValue:"Hyderabad"},
          {value:"Mumbai",viewValue:"Mumbai"},
          {value:"Goa",viewValue:"Goa"},
          {value:"Kolkatta",viewValue:"Kolkatta"},
          {value:"Delhi",viewValue:"Delhi"},
          {value:"Banglore",viewValue:"Banglore"}
  ];

  flights1: Flight1[] = 
  [
          {value:"Hyderabad",viewValue:"Hyderabad"},
          {value:"Mumbai",viewValue:"Mumbai"},
          {value:"Goa",viewValue:"Goa"},
          {value:"Kolkatta",viewValue:"Kolkatta"},
          {value:"Delhi",viewValue:"Delhi"},
          {value:"Banglore",viewValue:"Banglore"}
  ];

  type11: Type1[] = 
  [
          {value:"Economic",viewValue:"Economic"},
          {value:"Business",viewValue:"Business"},
          {value:"Gold",viewValue:"Gold"}
  ];

  constructor(public api:ApiService) { }


 
  

  ngOnInit(): void {}


  //Function for getting the flight details by the provided information
  getData() 
  {
    

    console.log(this.selectedvalue1);
    console.log(this.selectedvalue);
    console.log(this.departure);
    console.log(this.selectedvalue2);
    this.api.getUsers(this.selectedvalue1,this.selectedvalue,this.departure,this.selectedvalue2);
  }


  //Function for checking if the user is logged In or Not for proceeding to booking
  send()
  {
    location.assign("http://localhost:4200/login");
  }
}
