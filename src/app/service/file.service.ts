import { Injectable } from '@angular/core';
import { FileType } from '../type/FileType';
import { Files } from '../constants/test-files';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../service/message.service';

@Injectable()
export class FileService {

  constructor(private messageService: MessageService) { }

  getFiles(): Observable<FileType[]> {
    this.messageService.add('Constant files successfuly fetched');
    return of(Files);
  }
}
