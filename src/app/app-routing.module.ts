import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInfoComponent } from './pages/item-info/item-info.component';


const routes: Routes = [
  {path: '', redirectTo: '/movie', pathMatch: 'full'},
  {path: 'movie/:name', loadChildren: () => import('././pages/popular/popular-page.module').then(m => m.PopularPageModule)},
  {path: 'movie-info/:id', loadChildren: () => import("././pages/item-info/item-info.module").then(m => m.ItemInfoModule)},
  {path: 'movie', loadChildren: () => import("./pages/movies/movies.module").then(m => m.TopRatedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
