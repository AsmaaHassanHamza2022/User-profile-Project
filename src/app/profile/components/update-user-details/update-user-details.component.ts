import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.scss']
})
export class UpdateUserDetailsComponent implements OnInit {
  preImagePart:string="../../../../assets/";
  targetUser:any;
  nationalityList:string[]=[
    "Afghan",
    "Albanian",
    "Algerian",
    "American",
    "Andorran",
    "Angolan",
    "Antiguans",
    "Argentinean",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Bahraini",
    ]
  constructor(private _UserService:UserServiceService,private _Router:Router) {

   let user=localStorage.getItem("UserData")|| '{}';
   this.targetUser=JSON.parse(user) ;
   }

  ngOnInit(): void {}


  // function call when Click on Image
  handleClick() {
  document.getElementById('upload-file')?.click();
  }

  // function catch new Image and change old image by it

addAttachment(fileInput: any) {
  this.targetUser.profileImage=fileInput.target.files[0].name;
  
}

// update data
UpdateData(id:number,data:any){

  this._UserService.EditData(id,data).subscribe({
    next:(data)=>{
      this._Router.navigate(['/profile']);

    }
  })
}
}
