import { Component, OnInit } from '@angular/core';
import { FileType } from '../type/FileType';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  fileType: FileType = {
    id: 'cw948e75tyw458',
    name: 'gago',
    content: new Map<string, string>([['key1', 'value1'], ['key2', 'value2']])
  };

  constructor() { }

  ngOnInit() {
  }

}
