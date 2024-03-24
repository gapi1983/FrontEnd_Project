import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/core/models/albums/album.model';
import { AlbumsService } from '../../services/albums.service';
import { Photo } from 'src/app/core/models/photos/photo.model';
import { User } from 'src/app/core/models/users/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  
  photos:Photo[] = [];
  users:User[] = [];
  albums:Album[] = [];
  albumId:number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumsService: AlbumsService,
    private usersService:UsersService,
    private router:Router
    ) {}

    ngOnInit(): void {
        this.usersService.getUsers().subscribe(users => {
          this.users = users;
        }); 
        this.albumsService.getAllAlbums().subscribe(albums => {
          this.albums = albums;
          
        });  
      }
      GetAlbumPhotos(albumId:number){
        this.router.navigate(['Photos/Photo/',albumId]);
      }
  };