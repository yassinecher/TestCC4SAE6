import { Injectable } from '@angular/core';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums:Album[]=[]
  i=0
  constructor() { }
  addAlbum(title:string,coverPicture:string){
    this.albums.push({
      id:this.i,
      title:title,
      archived:0,
      coverPicture,
      creationDate:new Date(),
      photos:[]
    })  
    i++;
  }
}
