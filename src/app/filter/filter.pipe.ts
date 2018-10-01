import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {
    let res;

    switch (filter) {
      case 'completed':
        res = todos.filter(todo => todo.completed);
        break;
      case 'active':
        res = todos.filter(todo => !todo.completed);
        break;
      default:
        res = todos;
    }

    return res;
  }
}
