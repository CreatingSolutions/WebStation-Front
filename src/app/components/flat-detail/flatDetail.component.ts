import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDatepickerInputEvent, MatSliderChange, MatCheckboxChange} from '@angular/material';
import { Flat } from 'src/app/store/models';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { CartModule } from 'src/app/store/actions';
import * as moment from 'moment';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'webstation-flat-detail',
    templateUrl: './flatDetail.component.html',
    styleUrls: ['./flatDetail.component.css']
})
export class FlatDetailComponent {
    public start = new FormControl('', [Validators.required]);
    public end = new FormControl('', [Validators.required]);
    private startDate: Date;
    private endDate: Date;
    public prices: number;
    private now = moment.now();
    public dateFormatInvalid = false;
    public nbPersons = [1];
    public images = [
      'https://picsum.photos/256/256/?image=1029',
      'https://picsum.photos/256/256/?image=650',
      'https://picsum.photos/256/256/?image=1031'
    ];

    constructor(
        public dialogRef: MatDialogRef<FlatDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Flat,
        private store: Store<AppState>
    ) {
      this.dateFormatInvalid = !data.startDate && !data.endDate;
      this.prices = data.prices;
    }

    public close() {
        this.dialogRef.close();
    }

    public startDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.startDate = event.value;

        const startDate = moment.unix(this.startDate.getTime() / 1000);
        if (startDate.isBefore(this.now)) {
            this.start.setErrors(null);
        }

        this.updatePrices();
    }

    public endDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.endDate = event.value;

        const endDate = moment.unix(this.endDate.getTime() / 1000);
        if (endDate.isBefore(this.now)) {
            this.end.setErrors(null);
        }

        this.updatePrices();
    }

    public slide(type: string, event: MatSliderChange) {
        this.nbPersons = Array.from(Array(event.value)).map((x, i) => i );
        this.updatePrices();
    }

    public pricesByFlat(): number {
        if (this.data.nbPersonsMin === 1 && this.data.nbPersonsMax === 4) {
            return 30;
        } else if (this.data.nbPersonsMin === 1 && this.data.nbPersonsMax === 4) {
            return 40;
        } else {
            return 50;
        }
    }

    private updatePrices() {
        if (this.startDate && this.endDate) {
            const startDate = moment.unix(this.startDate.getTime() / 1000);
            const endDate = moment.unix(this.endDate.getTime() / 1000);

            if (startDate.isAfter(this.now) && endDate.isAfter(this.now) && startDate.isBefore(endDate)) {
                this.dateFormatInvalid = true;
                this.prices = Math.abs(this.data.prices * startDate.diff(endDate, 'days'));
            } else {
                this.dateFormatInvalid = false;
                this.prices = this.data.prices;
            }
        }
    }

    public suppServiette(event: MatCheckboxChange) {
      console.log(event.checked);
    }

    public suppGarage(event: MatCheckboxChange) {
      console.log(event.checked);
    }

    public suppMenage(event: MatCheckboxChange) {
      console.log(event.checked);
    }

    public suppBaby(event: MatCheckboxChange) {
      console.log(event.checked);
    }

    public cart() {
        this.store.dispatch(new CartModule.LoadAddFlatCart(this.data.flatId));
        this.close();
    }
}
