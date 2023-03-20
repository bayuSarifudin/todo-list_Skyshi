import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAllTodoList(id: string): Observable<any> {
    return this.httpClient.get(
      environment.apiUrl + '/todo-items?activity_group_id=' + id
    );
  }

  getTodoList(id: string): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/todo-items/' + id);
  }

  createTodo(data: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/todo-items', data);
  }

  deleteTodo(id: string): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/todo-items/' + id);
  }
}
