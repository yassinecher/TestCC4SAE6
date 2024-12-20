import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { AddAlbumsComponent } from './components/add-albums/add-albums.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListPhotosComponentComponent } from './components/list-photos-component/list-photos-component.component';


const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'list/:id', component: ListPhotosComponentComponent },
  { path: 'albums/add', component: AddAlbumsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
