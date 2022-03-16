import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInfoComponent } from './pages/item-info/item-info.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('././pages/popular/popular-page.module').then(m => m.PopularPageModule)},
  {path: 'item-info/:id', loadChildren: () => import("././pages/item-info/item-info.module").then(m => m.ItemInfoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
