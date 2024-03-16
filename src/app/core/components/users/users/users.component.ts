import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Album } from '../../models/album.model';
import { Photo } from '../../models/photo.model';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  users: User[] = [];
  albums:Album[]=[];
  photos:Photo[]=[];
  constructor(private usersService: UsersService, private router: Router) 
  { 
 
  }

  ngOnInit(): void {
    forkJoin({
      users: this.usersService.getUsers(),
      albums: this.usersService.getAlbums(),
      photos: this.usersService.getPhotos()
    }).subscribe({
      next: (responses) => {
        this.users = responses.users;
        this.albums = responses.albums;
        this.photos = responses.photos;
  
        this.users.forEach(user => {
          user.albums = this.albums.filter(album => album.userId === user.id);
        });
        this.albums.forEach(album => {
          album.photos = this.photos.filter(photo => photo.albumId === album.id);
        }); 
      },
      error: (err) => {
        console.error(err);
      }

    });
  }

  getUserAlbum(userId:number)
  {
    this.router.navigate(['/albums', userId]);

  }
  
  
  
}

