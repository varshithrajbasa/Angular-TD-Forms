import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;

  constructor() { }

  ngOnInit() {

  }
  submitForm(){
    console.log(this.signUpForm.value);
  }

}