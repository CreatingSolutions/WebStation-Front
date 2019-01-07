import { Component, OnInit } from '@angular/core';
import { Meca } from "../../model/Meca";
import { ApiService } from "../../services/api.service";
import { LoadingService } from "../../services/loading.service";
import { AlertService } from "../../services/alert.service";
import { MockService } from "../../services/mock.service";

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent implements OnInit {

  lifts: Meca[];
  
  constructor(
    private api: ApiService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private mockService: MockService
  ) {}

  ngOnInit(): void {
    this.getLift();
  }

  public getLift() {
    this.loadingService.show();

    this.mockService.getLiftMock().subscribe(
      lifts => {
        if (lifts) {
          this.lifts = lifts.Lift as Meca[];
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
  }

}
