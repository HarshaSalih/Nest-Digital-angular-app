import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  userName=""
  password=""


  readValues=()=>
  {
    let data:any={
      "userName":this.userName,"password":this.password
    }
    console.log(data)

    if (this.userName=="admin" && this.password=="nestdigital") {
      alert("valid")
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
