import { Component } from '@angular/core';
import {
  AlertService,
} from '../../services';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Observable} from 'rxjs';
import {Forfait, Lift} from '../../store/models';
import {selectLiftsData$} from '../../store/selectors/lift.selector';
import {LiftDetailComponent} from '../../components/lift-detail';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'webstation-lifts-telesiege',
  templateUrl: './liftsTelesiege.component.html',
  styleUrls: ['./liftsTelesiege.component.css']
})
export class LiftsTelesiegeComponent {
  public lift$: Observable<Lift>;

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {
    this.lift$ = store.select(selectLiftsData$);
  }

  public showDetailLift(forfait: Forfait, description: string) {
    this.dialog.open(LiftDetailComponent, {
      role: 'dialog',
      width: '60%',
      height: '65%',
      data: {
        insurrance: false,
        description,
        ...forfait
      }
    });
  }
}
