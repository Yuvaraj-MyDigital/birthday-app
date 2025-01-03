import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route:Router,private auth:AuthService){}
  goToHome(){
    this.route.navigate(['happy-birthday-jo-sweetie']);
  }
  logout(){
    this.auth.logout;
  }
}
