import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-trending-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})

export class TrendingComponent implements OnInit {

  @Input() movieType?:string;
  @Output() sendingMovieEvent = new EventEmitter<any>();

  trendingMovies:any;
  theatreMovies:any;
  movielist:any;
 
  constructor(private http:HttpClient){}

  ngOnInit():void{
    if(this.movieType == "TRENDING"){
      this.getTrendingMovies();
    }else if(this.movieType == "THEATRE"){
      this.getTheatreMovies();
    }
    
    
  }

  getTrendingMovies(){
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies)=>{
      this.trendingMovies = movies;
      // this.movielist = this.trendingMovies;
      this.sendTheMovies(this.trendingMovies );
      // console.log(this.trendingMovies);
    })
  }
  
  getTheatreMovies(){
    this.http
    .get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies)=>{
      this.theatreMovies = movies;
      // this.movielist = this.theatreMovies;
      this.sendTheMovies(movies);
      // console.log(this.theatreMovies);
    })
  }

  sendTheMovies(movies:any){
    this.movielist = movies;
    this.sendingMovieEvent.emit(this.movielist);
  }

}
