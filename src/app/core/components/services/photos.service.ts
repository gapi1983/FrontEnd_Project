import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../../models/photos/photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }
  private _photosRoute: string = '';

  getPhotosByAlbumId(albumId: number) {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
  getPhotoById(photoId: number): Observable<Photo> {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
  }
  getAllPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos`);
  }
  getPhotoByTitle(title:string):Observable<Photo[]>{
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?title=${title}`)
    
  }
  //modify
  get photosRoute(): string {
    return this._photosRoute;
  }

  set photosRoute(route: string) {
    this._photosRoute = route;
  }
}
