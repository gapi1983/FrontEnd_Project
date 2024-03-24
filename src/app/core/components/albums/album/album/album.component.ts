import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../../services/albums.service';
import { Album } from 'src/app/core/models/albums/album.model';
import { Router } from '@angular/router';
import { Photo } from 'src/app/core/models/photos/photo.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: Album[] = [];
  photos: Photo[] = [];
  userId: number = 0;
  albumThumbnailUrls: string[] = [];
  albumsRoute!: string;


  constructor(private location: Location,private activatedRoute: ActivatedRoute, private albumsService: AlbumsService, private router:Router) {}

  ngOnInit(): void {
    this.albumsService.albumsRoute = this.location.path();


    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('userId'));

    this.albumsService.getAlbumsByUserId(this.userId).subscribe(albums => {
      this.albums = albums;
      
      this.albums.forEach(album => {
        this.albumsService.getPhotosByAlbumId(album.id).subscribe(photos => {
          const randomIndex = Math.floor(Math.random() * photos.length);
          const randomPhoto = photos[randomIndex];
          this.albumThumbnailUrls.push(randomPhoto.thumbnailUrl);
        });
      });
    });
  }
  
  getAlbumPhoto(albumId: number): void {
    this.router.navigate(['Photos/Photo/', albumId]); 

  }
  

}
