import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  activeProperti:boolean = false;

  ngOnInit(): void {
  }

  changeActive(){
    this.windowWidthCheked();
  }

  windowWidthCheked(){
    if(window.innerWidth <= 800){
      this.activeProperti = !this.activeProperti;
      document.body.classList.toggle('body-scroll');
    }
  }
}
