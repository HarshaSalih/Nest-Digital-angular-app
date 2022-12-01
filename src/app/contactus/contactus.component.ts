import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  name=""
  companyName=""
  designation=""
  phone=""
  email=""
  subject=""

  readValues=()=>
  {
    let data:any={"name":this.name,"companyName":this.companyName,"designation":this.designation,"phone":this.phone,"email":this.email,"subject":this.subject}
    console.log(data)
  }

}
