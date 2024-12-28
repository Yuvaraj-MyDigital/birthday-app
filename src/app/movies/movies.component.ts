import { Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { TrendingComponent } from "../trending/trending.component";
import { CommonModule } from '@angular/common';
import { PopularComponent } from "../popular/popular.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [ CommonModule]
})
export class MoviesComponent {
  constructor(private http:HttpClient){}
  @ViewChild('audioControl') audioElement!: ElementRef;
  public audioDetails:any;
  public audioIncrement = 0;
  public player: HTMLAudioElement | null = document.getElementById('audioControl') as HTMLAudioElement;
  public   audioList = [
    {
      url: "assets/birthday/Audio1.mp3",
      name: "Happy Birthday",
      cover: "assets/birthday/1.jpg"
    },
    {
      url: "assets/birthday/Standard recording 11.mp3",
      name: "I'm Obsessed",
      cover: "assets/birthday/2.jpeg"
    },
    {
      url: "assets/birthday/Standard recording 13.mp3",
      name: "Thinking Of You",
      cover: "assets/birthday/3.jpg"
    },
  ];
  public isPlaying = false;
  public currentTime = 0;
  public duration = 0;


  ngOnInit():void{
    this.getAudioDetails();
  }
  ngAfterViewInit() {
    this.player = document.getElementById('audioControl') as HTMLAudioElement;
    this.duration = this.player.duration;
    console.log(this.player); // Check if the element is found
  }
  getAudioDetails(){
    this.audioDetails = this.audioList;
  }
  nextAudio(){
    this.audioIncrement +=1;
    this.player?.load();
    this.player?.play(); 
    console.log(this.audioIncrement);
  }
  playpreviousAudio(){
    this.audioIncrement -=1;
    if(this.audioIncrement < 0){
        this.audioIncrement=0;
    }
    this.player?.load();
    this.player?.play();
  }
  togglePlayPause(): void {
    if(this.isPlaying){
        this.player?.pause();
    }else{
        this.player?.play();
    }
    this.isPlaying = !this.isPlaying;

  }
  updateTime() {
    const audio = this.audioElement.nativeElement;
    this.currentTime = audio.currentTime;
    this.duration = audio.duration;
  }
  onSeek(event: any) {
    const audio = this.audioElement.nativeElement;
    audio.currentTime = event.target.value;
  }
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
}
