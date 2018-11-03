import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AlertService } from "./services/alert.service";
import { ApiService } from "./services/api.service";
import { LoadingService } from "./services/loading.service";
import { AlertComponent } from "./alert/alert.component";
import { HomeComponent } from "./home/home.component";
import { UserService } from "./services/user.service";

import { MatSelectModule } from "@angular/material/select";
import { MockService } from "./services/mock.service";
import { PresentationComponent } from "./presentation/presentation.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserNavComponent } from "./user-nav/user-nav.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSelectModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AlertComponent,
    PresentationComponent,
    UserInfoComponent,
    UserNavComponent
  ],
  providers: [
    AlertService,
    ApiService,
    LoadingService,
    UserService,
    MockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
