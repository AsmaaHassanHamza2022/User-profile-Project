import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
   
    var header = document.getElementById("nav");
    var toppart = document.getElementById("page-head");

    if(header != null && toppart!=null){
      var sticky = header.offsetTop;
      console.log(sticky);
      window.onscroll = function() {
        if (window.pageYOffset > sticky) {
          header?.classList.add("sticky");
          toppart?.classList.add("hide");

        } else {
          header?.classList.remove("sticky");
          toppart?.classList.remove("hide");
        }
      };
    }
    
  }

  
  
}
