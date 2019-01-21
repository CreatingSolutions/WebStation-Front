import { Component, OnInit } from '@angular/core';
import { Meca } from "../../model/Meca";
import { ApiService } from "../../services/api.service";
import { LoadingService } from "../../services/loading.service";
import { AlertService } from "../../services/alert.service";
import { MockService } from "../../services/mock.service";
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent implements OnInit {

  // lifts: Flat[];
  SkiAlpin : Meca[];
  liftsListed: Meca[];
  selectedToutShuss = false;
  selectedToutShussDiamant = false;
  selectedAlpin = false;
  selectedNordique = false;
  personnesControl = new FormControl('');
  
  constructor(
    private api: ApiService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private userSerivce: UserService,
    private mockService: MockService
  ) {}

  ngOnInit(): void {
    //this.getLift();
    this.getSkiAlpin();
  }

  public makeFilter() {
    let liftsValues: Meca[] = [];
    if (
      this.personnesControl.value === '' ||
      this.personnesControl.value.length === 0
    ) {
      liftsValues = this.liftsListed;
    } else {
      const values: string[] = this.personnesControl.value;
      liftsValues = this.liftsListed.filter(lift =>
        values.find(value => value === lift.title)
      );
    }

    if (this.selectedToutShuss) {
      liftsValues = liftsValues.filter(lift => lift.ToutSchuss);
    }

    if (this.selectedToutShussDiamant) {
      liftsValues = liftsValues.filter(lift => lift.ToutSchussDiamant);
    }

    if (this.selectedAlpin) {
      liftsValues = liftsValues.filter(lift => lift.Alpin);
    }
    
    if (this.selectedNordique) {
      liftsValues = liftsValues.filter(lift => lift.Nordique);
    }

    this.SkiAlpin = liftsValues;
  }
/*
  public getLift() {
    this.loadingService.show();

    this.mockService.getLiftMock().subscribe(
      lifts => {
        if (lifts) {
          this.lifts = lifts.Lift as Flat[];
          console.log(this.lifts);
          this.loadingService.hide();
        }
      },
      error => {
        console.log(error);
        this.alertService.error(error);
        this.loadingService.hide();
      }
    );
  } */


  public getLiftsLength(): number {
    if (!!this.SkiAlpin) {
      return this.SkiAlpin.length;
    }
    return 0.0;
  }


  public getSkiAlpin() {
    this.loadingService.show();

    this.mockService.getLiftMock().subscribe(
      (SkiAlpin: any)  => {
        if (SkiAlpin) {
          this.SkiAlpin = SkiAlpin.Skialpin as Meca[];
          console.log(this.SkiAlpin);
          this.loadingService.hide();
        }
      },
      error => {
        console.log(error);
        this.alertService.error(error);
        this.loadingService.hide();
      }
    );
  }

}
