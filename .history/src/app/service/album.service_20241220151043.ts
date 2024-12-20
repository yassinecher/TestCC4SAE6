import { Injectable } from '@angular/core';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums:Album[]=[]
  constructor() { }
  addAlbum(title:string,coverPicture:string){
    album
  }
}
