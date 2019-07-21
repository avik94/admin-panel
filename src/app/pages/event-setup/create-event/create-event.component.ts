import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  multipleChoiceQuestion = false;
  textQuestion = false;;
  multipleChoiceTextQuestion = false;
  normalOuestion = false;
  constructor() { }

  ngOnInit() {
  }
  normalOuestionEvent(){
    this.multipleChoiceQuestion = false;
    this.textQuestion = false;;
    this.multipleChoiceTextQuestion = false;
    this.normalOuestion = true;
  }
  multipleChoice(){
    this.multipleChoiceQuestion = true;
    this.textQuestion = false;
    this.multipleChoiceTextQuestion = false;
    this.normalOuestion = false;
  }
  text(){
    this.multipleChoiceQuestion = false;
    this.textQuestion = true;
    this.multipleChoiceTextQuestion = false;
    this.normalOuestion = false;
  }
  multipleChoiceText(){
    this.multipleChoiceQuestion = false;
    this.textQuestion = false;
    this.multipleChoiceTextQuestion = true;
    this.normalOuestion = false;
  }
}
