import { Injectable } from '@angular/core';
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
  postBug(bug: any): Observable<any> {
    // Define request headers
    const headers = { 'content-type': 'application/json' };
    // Add the extra field of 'created' to the 'bug' data
    bug['created'] = new Date();
    // Turn the 'bug' data into a string
    const body = JSON.stringify(bug);
    return this.httpClient.post(this.bugsUrl, body, { 'headers': headers });
  }

  // GET request to sort bugs server-side
  sortBugs(sortHeader: string, order: string): Observable<BugComponent[]> {
    const sortUrl = this.bugsUrl + '?_sort=' + sortHeader + '&_order=' + order;
    return this.httpClient.get<BugComponent[]>(sortUrl);
  }
}
