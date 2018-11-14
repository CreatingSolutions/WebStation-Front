import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { AlertService, ApiService, LoadingService, MockService } from './services';
import { AlertComponent } from './alert';
import { HomeComponent } from './home';
import { PresentationComponent } from './presentation';
import { UserInfoComponent } from './user-info';
import { UserNavComponent } from './user-nav';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { LogementsComponent } from './logements';

import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ShoppingCartComponent } from './shoppingCart';
import { JwtInterceptor, ErrorInterceptor } from './interceptor';

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
    MatTabsModule,
    MatCardModule,
    MatProgressBarModule,
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
    UserNavComponent,
    LoginComponent,
    RegisterComponent,
    LogementsComponent,
    ShoppingCartComponent
  ],
  providers: [
    AlertService,
    ApiService,
    LoadingService,
    MockService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
