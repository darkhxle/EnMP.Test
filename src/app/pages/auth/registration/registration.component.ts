import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterForm} from "../../../shared/types/register-form";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup<RegisterForm>({
      name: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      surname: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
      phone: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(4)]}),
      privacyPolicy: new FormControl(false, {nonNullable: true, validators: [Validators.required]})
    })
  }

  submit(): void {
    console.log(this.registerForm);
  }

}
