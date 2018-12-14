import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './pages/presentation';
import { FlatsComponent } from './pages/flats';
import { ShoppingCartComponent } from './pages/shoppingCart';

const routes: Routes = [
  { path: '', component: PresentationComponent, pathMatch: 'full' },
  { path: 'flats', component: FlatsComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
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
