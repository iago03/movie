import { NgModule } from "@angular/core";
import { CardComponent } from "../pages/card/card.component";
import { TimePipe } from './time.pipe';

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