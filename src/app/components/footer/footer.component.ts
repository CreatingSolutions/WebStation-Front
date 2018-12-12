import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'WebStation-Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  public owner: String;

  ngOnInit(): void {
    this.owner = 'WebStation';
  }
}
