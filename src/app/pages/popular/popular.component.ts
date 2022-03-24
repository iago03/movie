import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, forkJoin, map, Observable, Subscription, take } from 'rxjs';
import { HttpService } from 'src/app/shared-service/http.service';
import { PopularMoviesItems } from 'src/app/shared-class/shared-class';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit, OnDestroy {
  obsArry:BehaviorSubject<PopularMoviesItems[]> = new BehaviorSubject<PopularMoviesItems[]>([]);
  data$:Observable<PopularMoviesItems[]> = this.obsArry.asObservable();
  scroll:Subscription;
  name:string;
  activRoute:Subscription;
  
  
  page = 1;

  constructor(private http:HttpService, private rout:Router, private routeActive:ActivatedRoute) { 
    this.rout.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(){
    this.getActiveRoute();
    this.getdata()
  }

  ngOnDestroy(){
    this.scroll.unsubscribe();
    this.activRoute.unsubscribe()
  }

  getdata(){
    this.scroll = this.http.getPopularAndTopRatedMoviesList(this.page, this.name).subscribe(v => {
      this.obsArry.next(v);
      this.page ++;
    })
  }
  
  getActiveRoute(){
    this.activRoute = this.routeActive.params.subscribe((params:Params) => {
      this.name = params["name"]
    })
  }

  getId(id:number){
    this.rout.navigate(['/movie-info',id]);
  }


  @HostListener("window:scroll", []) onWindowScroll(){
    if((window.scrollY + window.innerHeight >= document.documentElement.scrollHeight ) && this.page >= 2){
      
      this.scroll = forkJoin([this.data$.pipe(take(1)), this.http.getPopularAndTopRatedMoviesList(this.page,this.name)]).pipe(
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
