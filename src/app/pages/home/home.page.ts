import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonButtons,
  IonButton,
  IonIcon,
  IonRouterLink,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from '@ionic/angular/standalone';
import { TodoStoreService } from '../../services/todo-store.service';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { RouterLinkWithHref } from '@angular/router';
import { Todo } from '../../types/todo';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLinkWithHref,
    IonItemSliding, IonItemOption,IonItemOptions
  ],
})
export class HomePage {
  private store = inject(TodoStoreService);
  public todos = this.store.todos;
  constructor() {
    addIcons({ add });
  }
  deleteTodo(todo: Todo){
    this.store.delteTodo(todo);
  }
}
