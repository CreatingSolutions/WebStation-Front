import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import {
  AlertService,
  ApiService,
  LoadingService,
  MockService,
  UserService
} from './services';
import { AlertComponent } from './components/alert';
import { HomeComponent } from './pages/home';
import { PresentationComponent } from './pages/presentation';
import { UserInfoComponent } from './components/user-info';
import { UserNavComponent } from './components/user-nav';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { FlatsComponent } from './pages/flats';

import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { ShoppingCartComponent } from './pages/shoppingCart';
import { JwtInterceptor, ErrorInterceptor } from './interceptor';
import { PaymentComponent } from './components/payment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatStepperModule,
    MatListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
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
    FlatsComponent,
    ShoppingCartComponent,
    PaymentComponent
  ],
  providers: [
    AlertService,
    ApiService,
    LoadingService,
    MockService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
