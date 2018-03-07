import { Component, OnInit } from '@angular/core';
import { FileType } from '../type/FileType';
import { Files } from '../constants/test-files';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  files = Files;

  selectedFile: FileType;

  onSelect(file: FileType): void {
    this.selectedFile = file;
  }

  constructor() { }

  ngOnInit() {
  }

}
