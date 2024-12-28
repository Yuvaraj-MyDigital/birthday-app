import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TrendingComponent } from "../trending/trending.component";
import { MoviesComponent } from "../movies/movies.component";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, TrendingComponent, MoviesComponent, HttpClientModule, CommonModule]
})
export class HomeComponent {

}
