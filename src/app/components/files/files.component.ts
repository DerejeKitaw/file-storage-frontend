import { Component, OnInit } from '@angular/core';
import { FileType } from '../../type/FileType';
import { Files } from '../../constants/test-files';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  files: FileType[];

  selectedFile: FileType;

  onSelect(file: FileType): void {
    this.selectedFile = file;
  }

  getFiles(): void {
    this.fileService.getFiles().subscribe(files => this.files = files);
  }

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.getFiles();
  }

}
