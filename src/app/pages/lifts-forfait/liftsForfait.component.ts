import { Component, OnInit } from '@angular/core';
import {
  AlertService,
} from '../../services';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import { Observable } from 'rxjs';
import { Lift } from 'src/app/store/models';
import { selectLiftsData$ } from 'src/app/store/selectors/lift.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'websation-lifts-ski-alpin',
  templateUrl: './liftsForfait.component.html',
  styleUrls: ['./liftsForfait.component.css']
})
export class LiftsForfaitComponent implements OnInit {
  public lift$: Observable<Lift>;

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>,
    private router: Router
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

}
