import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BugService } from 'src/app/services/bug.service';
import { BugComponent } from '../bug/bug.component';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Array of Bugs
  bugs: BugComponent[] = [];

  constructor(private route: ActivatedRoute) {
  }

  // Times table headers have been clicked
  headersClicked = [
    { name: 'title', times: 0 },
    { name: 'priority', times: 0 },
    { name: 'reporter', times: 0 },
    { name: 'created', times: 0 },
    { name: 'status', times: 0 }
  ];

  // Inject the BugService to get data
  private bugService = inject(BugService);

  requestAllBugs(): void {
    this.bugService.getAllBugs().subscribe({
      next: data => this.bugs = data,
      error: err => console.log(err),
      complete: () => console.log('All bugs retrieved!')
    });
  }

  // On creation, request all bugs from server and insert them in BugComponent Array
  ngOnInit(): void {
    this.requestAllBugs();
  }

  // Sort bugs by header
  sortBy(header: string): void {
    if (this.headersClicked.filter(el => el.name === header)[0].times % 2 == 0) {
      this.bugService.sortBugs(header, 'asc').subscribe({
        next: data => this.bugs = data,
        error: err => console.log(err),
        complete: () => console.log('All bugs retrieved after sorting in ascending order of ' + header)
      });
    }
    else {
      this.bugService.sortBugs(header, 'desc').subscribe({
        next: data => this.bugs = data,
        error: err => console.log(err),
        complete: () => console.log('All bugs retrieved after sorting in descending order of ' + header)
      });
    }
    // Increment pointer
    this.headersClicked.filter(el => el.name === header)[0].times = this.headersClicked.filter(el => el.name === header)[0].times + 1;
  }
}