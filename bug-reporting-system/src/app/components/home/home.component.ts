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
  timesTitleHeaderClicked: number = 0;
  timesPriorityHeaderClicked: number = 0;
  timesReporterHeaderClicked: number = 0;
  timesDateCreatedHeaderClicked: number = 0;
  timesStatusHeaderClicked: number = 0;

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

  // Sort bugs by title, everytime the respective table header is clicked
  sortByTitle(): void {
    if (this.timesTitleHeaderClicked % 2 == 0) {
      this.bugs.sort((a, b) => (a.title <= b.title ? -1 : 1));
    }
    else {
      this.bugs.sort((a, b) => (a.title > b.title ? -1 : 1));
    }
    this.timesTitleHeaderClicked = this.timesTitleHeaderClicked + 1;
  }

  // Sort bugs by priority, everytime the respective table header is clicked
  sortByPriority(): void {
    if (this.timesPriorityHeaderClicked % 2 == 0) {
      this.bugs.sort((a, b) => (a.priority <= b.priority ? -1 : 1));
    }
    else {
      this.bugs.sort((a, b) => (a.priority > b.priority ? -1 : 1));
    }
    this.timesPriorityHeaderClicked = this.timesPriorityHeaderClicked + 1;
  }

  // Sort bugs by reporter, everytime the respective table header is clicked
  sortByReporter(): void {
    if (this.timesReporterHeaderClicked % 2 == 0) {
      this.bugs.sort((a, b) => (a.reporter <= b.reporter ? -1 : 1));
    }
    else {
      this.bugs.sort((a, b) => (a.reporter > b.reporter ? -1 : 1));
    }
    this.timesReporterHeaderClicked = this.timesReporterHeaderClicked + 1;
  }

  // Sort bugs by date created, everytime the respective table header is clicked
  sortByDateCreated(): void {
    if (this.timesDateCreatedHeaderClicked % 2 == 0) {
      this.bugs.sort((a, b) => (a.created <= b.created ? -1 : 1));
    }
    else {
      this.bugs.sort((a, b) => (a.created > b.created ? -1 : 1));
    }
    this.timesDateCreatedHeaderClicked = this.timesDateCreatedHeaderClicked + 1;
  }

  // Sort bugs by status, everytime the respective table header is clicked
  sortByStatus(): void {
    if (this.timesStatusHeaderClicked % 2 == 0) {
      this.bugs.sort((a, b) => (a.status <= b.status ? -1 : 1));
    }
    else {
      this.bugs.sort((a, b) => (a.status > b.status ? -1 : 1));
    }
    this.timesStatusHeaderClicked = this.timesStatusHeaderClicked + 1;
  }

}
