import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  // to allow Update in Fake Api 
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  constructor(private _http:HttpClient) { }

  // call Api to Get Data

  getAllData():Observable<any>{

    return this._http.get("http://localhost:3000/users");
  }


  // call Api to Update Data

  EditData(userId:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/users/${userId}`,data, { 'headers': this.headers });
  }
}

