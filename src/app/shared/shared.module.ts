import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { TimePipe } from '../pipe/time.pipe';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from "swiper/angular";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CardComponent,
        TimePipe,
        SwiperComponent
    ],

    imports: [
        SwiperModule,
        CommonModule
    ],

    exports: [
        CardComponent,
        TimePipe,
        SwiperComponent
    ]
})
export class SharedModule {

}