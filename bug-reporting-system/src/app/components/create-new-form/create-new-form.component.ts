import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { BugService } from 'src/app/services/bug.service';
import { BugComponent } from '../bug/bug.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.scss']
})
export class CreateNewFormComponent implements OnInit {

  // Array of priorities and their respective ids
  priorities = [
    { name: 'Minor', id: 0 },
    { name: 'Major', id: 1 },
    { name: 'Critical', id: 2 }
  ];

  // Array of available reporters
  reporters = ['QA', 'PO', 'DEV'];

  // Array of available statuses
  statuses = ['For Review', 'Done', 'Rejected'];

  // Inject the BugService to post data back to server
  private bugService = inject(BugService);

  newBugForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    // Initialize FormGroup (with more than one FormControls) with pre-defined Validators
    this.newBugForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      reporter: [null, [Validators.required]],
      status: ['']
    })

    //Subscribe for value change on Reporter to impose 'required' Validator on 'status'
    this.newBugForm.get('reporter')?.valueChanges.subscribe(
      value => {
        if (value === 'QA') {
          this.newBugForm.controls['status'].addValidators(Validators.required);
        }
        else {
          this.newBugForm.controls['status'].clearValidators();
        }
        this.newBugForm.controls['status'].updateValueAndValidity();
      }
    );
  }

  // 'submitNewBug()' function
  submitNewBug() {
    // Create a new Bug, suing the current form values
    const newBug = new BugComponent();
    newBug.setTitle(this.newBugForm.get('title')?.value);
    newBug.setDescription(this.newBugForm.get('description')?.value);
    newBug.setPriority(this.newBugForm.get('priority')?.value.id);
    newBug.setReporter(this.newBugForm.get('reporter')?.value)
    newBug.setStatus(this.newBugForm.get('status')?.value)
    // POST new Bug via the BugService
    this.bugService.postBug(newBug).subscribe({
      error: err => console.log(err),
      complete: () => {
        console.log('New bug successfully posted!');
        // Redirect back to 'home'
        this.router.navigate(['/']);
      }
    });
  }

  get title() {
    return this.newBugForm.get('title');
  }

  get description() {
    return this.newBugForm.get('description');
  }

  get priority() {
    return this.newBugForm.get('priority');
  }

  get reporter() {
    return this.newBugForm.get('reporter');
  }

  get status() {
    return this.newBugForm.get('status');
  }

}

