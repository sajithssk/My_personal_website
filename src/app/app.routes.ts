import { Routes } from '@angular/router';
import { AppComponent } from './app';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'about', component: AppComponent },
  { path: 'experience', component: AppComponent },
  { path: 'skills', component: AppComponent },
  { path: 'projects', component: AppComponent },
  { path: 'education', component: AppComponent },
  { path: 'contact', component: AppComponent },
  { path: '**', redirectTo: 'home' }
];
