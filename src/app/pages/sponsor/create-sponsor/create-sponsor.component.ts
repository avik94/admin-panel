import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngx-create-sponsor',
  templateUrl: './create-sponsor.component.html',
  styleUrls: ['./create-sponsor.component.scss']
})
export class CreateSponsorComponent implements OnInit {

  @ViewChild('fileInput',{static: false}) fileInput: ElementRef;
  
  preview = false;
  imageSrc;

  category = [
    {name: "Question"},
    {name: "Category1"}
  ]
  
  constructor() { }

  ngOnInit() {
  }

  removeFile(){
    this.fileInput.nativeElement.value = "";
    this.imageSrc = "";
    this.preview = false;
    console.log(this.imageSrc)
  }

  showFile(event){
    this.imageSrc = "";
    this.preview = true;
    if (this.fileInput.nativeElement.files && this.fileInput.nativeElement.files[0]) {
      const file = this.fileInput.nativeElement.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

}
