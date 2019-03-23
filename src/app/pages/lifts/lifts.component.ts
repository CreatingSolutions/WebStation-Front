import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {LiftModule} from '../../store/actions';

@Component({
  selector: 'lifts',
  templateUrl: './lifts.component.html',
  styleUrls: ['./lifts.component.css']
})
export class LiftsComponent {
  constructor(private router: Router, private store: Store<AppState>) { }

  public changeRoute(route: string) {
    if (route === 'telesiege') {
      this.store.dispatch(new LiftModule.LoadInitLifts({
        type: route,
      }));
    } else {
      this.router.navigate([`lifts/${route}`]).catch(err => console.log(err));
    }
  }
}
