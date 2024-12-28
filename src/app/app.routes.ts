import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: "login", pathMatch: 'full' } ,
    { path: 'login', component: LoginComponent },
    {path:'happy-birthday-jo-sweetie',component:HomeComponent},
    { path: '**', component: LoginComponent },
];
