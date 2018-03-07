import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilesComponent } from './components/files/files.component';
import { FileContentComponent } from './components/file-content/file-content.component';
import { FileService } from './services/file/file.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message/message.service';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    FileContentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FileService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
