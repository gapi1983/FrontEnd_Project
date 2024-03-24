import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './core/components/albums/albums/albums.component';
import { NavbarComponent } from './core/components/navbar/navbar/navbar.component';
import { PhotosComponent } from './core/components/photos/photos/photos.component';
import { SidebarComponent } from './core/components/sidebar/sidebar/sidebar.component';
import { UsersComponent } from './core/components/users/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './core/components/albums/album/album/album.component';
import { PhotoComponent } from './core/components/photos/photo/photo/photo.component';
import { FullScreenPhotoComponent } from './core/components/photos/fullScreenPhoto/full-screen-photo/full-screen-photo.component'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    NavbarComponent,
    PhotosComponent,
    SidebarComponent,
    UsersComponent,
    AlbumComponent,
    PhotoComponent,
    FullScreenPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
