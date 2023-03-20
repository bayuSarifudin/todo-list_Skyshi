import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  getActivities(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/activity-groups');
  }

  getActivity(id: string): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/activity-groups/' + id);
  }

  createActivity(data: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/activity-groups', data);
  }

  deleteActivity(id: string): Observable<any> {
    return this.httpClient.delete(
      environment.apiUrl + '/activity-groups/' + id
    );
  }

  updateActivity(id: string, data: any): Observable<any> {
    return this.httpClient.patch(
      environment.apiUrl + '/activity-groups/' + id,
      data
    );
  }
}
