import {
  AfterViewInit,
  Component,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }
}
