import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';
import { Photo } from 'src/app/core/models/photos/photo.model';
import { Location } from '@angular/common';
import { AlbumsService } from '../../../services/albums.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit{

  photos:Photo[] = [];
  albumId: number = 0;
  albumsRoute: string = '';//prejme od staregaroute
  photosRoute: string = '';


  constructor(private albumsService:AlbumsService,private activatedRoute: ActivatedRoute, private photosService: PhotosService, private router:Router,private location: Location,) {}

  ngOnInit(): void {
    this.photosService.photosRoute = this.location.path();
    this.albumsRoute = this.albumsService.albumsRoute;
    this.albumId = Number(this.activatedRoute.snapshot.paramMap.get('albumId'));

    this.photosService.getPhotosByAlbumId(this.albumId).subscribe(photos => {
      this.photos = photos;

      });
      
  }

  openPhoto(photoId: number): void {
    this.router.navigate(['Photos/FullScreenPhoto/',photoId]);
  }

}
