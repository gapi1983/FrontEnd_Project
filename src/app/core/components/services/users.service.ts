import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { } 

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/users`);  // url shranil v environmets 
  }
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.apiBaseUrl}/albums`);  
  }
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.apiBaseUrl}/photos`);  
  }
}
