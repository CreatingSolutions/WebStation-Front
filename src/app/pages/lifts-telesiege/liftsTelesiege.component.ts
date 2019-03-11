import { Component } from '@angular/core';
import {
  AlertService,
} from '../../services';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {LiftModule} from '../../store/actions';

@Component({
  selector: 'webstation-lifts-telesiege',
  templateUrl: './liftsTelesiege.component.html',
  styleUrls: ['./liftsTelesiege.component.css']
})
export class LiftsTelesiegeComponent {

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>,
  ) { }

  public forfait(type: string, forfait: string) {
    this.store.dispatch(new LiftModule.LoadInitLifts(
      {
        type: type,
        forfait: forfait,
      }
    ));
  }
}
