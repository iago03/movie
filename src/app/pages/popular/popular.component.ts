import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, map, Observable, take } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';
import { PopularMoviesItems } from 'src/app/shared/shared-class';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  obsArry:BehaviorSubject<PopularMoviesItems[]> = new BehaviorSubject<PopularMoviesItems[]>([]);
  data$:Observable<PopularMoviesItems[]> = this.obsArry.asObservable();
  
  page = 1;

  constructor(private http:HttpService, private rout:Router) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.http.getPopularMoviesList(this.page).subscribe(v => {
      this.obsArry.next(v);
    })
  }

  getId(id:number){
    this.rout.navigate(['/item-info',id]);
  }


  @HostListener("window:scroll", []) onWindowScroll(){
    if((window.scrollY + window.innerHeight >= document.documentElement.scrollHeight ) && this.data$){
      this.page ++;
      forkJoin([this.data$.pipe(take(1)), this.http.getPopularMoviesList(this.page)]).pipe(
        map(([o,v]) => {
         return o.concat(v)
        })
      ).subscribe(v => {
        this.obsArry.next(v)
      })
    }
  }

}
