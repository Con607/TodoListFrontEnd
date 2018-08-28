import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public authService:AuthService,
                private _navbarService:NavbarService ) { }

  ngOnInit() {
    this._navbarService.show();
  }
}
