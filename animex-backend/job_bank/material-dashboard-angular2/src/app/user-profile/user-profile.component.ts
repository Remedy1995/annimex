import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'app/api-service.service';
import { User } from 'models/userData';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:ApiServiceService) { }
  firstname:any;
  lastname:any;
  username:any;
  dob:any;
  phone:any;
  email:any;
  address:any;
  data:any;
  _id:any;
  userInfo:User[];
  
  ngOnInit() {
    this.service.getInformation().subscribe(data=>{
    this.userInfo=data;
    this.username=this.userInfo['username'];
    this.lastname=this.userInfo['lastname'];
    this.address=this.userInfo['address'];
    this.dob=this.userInfo['dob'];
    this.email=this.userInfo['email'];
    this.phone=this.userInfo['phone'];
    this.firstname=this.userInfo['firstname'];
    this._id=this.userInfo['_id'];
    })
  }

}
