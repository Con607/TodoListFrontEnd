import { Item } from "./item.model";


export class Todo {

  constructor (
    public title: string,
    public id? :number,
    public items? :Item[]
  ) {}

}
