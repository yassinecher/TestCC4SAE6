import { Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums:Album[]
  constructor(private alS:AlbumService){
    this.albums=alS.getAll()

  }

}
