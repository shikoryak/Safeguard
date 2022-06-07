import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      messages: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
   
  submit(): void {
    console.log(this.form.value);
  }

}
