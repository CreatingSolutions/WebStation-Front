import {Component, OnInit, OnDestroy, Directive} from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
  selector: 'Webstation-Alert',
  template: ''
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private alertService: AlertService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.subscription = this.alertService
      .getMessage()
      .subscribe(message => {
          if (message) {
            console.log(message);
            this.snackBar.openFromComponent(SnackbarComponent,
              {
                direction: 'ltr',
                data: message,
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
          }
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
