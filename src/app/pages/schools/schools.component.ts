import { Component, OnInit } from '@angular/core';
import {
  AlertService,
} from '../../services';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Observable} from 'rxjs';
import {CartModule, SchoolModule} from '../../store/actions';
import LoadInitSchools = SchoolModule.LoadInitSchools;
import {selectSchoolsData$, selectSchoolsLogs$} from '../../store/selectors/school.selector';
import { MatDialog } from '@angular/material';
import { School } from 'src/app/store/models/school.interface';

@Component({
  selector: 'schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  public schools$: Observable<School[]>;
  public schoolsLogs$: Observable<any>;

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>
  ) {
    this.schools$ = store.pipe(select(selectSchoolsData$));
    this.schoolsLogs$ = this.store.pipe(select(selectSchoolsLogs$));
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInitSchools());

    this.schoolsLogs$.subscribe(logs => {
      if (logs) {
        if (logs.type === 'ERROR') {
          this.alertService.error(logs.message);
        } else if (logs.type === 'SUCCESS') {
          this.alertService.success(logs.message);
        }
      }
    });
  }

  public addSchoolToCart(school: School) {
    //this.store.dispatch(new CartModule.LoadAddSchoolCart(school));
  }
}
