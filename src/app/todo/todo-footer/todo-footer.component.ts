import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  active: number;
  validFilters: fromFilter.validFilters[] = ['all', 'completed', 'active'];
  currentFilter: fromFilter.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countActive( state.todos );
    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countActive( todos: Todo[]) {
    this.active = todos.filter(todo => !todo.completed ).length;
  }

  removeCompleted() {
    const action = new fromTodo.RemoveAllTodoAction();
    this.store.dispatch(action);
  }
}
