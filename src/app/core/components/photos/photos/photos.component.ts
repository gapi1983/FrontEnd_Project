import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/core/models/photos/photo.model';
import { PhotosService } from '../../services/photos.service';
import { User } from 'src/app/core/models/users/user.model';
import { Album } from 'src/app/core/models/albums/album.model';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{
  photos:Photo[] = [];
  users:User[] = [];
  albums:Album[] = [];
  form!:FormGroup;
  numOfPhotos:number = 0;
  

  constructor(
    private photosService: PhotosService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      albumId: new FormControl(null),
      photoId: new FormControl(null),
      title: new FormControl(null),
    });
  }
  onSubmit() {
    if (this.form.value.photoId) {
      // Navigate based on photoId
      this.router.navigate(['Photos/FullScreenPhoto/', this.form.value.photoId]);
    } else if (this.form.value.title) {
      // Get photo by title and navigate
      this.photosService.getPhotoByTitle(this.form.value.title).subscribe((photos: Photo[]) => {
        if (photos && photos.length > 0) {
          const photo = photos[0];
          this.router.navigate(['Photos/FullScreenPhoto/', photo.id]);
        } else {
          alert('Photo not found');
        }
      });
    } else if (this.form.value.albumId) {
      // Navigate based on albumId
      this.router.navigate(['Photos/Photo/', this.form.value.albumId]);
    } else {
      // Handle case when no search criteria provided
      alert('Please enter a valid photoId, title, or albumId.');
    }
    this.form.reset();
  }
}
