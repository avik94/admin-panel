import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-edit-event-details',
  templateUrl: './edit-event-details.component.html',
  styleUrls: ['./edit-event-details.component.scss']
})
export class EditEventDetailsComponent implements OnInit {

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
