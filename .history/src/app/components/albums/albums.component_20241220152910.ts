import { Component } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
deletea(arg0: any) {
this.alS.delete(arg0)
}
  albums:Album[]
  constructor(private alS:AlbumService){
    this.albums=alS.getAll()

  }

}
