import { Component } from '@angular/core';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor(private alS:AlbumService){
    
  }
}
