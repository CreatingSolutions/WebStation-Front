import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PresentationComponent } from './presentation';
import { LogementsComponent } from './logements';
import { ShoppingCartComponent } from './shoppingCart';

const routes: Routes = [
    { path: '', component: PresentationComponent, pathMatch: 'full' },
    { path: 'logements', component: LogementsComponent },
    { path: 'shoppingCart', component: ShoppingCartComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}
