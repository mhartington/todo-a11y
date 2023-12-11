import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoStoreService } from '../../services/todo-store.service';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonInput,
  IonList,
  IonItem,
  IonButton,
  NavController,
} from '@ionic/angular/standalone';
import { Todo } from '../../types/todo';
import { Location } from '@angular/common';

const initialFormState: Partial<Todo> = {
  name: '',
  isComplete: false,
};

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.page.html',
  styleUrls: ['./new-todo.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    IonInput,
    IonList,
    IonItem,
    IonButton,
  ],
})
export class NewTodoPage {
  private store = inject(TodoStoreService);
  private navController = inject(NavController);

  constructor() {}

  form = initialFormState;
  saveTodo() {
    this.store.addTodo(this.form);
    this.navController.pop();
  }
}
