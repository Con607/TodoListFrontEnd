import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodosComponent } from './components/todos/todos.component';
import { ItemsComponent } from './components/todos/items/items.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInGuardGuard } from './services/guard/sign-in.guard';



const app_routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'dashboard', component: DashboardComponent, canActivate: [ SignInGuardGuard ] },
  { path: 'todos/:todo_id', component: TodosComponent, canActivate: [ SignInGuardGuard ] },
  { path: 'todos/:todo_id/items', component: ItemsComponent, canActivate: [ SignInGuardGuard ] },

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);
