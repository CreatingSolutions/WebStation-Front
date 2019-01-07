import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { first } from 'rxjs/operators';
import {AlertService, ApiService, LoadingService} from '../../services';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {UserModule} from '../../store/actions';
import SignUp = UserModule.SignUp;

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  @Output() result = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.store.dispatch(new SignUp(payload));
  }
}
