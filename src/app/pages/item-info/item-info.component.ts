import { Component, OnInit } from '@angular/core';
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
  Id:string;
  val = {val: 8.5}

  constructor(private http:HttpService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromActiveRoute()
    this.getData();
  }

  getData(){
    this.itemInfoData$ = this.http.getPopularMoviesItemInfo(this.Id);
  }


  getDataFromActiveRoute(){
    this.activeRoute.params.subscribe((param:Params) => {
      this.Id = param['id'];
    })
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
