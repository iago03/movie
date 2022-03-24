import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  activeProperti:boolean = false;

  constructor(private router:Router) { }

  changeActive(){
    this.windowWidthCheked();
  }

  navigate(name:string){
    this.router.navigate(['/movie',name])
  }

  windowWidthCheked(){
    if(window.innerWidth <= 800){
      this.activeProperti = !this.activeProperti;
      document.body.classList.toggle('body-scroll');
    }
  }
}
