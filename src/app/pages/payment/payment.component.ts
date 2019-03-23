import {
  Component,
  OnDestroy, OnInit
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService, ApiService, LoadingService} from '../../services';
import {Cart} from '../../store/models';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {selectCarts$} from '../../store/selectors';
import {CartModule} from '../../store/actions';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy {
  public paymentForm: FormGroup;
  public cart$: Observable<Cart>;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private loader: LoadingService,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {
    this.cart$ = store.select(selectCarts$);
  }

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

    this.store.dispatch(new CartModule.ValidateCart());
  }

  ngOnDestroy(): void {
  }
}
