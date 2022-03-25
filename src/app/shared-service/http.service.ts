import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ItemInfo, PopularMoviesItems } from '../shared-class/shared-class'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  imgPath = "http://image.tmdb.org/t/p/w500";
  api_key = "730c458a75766d797ebf72e6c2791bf9";

  constructor(private http:HttpClient) { }

  





  getAllMoviesList(page:number){
    return this.http.get<Observable<PopularMoviesItems[]>>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.api_key}&language=en-US&page=${page}`)
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



  getPopularAndTopRatedMoviesList(page:number,name:string){
    return this.http.get<Observable<PopularMoviesItems[]>>(`https://api.themoviedb.org/3/movie/${name}?api_key=${this.api_key}&language=en-US&page=${page}`)
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


  getSimilarMovieList(id:string){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.api_key}&language=en-US&page=1`)
      .pipe(map((response:any) => {
        let newData = response.results.map((o:any) => {

          o.backdrop_path = this.imgPath + o.backdrop_path;
          o.poster_path = this.imgPath + o.poster_path;
          
          let newDataItem = {
            id: o.id,
            img: o.poster_path,
            title: o.original_title,
          };

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

  getMovieVideoLink(id:string){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=730c458a75766d797ebf72e6c2791bf9&language=en-US`)
      .pipe(map((response:any):string => {
        let video = response.results.filter(v => v.name === "Official Trailer");
        let videoUrl = `http://www.youtube.com/embed/${video[0].key}?modestbranding=1`
        return videoUrl
      }))
  }




  
}
