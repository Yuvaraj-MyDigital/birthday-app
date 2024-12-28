import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-movies',
  standalone: true,
  imports: [],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
  popularMovies:any;
  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies)=>{
      this.popularMovies = movies;
      // console.log(this.popularMovies);
    })
  }
}
