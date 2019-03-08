import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './services';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LoaderState } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public loading = false;
  private subscription: Subscription;

  constructor(
    private loadingService: LoadingService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }

  ngOnInit(): void {
    this.subscription = this.loadingService.loaderState.subscribe(
      (status: LoaderState) => {
        this.loading = status.show;
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
