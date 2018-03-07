import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileContentComponent } from './file-content/file-content.component';
import { FileService } from './service/file.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './service/message.service';


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
