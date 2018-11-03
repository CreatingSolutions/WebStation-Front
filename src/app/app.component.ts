import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading: boolean = false;

    constructor(private loadingService: LoadingService, public translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('fr');
    
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    }

    ngOnInit(): void {
        this.loadingService.loading.subscribe((status: boolean) => {
            this.loading = status;
        }, error => {
            console.log(error);
        })
    }
}
