import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { PopularComponent } from "./popular.component";

@NgModule({
    declarations: [
        PopularComponent
    ],

    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component:PopularComponent 
            },
        ])
    ],

    exports: [
        RouterModule
    ]
})
export class PopularPageModule{

}