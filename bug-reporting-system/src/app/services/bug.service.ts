import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugComponent } from '../components/bug/bug.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  readonly bugsUrl = 'http://localhost:3000/bugs';

  // Inject an HttpClient for communication with the server
  constructor(private httpClient: HttpClient) { }

  // GET request for all bugs
  getAllBugs(): Observable<BugComponent[]> {
    return this.httpClient.get<BugComponent[]>(this.bugsUrl);
  }

  // POST rquest to add a bug
  postBug(bug: BugComponent): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(bug);
    return this.httpClient.post(this.bugsUrl, body, { 'headers': headers });
  }
}
