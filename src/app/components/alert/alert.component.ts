import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
  selector: 'alert'
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private alertService: AlertService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.subscription = this.alertService
      .getMessage()
      .subscribe(message => this.snackBar.openFromComponent(SnackbarComponent,
        {
          data: message,
          duration: 500,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
