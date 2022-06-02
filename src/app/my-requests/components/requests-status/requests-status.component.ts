import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-status',
  templateUrl: './requests-status.component.html',
  styleUrls: ['./requests-status.component.scss']
})
export class RequestsStatusComponent implements OnInit {

  returnValue:number=70;
  pendingValue:number=40;
  constructor() { }

  ngOnInit(): void {
  }

}
