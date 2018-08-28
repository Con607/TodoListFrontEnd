import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ItemsComponent } from './components/todos/items/items.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { TodosService } from './services/todos.service';
import { ItemsService } from './services/items.service';
import { AuthService } from './services/auth.service';
import { NavbarService } from './services/navbar.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInGuardGuard } from './services/guard/sign-in.guard';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ItemsComponent,
    HomeComponent,
    DashboardComponent,
    SignInComponent,
    NavbarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodosService,
    ItemsService,
    AuthService,
    NavbarService,
    SignInGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
