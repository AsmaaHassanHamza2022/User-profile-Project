import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import{User} from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user-details',
  templateUrl: './show-user-details.component.html',
  styleUrls: ['./show-user-details.component.scss']
})
export class ShowUserDetailsComponent implements OnInit {

  preImagePart:string="../../../../assets/";
  ourUser=new User();
  
  constructor(private _UserService:UserServiceService,private _Router:Router) { }

  ngOnInit(): void {
 
    this._UserService.getAllData().subscribe({
      next:(data)=>{
        this.ourUser=data[0];
      }
    });
    
  }

  EditData(data:User){
    this._Router.navigate(["/edit"]);
    localStorage.setItem("UserData",JSON.stringify(data));
  }

}
