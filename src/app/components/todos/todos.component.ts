import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit {

  todo_id :number;
  todo :Todo;
  items :Item[];
  form :FormGroup;

  constructor( private todosService:TodosService,
                private itemsService:ItemsService,
                private router:Router,
                private activatedRoute:ActivatedRoute,
                private _navbarService:NavbarService ) {

      activatedRoute.params.subscribe( params => {
        this.todo_id = +params['todo_id'];
      })
  }


  ngOnInit() {
    this._navbarService.show();

    this.getItems( this.todo_id );

    this.form = new FormGroup({
      name: new FormControl(  )
    });
  }



  getItems( todo_id :number) {
    this.itemsService.getItems( todo_id )
        .subscribe( (resp :any) => {
          console.log(resp);
          this.items = resp;
          console.log(this.items);
        })
  }


  addItem() {
    if ( !this.form.valid ) {
      console.log('Something went wrong.');
      console.log(this.form);
      return;
    }

    let new_item = new Item(
      this.form.value.name
    )

    this.itemsService.addItem( new_item, this.todo_id )
          .subscribe( (resp :any) => {
            console.log(resp);
            this.items.push( resp );
            console.log(this.items);
          })
  }


  deleteItem( index :number ) {
    this.itemsService.deleteItem( this.items[index].id, this.todo_id )
          .subscribe( (resp :any) => {
            console.log(resp);
            if (index !== -1) {
              this.items.splice(index, 1);
            }
          })
  }










}
