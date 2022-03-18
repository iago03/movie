import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/http.service';
import { ItemInfo } from 'src/app/shared/shared-class';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  
  itemInfoData$:Observable<ItemInfo>;
  videoUrl:SafeResourceUrl;
  videoUrlError = false;
  Id:string;
  val = {val: 8.5}

  constructor(private http:HttpService, private activeRoute:ActivatedRoute, private sanitaizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getDataFromActiveRoute()
    this.getData();
    this.getVideo()
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
    this.http.getMovieVideoLink(this.Id).subscribe(v => {
      this.videoUrl = this.sanitaizer.bypassSecurityTrustResourceUrl(v);
    },
    err => {
      console.log(err)
    }
    );
  }




  

  // test(){
  //   this.http.putRequest().subscribe(v => {
  //     console.log(v)
  //   })
  // }

  // token(){
  //   this.http.sesionId().subscribe(v => {
  //     console.log(v);
  //   })
  // }

}
