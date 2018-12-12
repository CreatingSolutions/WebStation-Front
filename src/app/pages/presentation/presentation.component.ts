import { Component } from '@angular/core';

@Component({
    selector: 'presentation',
    templateUrl: 'presentation.component.html',
    styleUrls: ['presentation.component.css']
})

export class PresentationComponent {
    images = [1, 2, 3].map(() => `https://picsum.photos/1024/1024?random&t=${Math.random()}`);
}
