import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicatioData } from '../../applicatio-data';
import { RequestService } from '../../request.service';



@Component({
  selector: 'app-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.scss']
})
export class RequestsTableComponent implements OnInit {

  dataSource:any;
  pagesNumber:number=0;
  pagesNumberArray:Number[]=[];
  currentPageNumber:number=0;


  constructor(private _RequestService:RequestService) {
    this.getAllData(1);
    this.pagesNumber=this._RequestService.getNumberOfTotalPages();
    
    // make loop to make Array of pages number to use it in making pagnition numbers
    let i:number;
    for(i=0;i<this.pagesNumber;i++){
       this.pagesNumberArray.push(i+1);
    }

   }

  ngOnInit(): void {
  }

ChangeData(Data:any){
  let pageNumber=Data.target.innerHTML;
  Data.target.classList.add("Active-pagniation");
  Data.target.previousElementSibling.classList.remove("Active-pagniation");
  Data.target.nextElementSibling.classList.remove("Active-pagniation");

  this.getAllData(pageNumber);

}

getAllData(pageNumber:number){
  this.currentPageNumber=pageNumber;
  let ourData=this._RequestService.getApplicationDataBYPage(pageNumber).result;
  this.dataSource=new MatTableDataSource(ourData);


}

// previous page
pre(){
  if(this.currentPageNumber == 1){
    this.currentPageNumber =this.pagesNumber+1;
  }
  this.getAllData(this.currentPageNumber-1);
  
}

// next page
next(){
  if(this.currentPageNumber == this.pagesNumber){
    this.currentPageNumber =0;
  }
  this.getAllData(this.currentPageNumber+1);
}

//filter function

FilterTable(Data:any){
  console.log(Data.value);
  this.dataSource.filter=Data.value;

}




columns = [
  {
    columnDef: 'ref',
    header: 'References',
    cell: (element:ApplicatioData) => `${element.Refrance}`,
  },
  {
    columnDef: 'service',
    header: 'Services',
    cell: (element: ApplicatioData) => `${element.Service}`,
  },
  {
    columnDef: 'Name',
    header: 'Application Name',
    cell: (element: ApplicatioData) => `${element.ApplicationName}`,
  },
  {
    columnDef: 'status',
    header: 'Status',
    cell: (element: ApplicatioData) => `${element.status}`,
  },
  {
    columnDef: 'submitdate',
    header: 'Submit Date',
    cell: (element: ApplicatioData) => `${element.SubmittedData}`,
  }
];
displayedColumns = this.columns.map(c => c.columnDef);

}
