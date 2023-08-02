import { Component } from "@angular/core";

@Component({
    selector: 'app-successAlert',
    templateUrl: './sucessAlert.component.html',
    styleUrls: ['./sucessAlert.component.sass']
})

export class SuccessAlert {
    sucess() {
        alert("Success! ✅");
    }
}