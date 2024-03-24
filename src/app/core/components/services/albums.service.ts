import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../../models/albums/album.model';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photos/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }
  private _albumsRoute: string = '';

  getAlbumsByUserId(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }
  getPhotosByAlbumId(albumId: number) {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
  getAlbumById(albumId: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
  }
  getAllAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`);
  }

  //modify
  get albumsRoute(): string {
    return this._albumsRoute;
  }

  set albumsRoute(route: string) {
    this._albumsRoute = route;
  }

}
