import { Component, OnInit } from "@angular/core";
import { Logement } from "../model/Logement";
import { ApiService } from "../services/api.service";
import { LoadingService } from "../services/loading.service";
import { AlertService } from "../services/alert.service";
import { MockService } from "../services/mock.service";

@Component({
  selector: "logements",
  templateUrl: "./logements.component.html",
  styleUrls: ["./logements.component.css"]
})
export class LogementsComponent implements OnInit {
  logements: Logement[];

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
    this.loadingService.loading.next(true);

    this.mockService.getLogementsMock().subscribe(
      logements => {
        if (logements) {
          this.logements = logements.Logement as Logement[];
          console.log(this.logements);
          this.loadingService.loading.next(false);
        }
      },
      error => {
        console.log(error);
        this.alertService.error(error);
        this.loadingService.loading.next(false);
      }
    );
  }
}
