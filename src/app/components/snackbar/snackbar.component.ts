import {Component, Inject, Optional} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'Webstation-Snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent {
  constructor(@Optional() @Inject(MAT_SNACK_BAR_DATA) public message: any) { }
}
