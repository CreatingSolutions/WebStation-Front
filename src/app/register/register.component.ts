import {Component, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, ApiService } from '../services';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService,
    public modal: NgbActiveModal
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
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

    this.loading = true;
    this.apiService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.ok) {
            this.alertService.success('Registration successful', true);

            this.router.navigate(['/']);
            this.modal.close();
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
