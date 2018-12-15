import {
  Component,
  OnDestroy, OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService, ApiService, LoadingService, UserService} from '../../services';
import {ICart} from '../../model/Interface';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {
  public paymentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private loader: LoadingService,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      fname: ['', Validators.required],
      adr: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      cname: ['', Validators.required],
      ccnum: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  get f() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    if (this.paymentForm.invalid) {
      return;
    }
  }

  public getShoppingCart(): ICart {
    return this.userService.getCart();
  }

  ngOnDestroy(): void {
  }
}
