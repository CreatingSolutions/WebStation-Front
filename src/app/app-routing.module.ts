import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { PresentationComponent } from "./presentation/presentation.component";
import { LogementsComponent } from "./logements/logements.component";

const routes: Routes = [
    { path: '', component: PresentationComponent, pathMatch: 'full' },
    { path: 'logements', component: LogementsComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash: true,
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}