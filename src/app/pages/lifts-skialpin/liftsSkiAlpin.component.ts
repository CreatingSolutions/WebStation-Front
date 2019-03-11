import { Component, OnInit } from '@angular/core';
import {
  AlertService,
} from '../../services';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {LiftModule} from '../../store/actions';

@Component({
  selector: 'webstation-lifts-ski-alpin',
  templateUrl: './liftsSkiAlpin.component.html',
  styleUrls: ['./liftsSkiAlpin.component.css']
})
export class LiftsSkiAlpinComponent {

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>,
  ) { }


  public forfait(type: string, forfait: string) {
    this.store.dispatch(new LiftModule.LoadInitLifts(
      {
        type,
        forfait,
      }
    ));
  }
}
