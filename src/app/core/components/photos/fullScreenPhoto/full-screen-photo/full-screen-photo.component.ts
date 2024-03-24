import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';
import { Photo } from 'src/app/core/models/photos/photo.model';
import { UsersService } from '../../../services/users.service';
import { AlbumsService } from '../../../services/albums.service';
import { User } from 'src/app/core/models/users/user.model';
import { Album } from 'src/app/core/models/albums/album.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-full-screen-photo',
  templateUrl: './full-screen-photo.component.html',
  styleUrls: ['./full-screen-photo.component.css']
})
export class FullScreenPhotoComponent implements OnInit{
  
  photo: Photo = {} as Photo;
  album: Album = {} as Album;
  user: User = {} as User;
  descriptionShown:boolean=false;
  photosRoute: string = '';
 

  

  
  constructor(
    private activatedRoute:ActivatedRoute,
    private photoService: PhotosService,
    private usersService: UsersService,
    private albumsService: AlbumsService,
    private location: Location,
    ) { }

    ngOnInit(): void {
      this.photosRoute = this.photoService.photosRoute;
        const photoId = this.activatedRoute.snapshot.params['photoId'];
        this.photoService.getPhotoById(photoId).subscribe(photo => {
          this.photo = photo;
          this.albumsService.getAlbumById(this.photo.albumId).subscribe(album => {
            this.album = album;
            this.usersService.getUserById(this.album.userId).subscribe(user => {
              this.user = user;
            });
          });
        });
      }


    closeDescription(): void{
      this.descriptionShown = false;
    }
    openDescription():void{
      this.descriptionShown = true;
    }
  }

