import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'model-information',
  templateUrl: './model-information.component.html'
})
export class ModelInformationComponent {
  @Input() title: string;
  @Input() description: string;

  constructor(private modalService: NgbModal) {}
}
