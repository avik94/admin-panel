import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-edit-event-name',
  templateUrl: './edit-event-name.component.html',
  styleUrls: ['./edit-event-name.component.scss']
})
export class EditEventNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  eventName = [
    {name: "Zreyas Education"}
  ]

}
