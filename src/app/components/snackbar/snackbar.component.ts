import {Component, Input} from '@angular/core';

@Component({
  selector: 'webstation-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  @Input() snack: any;
}
