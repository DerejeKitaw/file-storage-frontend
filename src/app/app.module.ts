import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileContentComponent } from './file-content/file-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    FileContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
