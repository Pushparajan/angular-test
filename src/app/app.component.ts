import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Pushparajan';
  
  todoList = [{id:1, name: 'task1', complete:true}, {id:2, name: 'task2', complete:false}];
  
  newTodo:any;

  onAdd(todoName){
    var newTodo = {id:this.todoList.length+1, name:todoName, complete:false};
    this.todoList.push(newTodo);
  }

  onDelete(todo){
    this.todoList = this.todoList.filter(t=> t.id != todo.id)
  }





}
