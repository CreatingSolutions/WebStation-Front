import { Component, OnInit } from '@angular/core';
import {CartModel, Flat} from '../../model';
import {
  ApiService,
  LoadingService,
  AlertService,
  MockService,
  UserService
} from '../../services';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {
  flats: Flat[];
  flatsListed: Flat[];
  personnesControl = new FormControl('');
  personnes: String[] = ['1-4', '4-5', '6-8'];
  selectedAnimals = false;
  selectedWifi = false;
  selectedWC = false;
  images = [1, 2, 3].map(
    () => `https://picsum.photos/1024/1024?random&t=${Math.random()}`
  );

  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private mockService: MockService,
    private userSerivce: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFlat();
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
        values.find(value => value === flat.nbPersonnes)
      );
    }

    if (this.selectedAnimals) {
      flatsValues = flatsValues.filter(flat => flat.pet);
    }

    if (this.selectedWifi) {
      flatsValues = flatsValues.filter(flat => flat.wifi);
    }

    if (this.selectedWC) {
      flatsValues = flatsValues.filter(flat => flat.SdBWC);
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
    if (this.userSerivce.userLoggedIn()) {
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
    }
  }

  public getFlat() {
    this.loadingService.show();
    this.apiService.getAllFlat().subscribe(
      (flats: any) => {
        if (flats) {
          this.flats = flats as Flat[];
          this.flatsListed = this.flats;
          this.loadingService.hide();
        }
      },
      error => {
        this.alertService.error(error);
        this.loadingService.hide();
      }
    );
  }
}
