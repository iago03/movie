import { Component, ViewEncapsulation, Input } from '@angular/core';

import SwiperCore, { Pagination, Navigation } from "swiper";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Router } from '@angular/router';

SwiperCore.use([Pagination, Navigation])

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent{

  @Input() swiperItems:any;

  constructor(private route:Router) { }

  similarMovieItem(id:number){
    this.route.navigate(['/movie-info',id])
  }

}
