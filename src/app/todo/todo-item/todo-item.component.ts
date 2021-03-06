import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, RemoveTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputElem') txtInputElem: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editing: Boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges
      .subscribe( () => {
        const action = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(action);
      });
  }

  edit() {
    this.editing = true;

    setTimeout(() => {
     this.txtInputElem.nativeElement.select();
    }, 1);
  }

  finishEdition() {
    this.editing = false;

    if (this.txtInput.valid && this.txtInput.value !== this.todo.text) {
      const action = new EditTodoAction(this.todo.id, this.txtInput.value);
      this.store.dispatch(action);
    }
  }

  remove() {
    const action = new RemoveTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
