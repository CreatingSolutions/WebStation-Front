import {Component, OnInit} from '@angular/core';
import {Logement} from '../model';
import {ApiService, LoadingService, AlertService, MockService} from '../services';
import {faPlus, faCheckCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FormControl, Validators} from '@angular/forms';
import {log} from 'util';

@Component({
  selector: 'logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {
  logements: Logement[];
  logementsListed: Logement[];
  faPlus = faPlus;
  faCheckCircle = faCheckCircle;
  faTimes = faTimes;
  personnesControl = new FormControl('');
  personnes: String[] = ['1-4', '4-5', '6-8'];
  selectedAnimals: Boolean = false;
  selectedWifi: Boolean = false;
  selectedWC: Boolean = false;

  constructor(
    private api: ApiService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private mockService: MockService
  ) {
  }

  ngOnInit(): void {
    this.getLogement();
  }

  public makeFilter() {
    let logementsValues: Logement[] = [];
    if (this.personnesControl.value === '' || this.personnesControl.value.length === 0) {
      logementsValues = this.logementsListed;
    } else {
      const values: string[] = this.personnesControl.value;
      logementsValues = this.logementsListed.filter(logement => values.find(
        value => value === logement.nbPersonnes
      ));
    }

    if (this.selectedAnimals) {
      logementsValues = logementsValues.filter(logement => logement.pet);
    }

    if (this.selectedWifi) {
      logementsValues = logementsValues.filter(logement => logement.wifi);
    }

    if (this.selectedWC) {
      logementsValues = logementsValues.filter(logement => logement.SdBWC);
    }

    this.logements = logementsValues;
  }

  public getLogement() {
    this.loadingService.show();
    this.mockService.getLogementsMock().subscribe(
      logements => {
        if (logements) {
          this.logements = logements.Logement as Logement[];
          this.logementsListed = this.logements;
          this.loadingService.hide();
        }
      }, error => {
        this.alertService.error(error);
        this.loadingService.hide();
      }
    );
  }
}
