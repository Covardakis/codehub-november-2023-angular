import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-bug',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent {

  // Define BUG attributes
  id: string = '';
  title: string = '';
  description: string = '';
  priority: number = 0;
  reporter: string = '';
  status: string = '';
  created: Date = new Date();
  comments: Array<Comment> = [];

  constructor() { }

  // Setter methods
  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setPriority(priority: number): void {
    this.priority = priority;
  }

  setReporter(reporter: string): void {
    this.reporter = reporter;
  }

  setStatus(status: string): void {
    this.status = status;
  }

}
