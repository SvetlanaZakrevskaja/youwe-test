import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(150)]],
      text: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
  }

}
