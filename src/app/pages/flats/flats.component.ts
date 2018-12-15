import { Component, OnInit } from '@angular/core';
import { Flat } from '../../model';
import {
  ApiService,
  LoadingService,
  AlertService,
  MockService,
  UserService
} from '../../services';
import {
  faPlus,
  faCheckCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
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
  faPlus = faPlus;
  faCheckCircle = faCheckCircle;
  faTimes = faTimes;
  personnesControl = new FormControl('');
  personnes: String[] = ['1-4', '4-5', '6-8'];
  selectedAnimals = false;
  selectedWifi = false;
  selectedWC = false;

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
    this.userSerivce.getCart().addFlat(flat);
    if (
      this.userSerivce.getCart().flats &&
      this.userSerivce.getCart().flats.includes(flat)
    ) {
      this.router.navigate(['/shoppingCart']);
    }
  }

  public getFlat() {
    this.loadingService.show();
    this.apiService.getAllFlat().subscribe(
      (flats: any) => {
        console.log(flats);
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
