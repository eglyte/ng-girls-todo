import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-input-button-unit',
    templateUrl: './input-button-unit.component.html',
    styleUrls: [ './input-button-unit.component.scss' ]
})
export class InputButtonUnitComponent implements OnInit {
    @Output() submit: EventEmitter<string> = new EventEmitter();
    @Input() title: string;
    //title = '';

    constructor() {
    }

    ngOnInit() {
    }

    submitValue(title) {
        this.submit.emit(title);
    }

}
