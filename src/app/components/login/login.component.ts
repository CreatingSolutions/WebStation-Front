import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertService, ApiService} from '../../services';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {UserModule} from '../../store/actions';
import LogIn = UserModule.LogIn;
import {Observable} from 'rxjs';
import {selectUsers} from '../../store/selectors';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  @Output() result = new EventEmitter<any>();
  getState: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectUsers);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const payload = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.store.dispatch(new LogIn(payload));
  }
}
