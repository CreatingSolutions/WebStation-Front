import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSliderChange, MatCheckboxChange } from '@angular/material';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Forfait } from 'src/app/store/models';

@Component({
    selector: 'webstation-lift-detail',
    templateUrl: './liftDetail.component.html',
    styleUrls: ['./liftDetail.component.css']
})
export class LiftDetailComponent {
    public prices: number;
    public insurrance = false;

    constructor(
        public dialogRef: MatDialogRef<LiftDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private store: Store<AppState>
    ) {
        this.prices = data.prices;
    }

    public close() {
        this.dialogRef.close();
    }

    public slide(type: string, event: MatSliderChange) {
        this.prices = this.data.prices * event.value;
    }

    public checkInsurrance(event: MatCheckboxChange) {
        this.insurrance = event.checked;
    }

    public cart() {
        //this.store.dispatch(new CartModule.LoadAddFlatCart(this.data));
        this.close();
    }
}
