import { Injectable } from '@angular/core';
import { URL_SERVER } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/internal/operators/map';
import { Todo } from '../models/todo.model';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class TodosService {

  headers;

  constructor( private http:HttpClient,
                private router:Router,
                private authService:AuthService ) {

    this.headers = {
      'Content-Type':  'application/json',
      'Authorization': this.authService.getToken()
    }
  }



  getTodosList() {
    if ( this.authService.isLoggedIn() ) {

      let url = URL_SERVER + '/todos';

      return this.http.get( url, { headers: this.headers });

    }
  }


  addTodoList( title :string ) {
    if ( this.authService.isLoggedIn() ) {

      let url = URL_SERVER + '/todos';
      return this.http.post( url, { 'title': title,
                                    'user_id': this.authService.getUserId() },
                                  { headers: this.headers })
              .pipe( map( (resp :any) => {
                let new_todo :Todo = resp;
                this.successTodoListCreateMessage();
                return new_todo;
              }));

    }
  }



  deleteTodoList( todo_id :number) {
    if ( this.authService.isLoggedIn() ) {

      let url = URL_SERVER + '/todos/' + todo_id;
      return this.http.delete( url, { headers: this.headers })

    }
  }




  // Sweet Alert Messages
  successTodoListCreateMessage(): any {
    swal({
      title: 'Todo List created!',
      text: "Now add some tasks to it.",
      type: 'success'
    }).then((result) => {
      // Do something here
    })
  }



}
