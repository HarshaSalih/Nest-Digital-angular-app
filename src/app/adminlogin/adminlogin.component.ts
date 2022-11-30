import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  userName=""
  password=""

  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={
      "userName":this.userName,"password":this.password
    }
    console.log(data)

    if (this.userName=="admin" && this.password=="nestdigital") {
      this.route.navigate(['/viewallcourses'])
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
