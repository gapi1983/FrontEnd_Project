import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/core/models/users/user.model';
import { Album } from 'src/app/core/models/albums/album.model';
import { Photo } from 'src/app/core/models/photos/photo.model';
import { forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  albums: Album[] = [];
  photos: Photo[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    forkJoin({
      users: this.usersService.getUsers().pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return [];
        })
      ),
      albums: this.usersService.getAlbums().pipe(
        catchError(error => {
          console.error('Error fetching albums:', error);
          return [];
        })
      ),
      photos: this.usersService.getPhotos().pipe(
        catchError(error => {
          console.error('Error fetching photos:', error);
          return [];
        })
      )
    }).subscribe({
      next: (responses) => {
        this.users = responses.users;
        this.albums = responses.albums;
        this.photos = responses.photos;
        
        // Connect users with their albums and albums with their photos
        this.users.forEach(user => {
          user.albums = this.albums.filter(album => album.userId === user.id);
          user.albums.forEach(album => {
            album.photos = this.photos.filter(photo => photo.albumId === album.id);
          });
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getUserAlbum(userId: number): void {
    console.log('User ID:', userId);
    console.log(this.albums)
  }
}