import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { TimePipe } from '../pipe/time.pipe';

@NgModule({
    declarations: [
        CardComponent,
        TimePipe
    ],

    exports: [
        CardComponent,
        TimePipe
    ]
})
export class SharedModule {

}