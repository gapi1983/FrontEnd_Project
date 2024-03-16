import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './core/components/albums/albums/albums.component';
import { NavbarComponent } from './core/components/navbar/navbar/navbar.component';
import { PhotosComponent } from './core/components/photos/photos/photos.component';
import { SidebarComponent } from './core/components/sidebar/sidebar/sidebar.component';
import { UsersComponent } from './core/components/users/users/users.component';
import { HomeComponent } from './core/components/home/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    NavbarComponent,
    PhotosComponent,
    SidebarComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
