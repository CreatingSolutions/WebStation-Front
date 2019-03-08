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
  public images = [1, 2, 3].map(
    () => `https://picsum.photos/1024/1024?random&t=${Math.random()}`
  );
  public schools$: Observable<School[]>;
  public schoolsLogs$: Observable<any>;

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>,
    private dialog: MatDialog
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

  public makeFilter() {
    /*let schoolsValues: School[] = [];
    if (
      this.personnesControl.value === '' ||
      this.personnesControl.value.length === 0
    ) {
      schoolsValues = this.schoolsListed;
    } else {
      const values: string[] = this.personnesControl.value;
      schoolsValues = this.schoolsListed.filter(school =>
        values.find(value => value === school.nbPersons)
      );
    }

    if (this.selectedAnimals) {
      schoolsValues = schoolsValues.filter(school => school.hasPet);
    }

    if (this.selectedWifi) {
      schoolsValues = schoolsValues.filter(school => school.hasWifi);
    }

    if (this.selectedWC) {
      schoolsValues = schoolsValues.filter(school => school.hasSdBWC);
    }

    this.schools = schoolsValues;*/
  }

  public showDetailSchool(school: School) {
    console.log(school);
    /*this.dialog.open(SchoolDetailsComponent, {
        role: 'dialog',
        data: school
    });*/
  }

  public addSchoolToCart(school: School) {
    //this.store.dispatch(new CartModule.LoadAddSchoolCart(school));
  }
}
