import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ItemInfo, PopularMoviesItems } from './shared-class'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  imgPath = "http://image.tmdb.org/t/p/w500";
  api_key = "730c458a75766d797ebf72e6c2791bf9";
  val = {val: 8.5};
  token = {
    request_token: "31e7b4d141b930d79cd755d77e68e8c5da1b6629"
  }
  constructor(private http:HttpClient) { }

  





  getPopularMoviesList(page:number){
    return this.http.get<Observable<PopularMoviesItems[]>>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=${page}`)
      .pipe(map((response:any):PopularMoviesItems[] => {
        let newData = response.results.map((o:any):PopularMoviesItems => {

          o.backdrop_path = this.imgPath + o.backdrop_path;
          o.poster_path = this.imgPath + o.poster_path;
          
          let newDataItem:PopularMoviesItems = o;

          return newDataItem
        });
        return newData
      }));

  }


  getPopularMoviesItemInfo(id:string){
    return this.http.get<Observable<PopularMoviesItems[]>>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`)
      .pipe(map((response:any):ItemInfo => {

        response.backdrop_path = this.imgPath + response.backdrop_path;
        response.poster_path = this.imgPath + response.poster_path;
        response.production_companies.map(o => {
         if(o.logo_path != null){
           return o.logo_path = this.imgPath + o.logo_path
         }else{
           return false
         }
        })

        let newData = response;
        return newData
      }));
      
  }

  // putRequest(){
  //   const headers = { 'content-type': 'application/json;charset=utf-8'}  
  //   const body=JSON.stringify(this.val);
  //  return this.http.post("https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=730c458a75766d797ebf72e6c2791bf9&guest_session_id=null&session_id=null", body, {"headers":headers})
  // }


  // sesionId(){
  //   const body=JSON.stringify(this.token);
  //   return this.http.post("https://api.themoviedb.org/3/authentication/session/new?api_key=730c458a75766d797ebf72e6c2791bf9", body);
  // }
}
