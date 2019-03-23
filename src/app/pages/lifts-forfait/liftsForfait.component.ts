import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import { Observable } from 'rxjs';
import { Lift, Forfait } from 'src/app/store/models';
import { selectLiftsData$ } from 'src/app/store/selectors/lift.selector';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LiftDetailComponent } from 'src/app/components/lift-detail';

@Component({
  selector: 'webstation-lifts-forfait',
  templateUrl: './liftsForfait.component.html',
  styleUrls: ['./liftsForfait.component.css']
})
export class LiftsForfaitComponent implements OnInit {
  public lift$: Observable<Lift>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.lift$ = this.store.select(selectLiftsData$);
  }

  public ngOnInit(): void {
    this.lift$.subscribe(lift => {
      if (!lift) {
        this.router.navigate(['']).catch(err => console.log(err));
      }
    });
  }

  public showDetailLift(forfait: Forfait, description: string) {
    this.dialog.open(LiftDetailComponent, {
          role: 'dialog',
          width: '60%',
          height: '65%',
          data: {
          insurance: true,
          description,
          ...forfait
      }
    });
  }
}
