import { Injectable, OnInit } from "@angular/core";
import { Logement } from "../model/Logement";
import { Ecole } from "../model/Ecole";
import { Materiel } from "../model/Materiel";
import { Meca } from "../model/Meca";

@Injectable()
export class MockService {
    public logements: Logement[];
    public ecoles: Ecole[];
    public materiels: Materiel[];
    public mecas: Meca[];

    constructor() {
        this.logements = JSON.parse("{["+
        "{"+
            "\"id_flat\": 1,"+
            "\"description\": \"Mock-1\","+
            "\"startDay\": 1541160565,"+
            "\"endDay\": 1542283765,"+
            "\"season\": 1,"+
            "\"price\": 350,"+
            "\"laundry\": 0,"+
            "\"garage\": 1,"+
            "\"baby\": 2"+
        "},"+
        "{"+
            "\"id_flat\": 2,"+
            "\"description\": \"Mock-2\","+
            "\"startDay\": 1541160565,"+
            "\"endDay\": 1542283765,"+
            "\"season\": 1,"+
            "\"price\": 444,"+
            "\"laundry\": 0,"+
            "\"garage\": 1,"+
            "\"baby\": 0"+
        "},"+
        "{"+
            "\"id_flat\": 3,"+
            "\"description\": \"Mock-3\","+
            "\"startDay\": 1541160565,"+
            "\"endDay\": 1542283765,"+
            "\"season\": 1,"+
            "\"price\": 200,"+
            "\"laundry\": 1,"+
            "\"garage\": 1,"+
            "\"baby\": 1"+
        "}"+
        "]}")
    }
}