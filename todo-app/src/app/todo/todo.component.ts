import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle.trim(),
        completed: false
      };
      this.todoService.addTodo(newTodo);
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos();
    }
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
