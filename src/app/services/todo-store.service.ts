import { Injectable, effect, signal } from '@angular/core';
import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  public todos = signal<Array<Todo>>([]);
  constructor() {
    const items = JSON.parse(localStorage.getItem('todo-items') ?? '[]');
    if (items.length) {
      this.todos.set(items);
    }
    effect(() => {
      localStorage.setItem('todo-items', JSON.stringify(this.todos()));
    });
  }

  addTodo(newTodo: Partial<Todo>) {
    this.todos.update((val) => [
      ...val,
      { ...newTodo, id: crypto.randomUUID(), isComplete: false },
    ]);
  }
  updateTodo(newTodo: Todo) {
    this.todos.update((val) =>
      val.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
    );
  }

  toggleComplete(update: Todo) {
    update.isComplete = !update.isComplete;
    this.todos.update((state) =>
      state.map((todoToFind: Todo) =>
        todoToFind.id === update.id ? update : todoToFind,
      ),
    );
  }
  delteTodo(todo: Todo) {
    this.todos.update((state) => state.filter(item => item.id !== todo.id))
  }
}
