import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {

  employeeId=""
  password=""


  readValues=()=>
  {
    let data:any={
      "employeeId":this.employeeId,"password":this.password
    }
    console.log(data)

    if(this.employeeId=="1122" && this.password=="12345"){
      alert("valid login")
      
    }else{
      alert("invalid credentials")
    }

    
  }

}
