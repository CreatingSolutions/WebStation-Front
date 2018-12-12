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
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService,
    private loadingService: LoadingService
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

    this.apiService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loadingService.hide();
          if (data.ok) {
            this.alertService.success('Registration successful', true);
            this.result.emit();
            this.router.navigate(['/']);
          }
        },
        error => {
          this.loadingService.hide();
          this.alertService.error(error);
        }
      );
  }
}
