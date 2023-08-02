import { Component } from '@angular/core';

@Component({
    selector: 'app-warningAlert',
    templateUrl: './warningAlert.component.html',
    styleUrls: ['./warningAlert.component.sass']
})

export class WarningAlert {
    warning(){
        alert("Warning! ⚠️");
    }   
}