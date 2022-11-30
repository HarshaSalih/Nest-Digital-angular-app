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
import { EmployeeloginComponent } from './employeelogin/employeelogin.component'

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
    EmployeeloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
