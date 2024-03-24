import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' class
import { User } from '../../models/users/user.model';
import { Observable } from 'rxjs';
import { Album } from '../../models/albums/album.model';
import { Photo } from '../../models/photos/photo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  constructor(private http: HttpClient) { }


  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  }
  getAlbums():Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`)
  }
  getPhotos():Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos`)
  }
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
