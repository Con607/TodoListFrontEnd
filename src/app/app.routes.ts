import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodosComponent } from './components/todos/todos.component';
import { ItemsComponent } from './components/todos/items/items.component';
import { SignInComponent } from './components/sign-in/sign-in.component';



const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:todo_id/items', component: ItemsComponent },

  { path: 'sign-in', component: SignInComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);
