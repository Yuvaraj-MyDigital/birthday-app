import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";
  error_msg = "";

 constructor(private auth:AuthService, private router:Router){}

 login(){
  let login_result = this.auth.login(this.username,this.password);
  if(login_result == 200){
    this.router.navigate(['home'])
  }else if(login_result == 403){
    this.error_msg = "Not So Sweet Jo";
  }
 }
}
