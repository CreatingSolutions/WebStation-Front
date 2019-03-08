import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  MatSelectModule,
  MatTabsModule,
  MatCardModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatBadgeModule,
  MatStepperModule,
  MatListModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
 } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, appEffects, getReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home';
import { AlertComponent } from './components/alert';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { PresentationComponent } from './pages/presentation';
import { UserInfoComponent } from './components/user-info';
import { UserNavComponent } from './components/user-nav';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { FlatsComponent } from './pages/flats';
import { ShoppingCartComponent } from './pages/shoppingCart';
import { PaymentComponent } from './pages/payment';
import { CarouselComponent } from './components/carousel';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { AlertService, ApiService, LoadingService } from './services';
import { AuthGuard } from './guard';
import { JwtInterceptor, ErrorInterceptor } from './interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlatFilterComponent } from './components/flat-filter';
import { SchoolsComponent } from './pages/schools';
import { LiftsComponent } from './pages/lifts';
import { StuffsComponent } from './pages/stuffs';
import { SchoolFilterComponent } from './components/school-filter';
import { LiftFilterComponent } from './components/lift-filter';
import { StuffFilterComponent } from './components/stuff-filter';
import { LocalizedDatePipe } from './pipes';
import { FlatDetailComponent } from './components/flat-detail/flatDetail.component';
import { MatSliderModule } from '@angular/material/slider';
import { LiftsSkiAlpinComponent } from './pages/lifts-skialpin';
import { LiftsSkiNordiqueComponent } from './pages/lifts-skinordique';
import { LiftsTelesiegeComponent } from './pages/lifts-telesiege';
import { LiftsForfaitComponent } from './pages/lifts-forfait/liftsForfait.component';

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
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[WEBSTATION]',
      maxAge: 25,
      logOnly: environment.production
    }),
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
    AlertComponent,
    FooterComponent,
    HeaderComponent,
    PresentationComponent,
    UserInfoComponent,
    UserNavComponent,
    LoginComponent,
    RegisterComponent,
    FlatsComponent,
    SchoolsComponent,
    LiftsComponent,
    StuffsComponent,
    FlatFilterComponent,
    SchoolFilterComponent,
    LiftFilterComponent,
    StuffFilterComponent,
    ShoppingCartComponent,
    PaymentComponent,
    CarouselComponent,
    SnackbarComponent,
    FlatDetailComponent,
    LocalizedDatePipe,
    LiftsSkiAlpinComponent,
    LiftsSkiNordiqueComponent,
    LiftsTelesiegeComponent,
    LiftsForfaitComponent
  ],
  providers: [
    AlertService,
    ApiService,
    LoadingService,
    MatDatepickerModule,
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: REDUCER_TOKEN, useFactory: getReducers }
  ],
  entryComponents: [LoginComponent, RegisterComponent, PaymentComponent, SnackbarComponent, FlatDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, fab);
  }

}
