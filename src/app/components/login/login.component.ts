import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertService, ApiService, LoadingService, UserService} from '../../services';
import { first } from 'rxjs/operators';
import {User} from '../../model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  @Output() result = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService,
    private loader: LoadingService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });

    this.apiService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.apiService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.loader.hide();
          if (data && data.applicationToken) {
              if (data.user) {
                this.userService.setUser(<User> {
                  email : data.user.emailAddress,
                  id: data.user.id
                });
              }
              localStorage.setItem('token', data.applicationToken);
              console.log(localStorage.getItem('token'));
              this.alertService.success('Login successful', true);
              this.result.emit();
              this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.loader.hide();
          this.alertService.error(error);
        }
      );
  }
}
