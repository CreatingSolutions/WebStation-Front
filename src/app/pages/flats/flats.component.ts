import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  LoadingService,
  AlertService,
} from '../../services';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Flat} from '../../store/models';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Observable} from 'rxjs';
import {FlatModule} from '../../store/actions';
import LoadInitFlats = FlatModule.LoadInitFlats;
import {selectFlatsData$, selectFlatsLogs$} from '../../store/selectors/flat.selector';

@Component({
  selector: 'flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {
  public flats: Flat[];
  public flatsListed: Flat[];
  public personnesControl = new FormControl('');
  public personnes: String[] = ['1-4', '4-5', '6-8'];
  public selectedAnimals = false;
  public selectedWifi = false;
  public selectedWC = false;
  public images = [1, 2, 3].map(
    () => `https://picsum.photos/1024/1024?random&t=${Math.random()}`
  );
  public flats$: Observable<Flat[]>;
  public flatsLogs$: Observable<any>;

  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.flats$ = store.pipe(select(selectFlatsData$));
    this.flatsLogs$ = this.store.pipe(select(selectFlatsLogs$));
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadInitFlats());

    this.flats$.subscribe(flats => {
      if (flats) {
        this.flats = flats;
      }
    });

    this.flatsLogs$.subscribe(logs => {
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
    let flatsValues: Flat[] = [];
    if (
      this.personnesControl.value === '' ||
      this.personnesControl.value.length === 0
    ) {
      flatsValues = this.flatsListed;
    } else {
      const values: string[] = this.personnesControl.value;
      flatsValues = this.flatsListed.filter(flat =>
        values.find(value => value === flat.nbPersons)
      );
    }

    if (this.selectedAnimals) {
      flatsValues = flatsValues.filter(flat => flat.hasPet);
    }

    if (this.selectedWifi) {
      flatsValues = flatsValues.filter(flat => flat.hasWifi);
    }

    if (this.selectedWC) {
      flatsValues = flatsValues.filter(flat => flat.hasSdBWC);
    }

    this.flats = flatsValues;
  }

  public getFlatsLength(): number {
    if (!!this.flats) {
      return this.flats.length;
    }
    return 0.0;
  }

  public addFlatToCart(flat: Flat) {
    /*if (this.userSerivce.userLoggedIn()) {
      const user = this.userSerivce.getUser();
      this.apiService.addElementToCart(user.id, flat.flatId).subscribe(res => {
          this.router.navigate(['/shoppingCart']);
      });
    } else {
      let cart = this.userSerivce.getCart();
      if (!!cart && cart.flats) {
        cart.addFlat(flat);
      } else {
        cart = new CartModel();
        cart.flats = [];
        cart.addFlat(flat);
      }
    }*/
  }
}
