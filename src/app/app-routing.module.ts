import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './core/components/users/users/users.component';
import { PhotosComponent } from './core/components/photos/photos/photos.component';
import { AlbumsComponent } from './core/components/albums/albums/albums.component';

const routes: Routes = [
  {
    path:"Users",
    component:UsersComponent
  },
  {
    path:"Photos",
    component:PhotosComponent
  },
  {
    path:"Albums",
    component:AlbumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
