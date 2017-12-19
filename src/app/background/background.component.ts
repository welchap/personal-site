import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  version: string = environment.version;
  viewContext: string;

  constructor() { }

  ngOnInit() { 
    this.viewContext= "Show";
  }
  
  toggleQuickView(){
    if($(".quickview").is(":hidden"))
    {
      this.viewContext="Hide";
      
    }else{
      this.viewContext="Show";
    }
    $(".quickview").slideToggle();
    
  }

}
