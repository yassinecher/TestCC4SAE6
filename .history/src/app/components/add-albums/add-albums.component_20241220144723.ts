import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
}
  album!: FormGroup;
  ngOnInit(): void {
    this.album = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      creationDate: new FormControl('', [
        Validators.required,
    
      ]),
      archived: new FormControl('', [
        Validators.required,

      ]),
      coverPicture: new FormControl('', [Validators.required]),
      photos: new FormControl([], [Validators.required]),
   
    });
 
  }
}
