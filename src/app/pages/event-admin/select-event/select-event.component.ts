import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-select-event',
  templateUrl: './select-event.component.html',
  styleUrls: ['./select-event.component.scss']
})
export class SelectEventComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  // settings = {
  //   add: {
  //     addButtonContent: '<i class="nb-plus"></i>',
  //   },
  //   edit: {
  //     editButtonContent: '<i class="nb-edit"></i>'
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //   },
  //   columns: {
  //     race: {
  //       title: 'Race Name'
  //     },
  //     startTime: {
  //       title: 'Start Time'
  //     },
  //     endTime: {
  //       title: 'End Time'
  //     },
  //     status: {
  //       title: 'Status',
  //       type: 'html'
  //     }
  //   },
  //   mode:'external',
  //   actions: {  
  //     columnTitle: 'Action',  
  //     add: true,  
  //     edit: true,  
  //     delete: true,  
  //     position: 'left'  
  //   },
  //   pager: {  
  //     display: true,  
  //     perPage: 10  
  //   },
  // };

  // data = [
  //   {
  //     race: 1,
  //     startTime: "Leanne Graham",
  //     endTime: "Bret",
  //     status: '<input name ="avik" type="radio" value="Zreyas Education">'
  //   },
  //   {
  //     race: 1,
  //     startTime: "Leanne Graham",
  //     endTime: "Bret",
  //     status: "Sincere@april.biz"
  //   },
  //   {
  //     race: 1,
  //     startTime: "Leanne Graham",
  //     endTime: "Bret",
  //     status: "Sincere@april.biz"
  //   }
  // ];

  // create(){    
  //   this.router.navigate(['pages/event-setup'])
  // }
  // edit(){
  //   this.router.navigate(['pages/sponsor'])
  // }

}
