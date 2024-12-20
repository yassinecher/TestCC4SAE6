import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AddAlbumsComponent } from './components/add-albums/add-albums.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPhotosComponentComponent } from './components/list-photos-component/list-photos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlbumsComponent,
    AddAlbumsComponent,
    NotFoundComponent,
  
    ListPhotosComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
