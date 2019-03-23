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
import { Stuff } from 'src/app/store/models/stuff.interface';

@Component({
  selector: 'webstation-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.css']
})
export class StuffsComponent implements OnInit {
  public stuffs$: Observable<Stuff[]>;
  public stuffsLogs$: Observable<any>;

  constructor(
    private alertService: AlertService,
    private store: Store<AppState>
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

  public increase(id: number) {
    console.log(id);
    const value = +document.getElementById(`${id}`).innerHTML;
    if (value < 20) {
      document.getElementById(`${id}`).innerHTML = `${value + 1}`;
    }
  }

  public discrease(id: number) {
    console.log(id);
    const value = +document.getElementById(`${id}`).innerHTML;
    if (value > 1) {
      document.getElementById(`${id}`).innerHTML = `${value - 1}`;
    }
  }

  public addStuffToCart(stuff: Stuff) {
    const value = +document.getElementById(`${stuff.stuffId}`).innerHTML;
    this.store.dispatch(new CartModule.LoadAddStuffCart({
      stuffId: stuff.stuffId,
      taked: value,
    }));
  }
}
