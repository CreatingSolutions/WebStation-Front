import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './pages/presentation';
import { FlatsComponent } from './pages/flats';
import { ShoppingCartComponent } from './pages/shoppingCart';
import {PaymentComponent} from './pages/payment';
import {AuthGuard} from './guard';

const routes: Routes = [
  { path: '', component: PresentationComponent, pathMatch: 'full' },
  { path: 'flats', component: FlatsComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
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
