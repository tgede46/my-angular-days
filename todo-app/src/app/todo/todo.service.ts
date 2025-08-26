import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: true },
    { id: 2, title: 'Create a Todo App', completed: false },
    { id: 3, title: 'Deploy the app', completed: false }
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  updateTodo(updatedTodo: Todo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}