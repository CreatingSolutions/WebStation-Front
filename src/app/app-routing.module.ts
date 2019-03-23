import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './pages/presentation';
import { FlatsComponent } from './pages/flats';
import { ShoppingCartComponent } from './pages/shoppingCart';
import {PaymentComponent} from './pages/payment';
import {AuthGuard} from './guard';
import { StuffsComponent } from './pages/stuffs';
import { SchoolsComponent } from './pages/schools';
import { LiftsComponent } from './pages/lifts';
import { LiftsSkiAlpinComponent } from './pages/lifts-skialpin';
import { LiftsSkiNordiqueComponent } from './pages/lifts-skinordique';
import { LiftsTelesiegeComponent } from './pages/lifts-telesiege';
import { LiftsForfaitComponent } from './pages/lifts-forfait/liftsForfait.component';

const routes: Routes = [
  { path: '', component: PresentationComponent, pathMatch: 'full' },
  { path: 'flats', component: FlatsComponent, canActivate: [AuthGuard] },
  { path: 'stuffs', component: StuffsComponent, canActivate: [AuthGuard] },
  { path: 'schools', component: SchoolsComponent, canActivate: [AuthGuard] },
  { path: 'lifts', component: LiftsComponent, canActivate: [AuthGuard] },
  { path: 'lifts/skialpin', component: LiftsSkiAlpinComponent, canActivate: [AuthGuard] },
  { path: 'lifts/skinordique', component: LiftsSkiNordiqueComponent, canActivate: [AuthGuard] },
  { path: 'lifts/telesiege', component: LiftsTelesiegeComponent, canActivate: [AuthGuard] },
  { path: 'lifts/forfait', component: LiftsForfaitComponent, canActivate: [AuthGuard] },
  { path: 'shoppingCart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
