import { Injectable } from '@angular/core';
import { URL_SERVER } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/internal/operators/map';
import { Item } from '../models/item.model';


@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  headers;

  constructor( private http:HttpClient,
                private router:Router,
                private authService:AuthService ) {

    this.headers = {
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    }
  }


  getItems( todo_id :number ) {
    if ( this.authService.isLoggedIn() ) {

      let url = URL_SERVER + '/todos/' + todo_id + '/items';
      return this.http.get( url, { headers: this.headers });

    }
  }


  addItem( new_item :Item, todo_id :number ) {
    if ( this.authService.isLoggedIn() ) {

      let url = URL_SERVER + '/todos/' + todo_id + '/items';
      return this.http.post( url, { 'name': new_item.name },
                                  { headers: this.headers })
              .pipe( map( (resp :any) => {
                let new_item :Item = resp;
                return new_item;
              }));
    }
  }


  deleteItem( item_id :number, todo_id :number) {
    if ( this.authService.isLoggedIn() ) {

      let url = URL_SERVER + '/todos/' + todo_id + '/items/' + item_id;
      return this.http.delete( url, { headers: this.headers })

    }
  }







}
