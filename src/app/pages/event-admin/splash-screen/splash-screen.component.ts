import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput:ElementRef;

  constructor() { }

  ngOnInit() {
  } 
  
  removeFile(){
    this.fileInput.nativeElement.value = "";
  }

}
