import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ItemsComponent } from './components/todos/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { TodosService } from './services/todos.service';
import { ItemsService } from './services/items.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ItemsComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    TodosService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
