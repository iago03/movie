import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ItemInfoComponent } from "./item-info.component";

@NgModule({
    declarations:[
        ItemInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component:ItemInfoComponent}
        ]),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class ItemInfoModule{

}