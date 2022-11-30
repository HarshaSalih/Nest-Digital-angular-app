import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  employeeId=""
  password=""

  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={
      "employeeId":this.employeeId,"password":this.password
    }
    console.log(data)

    if(this.employeeId=="1122" && this.password=="12345"){
      // alert("valid login")
      this.route.navigate(['addcourse'])
      
    }else{
      alert("invalid credentials")
    }

    
  }

}
