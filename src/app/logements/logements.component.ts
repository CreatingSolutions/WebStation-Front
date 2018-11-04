import { Component } from "@angular/core";
import { Logement } from "../model/Logement";

@Component({
    selector: 'logements',
    templateUrl: './logements.component.html',
    styleUrls: ['./logements.component.css']
})
export class LogementsComponent {
    logements: Logement[];
}