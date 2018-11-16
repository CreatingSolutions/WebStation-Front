import { Component, OnInit } from '@angular/core';
import { Logement } from '../model';
import { ApiService, LoadingService, AlertService, MockService } from '../services';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.css']
})
export class LogementsComponent implements OnInit {
  logements: Logement[];
  faPlus = faPlus;

  constructor(
    private api: ApiService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private mockService: MockService
  ) {}

  ngOnInit(): void {
    this.getLogement();
  }

  public getLogement() {
    this.loadingService.show();

    this.mockService.getLogementsMock().subscribe(
      logements => {
        if (logements) {
          this.logements = logements.Logement as Logement[];
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
