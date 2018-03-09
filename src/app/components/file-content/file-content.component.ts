import { Component, OnInit, Input } from '@angular/core';
import { FileType } from '../../type/FileType';

@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.css']
})
export class FileContentComponent implements OnInit {

  @Input() file: FileType;

  constructor() { }

  ngOnInit() {
  }

}
