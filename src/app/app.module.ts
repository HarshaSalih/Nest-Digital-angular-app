import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component'
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },
  {
    path:"contact",
    component:ContactusComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"viewallcourses",
    component:ViewCourseComponent
  },
  {
    path:"viewallfriends",
    component:ViewFriendComponent
  },
  {
    path:"employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"employeeregistration",
    component:EmployeeregistrationComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutusComponent,
    ContactusComponent,
    AdminloginComponent,
    ViewCourseComponent,
    ViewFriendComponent,
    EmployeeloginComponent,
    EmployeeregistrationComponent,
    AddCourseComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
