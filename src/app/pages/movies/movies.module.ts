import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
    declarations: [
        MoviesComponent
    ],

    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{
            path: "", component:MoviesComponent
        }])
    ],

    exports: [
        RouterModule
    ]
})

export class TopRatedModule{

}