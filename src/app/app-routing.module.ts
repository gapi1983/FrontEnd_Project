import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './core/components/users/users/users.component';
import { PhotosComponent } from './core/components/photos/photos/photos.component';
import { AlbumsComponent } from './core/components/albums/albums/albums.component';
import { AlbumComponent } from './core/components/albums/album/album/album.component';
import { PhotoComponent } from './core/components/photos/photo/photo/photo.component';
import { FullScreenPhotoComponent } from './core/components/photos/fullScreenPhoto/full-screen-photo/full-screen-photo.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/Users', 
    pathMatch: 'full' 
  },
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
  },
  {
    path:"Albums/Album/:userId",
    component:AlbumComponent
  
  },
  {
    path:"Photos/Photo/:albumId",
    component:PhotoComponent
  
  },
  {
    path:"Photos/FullScreenPhoto/:photoId",
    component:FullScreenPhotoComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
