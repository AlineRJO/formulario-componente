import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit{

  @Input() title: string;

  constructor() {
   
   
  }

  ngOnInit(){
    
  }
}
