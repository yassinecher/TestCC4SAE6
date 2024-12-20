import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-add-albums',
  templateUrl: './add-albums.component.html',
  styleUrls: ['./add-albums.component.css']
})
export class AddAlbumsComponent  {
updateFiles($event: any) {
  console.log($event.target.files)
}
add() {
console.log(this.album.value)
this.albumS.addAlbum(this.album.get("title")?.value,this.album.get("coverPicture")?.value,)
}
constructor(private albumS:AlbumService){
  
}
  album!: FormGroup;
  ngOnInit(): void {
    this.album = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9 a-z A-Z]+'),
      ]),
      creationDate: new FormControl(new Date(), [
        Validators.required,
      ]),
      archived: new FormControl(0),
      coverPicture: new FormControl('', [Validators.minLength(5)]),
      photos: new FormControl([]),
   
    });
 
  }
}
