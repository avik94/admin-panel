import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  removeFile(){
    this.fileInput.nativeElement.value = "";
  }

}
