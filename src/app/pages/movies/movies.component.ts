import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PopularMoviesItems } from 'src/app/shared-class/shared-class';
import { HttpService } from 'src/app/shared-service/http.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data$:Observable<PopularMoviesItems[]>;

  constructor(private http:HttpService, private route:Router) { }

  ngOnInit(){
    this.getTopRatedMoviesList()
  }

  getTopRatedMoviesList(){
    this.data$ = this.http.getAllMoviesList(1);
  }

  getId(id:number){
    this.route.navigate(['/movie-info', id])
  }

}
