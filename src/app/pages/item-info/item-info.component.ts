import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared-service/http.service';
import { ItemInfo } from 'src/app/shared-class/shared-class';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  
  itemInfoData$:Observable<ItemInfo>;
  similarMovies$:Observable<ItemInfo>;
  videoUrl:SafeResourceUrl;
  videoUrlError = false;
  Id:string;
  val = {val: 8.5}

  constructor(private http:HttpService, private activeRoute:ActivatedRoute, private sanitaizer:DomSanitizer, private route:Router) { 
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.getDataFromActiveRoute()
    this.getData();
    this.getVideo();
    this.getSimilarMovieList();
  }

  getData(){
    this.itemInfoData$ = this.http.getPopularMoviesItemInfo(this.Id);
  }


  getDataFromActiveRoute(){
    this.activeRoute.params.subscribe((param:Params) => {
      this.Id = param['id'];
    })
  }


  getVideo(){
    this.http.getMovieVideoLink(this.Id).subscribe({
    
    next: (v) => {
      this.videoUrl = this.sanitaizer.bypassSecurityTrustResourceUrl(v);
    },
    error: (err) => {
      console.log(err)
    }}
    );
  }

  getSimilarMovieList(){
    this.similarMovies$ = this.http.getSimilarMovieList(this.Id);
  }


}
