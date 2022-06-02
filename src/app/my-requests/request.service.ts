import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  allApplicationRequests:any=
  [
    {
      "page":1,
      "result":[
        {Refrance:"CAS-123-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-123-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"New",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-123-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-123-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-123-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
     
      ],
      "total_pages":5
    },
    {
      "page":2,
      "result":[
        {Refrance:"CAS-256-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-256-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"New",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-256-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-256-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-256-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
     
      ],
      "total_pages":5
    },
    {
      "page":3,
      "result":[
        {Refrance:"CAS-321-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-321-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"New",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-321-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-321-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-321-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
     
      ],
      "total_pages":5
    },
    {
      "page":4,
      "result":[
        {Refrance:"CAS-432-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-432-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"New",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-432-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-432-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-432-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
     
      ],
      "total_pages":5
    },
    {
      "page":5,
      "result":[
        {Refrance:"CAS-564-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-564-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"New",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-564-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-564-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
        {Refrance:"CAS-564-F3B5",Service:"complaint",ApplicationName:"Ahmed Mohamed",status:"transfered",SubmittedData:"June 3,2022. 12:00AM"},
     
      ],
      "total_pages":5
    }
   

  ]
  
  constructor() { }



  getApplicationDataBYPage(page:number):any{
    for(let i=0;i<this.allApplicationRequests.length;i++){
      if(this.allApplicationRequests[i].page ==page){
        return this.allApplicationRequests[i];
      }
    }
  }

  getNumberOfTotalPages():number{
    return this.allApplicationRequests[0].total_pages;
  }
}
