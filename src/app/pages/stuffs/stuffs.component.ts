import { Component, OnInit } from '@angular/core';
import {
  AlertService,
} from '../../services';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Observable} from 'rxjs';
import {CartModule, StuffModule} from '../../store/actions';
import LoadInitStuffs = StuffModule.LoadInitStuffs;
import {selectStuffsData$, selectStuffsLogs$} from '../../store/selectors/stuff.selector';
import { MatDialog } from '@angular/material';
import { Stuff } from 'src/app/store/models/stuff.interface';

@Component({
  selector: 'stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.css']
})
export class StuffsComponent implements OnInit {
  public images = [1, 2, 3].map(
    () => `https://picsum.photos/1024/1024?random&t=${Math.random()}`
  );
  public stuffs$: Observable<Stuff[]>;
  public stuffsLogs$: Observable<any>;

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {
    this.stuffs$ = store.pipe(select(selectStuffsData$));
    this.stuffsLogs$ = this.store.pipe(select(selectStuffsLogs$));
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInitStuffs());

    this.stuffsLogs$.subscribe(logs => {
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
    /*let stuffsValues: Stuff[] = [];
    if (
      this.personnesControl.value === '' ||
      this.personnesControl.value.length === 0
    ) {
      stuffsValues = this.stuffsListed;
    } else {
      const values: string[] = this.personnesControl.value;
      stuffsValues = this.stuffsListed.filter(stuff =>
        values.find(value => value === stuff.nbPersons)
      );
    }

    if (this.selectedAnimals) {
      stuffsValues = stuffsValues.filter(stuff => stuff.hasPet);
    }

    if (this.selectedWifi) {
      stuffsValues = stuffsValues.filter(stuff => stuff.hasWifi);
    }

    if (this.selectedWC) {
      stuffsValues = stuffsValues.filter(stuff => stuff.hasSdBWC);
    }

    this.stuffs = stuffsValues;*/
  }

  public showDetailStuff(stuff: Stuff) {
    console.log(stuff);
    /*this.dialog.open(StuffDetailsComponent, {
        role: 'dialog',
        data: stuff
    });*/
  }

  public addStuffToCart(stuff: Stuff) {
    //this.store.dispatch(new CartModule.LoadAddStuffCart(stuff));
  }
}
