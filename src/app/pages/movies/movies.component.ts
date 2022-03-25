import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, map, Observable, Subscription, take } from 'rxjs';
import { PopularMoviesItems } from 'src/app/shared-class/shared-class';
import { HttpService } from 'src/app/shared-service/http.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  obsArry:BehaviorSubject<PopularMoviesItems[]> = new BehaviorSubject<PopularMoviesItems[]>([]);
  data$:Observable<PopularMoviesItems[]> = this.obsArry.asObservable();
  scroll:Subscription;
  name:string;
  activRoute:Subscription;
  
  
  page = 1;

  constructor(private http:HttpService, private route:Router) { }

  ngOnInit(){
    this.getTopRatedMoviesList()
  }

  getTopRatedMoviesList(){
    this.scroll = this.http.getAllMoviesList(this.page).subscribe(v => {
      this.obsArry.next(v);
      this.page ++;
    })
  }

  getId(id:number){
    this.route.navigate(['/movie-info', id])
  }

  @HostListener("window:scroll", []) onWindowScroll(){
    if((window.scrollY + window.innerHeight >= document.documentElement.scrollHeight ) && this.page >= 2){
      
      this.scroll = forkJoin([this.data$.pipe(take(1)), this.http.getAllMoviesList(this.page)]).pipe(
        map(([o,v]) => {
         return o.concat(v)
        })
      ).subscribe(v => {
        this.obsArry.next(v)
      })

      this.page ++;
    }
  }

}
