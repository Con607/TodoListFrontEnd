import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.model';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  todos :Todo[] = [];

  constructor( private todosService:TodosService,
                private router:Router,
                private _navbarService:NavbarService ) { }

  ngOnInit() {
    this._navbarService.show();

    this.getTodosList();
  }



  getTodosList() {
    this.todosService.getTodosList()
        .subscribe( (resp :any) => {
          console.log(resp);
          this.todos = resp;
          console.log(this.todos);
        })
  }


  addTodoList( title :string ) {
    this.todosService.addTodoList( title )
          .subscribe( (resp :any) => {
            console.log(resp);
            this.todos.push( resp );
            console.log(this.todos);
          })
  }


  deleteTodoList( index :number ) {
    this.todosService.deleteTodoList( this.todos[index].id )
          .subscribe( (resp :any) => {
            console.log(resp);
            if (index !== -1) {
              this.todos.splice(index, 1);
            }
          })
  }



  // Sweet Alert Messages
  newTodoListMessage() {
    swal({
      title: 'New Todo List',
      input: 'text',
      inputPlaceholder: "Title",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        this.addTodoList( result.value );
      }
    })
  }


  deleteTodoListMessage( index :number ) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.deleteTodoList( index );
        swal(
          'Deleted!',
          'It has been deleted.',
          'success'
        )
      }
    })
  }



}
