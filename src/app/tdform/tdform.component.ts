import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css'],
})
export class TdformComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  uname: String;
  sec: String;
  emailId: String;
  gender: String;
  genders = ['male','female'];
  constructor() {}

  ngOnInit() {}
  submitForm() {
    console.table(this.signUpForm.value);
    this.uname = this.signUpForm.value.username;
    this.emailId = this.signUpForm.value.email;
    this.sec = this.signUpForm.value.security;
    this.gender = this.signUpForm.value.gender;
  }
  setDefault() {
    this.signUpForm.form.patchValue({
      username: 'test',
      email: 'test@test.com',
      security: 'test Answer',
    });
  }
}
