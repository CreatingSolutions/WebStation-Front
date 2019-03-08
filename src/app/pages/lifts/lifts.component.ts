import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lifts',
  templateUrl: './lifts.component.html',
  styleUrls: ['./lifts.component.css']
})
export class LiftsComponent {
  constructor(private router: Router) { }

  public changeRoute(route: string) {
    this.router.navigate([`lifts/${route}`]).catch(err => console.log(err));
  }
}
