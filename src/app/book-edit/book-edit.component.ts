import { Component, OnInit } from '@angular/core';
import { Transition, StateService } from '@uirouter/angular';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(private state: StateService,
              private trans: Transition,
              private commonService: CommonService) { }

  ngOnInit() {
  }


  updateBook(id, data){
    console.log("Inside the update bookfunction in the boo-edit component");
  this.commonService.updateExistingBook(id, data)
    .subscribe((response)=>{
      this.state.go("book-detail.book-edit", { id: id});
    },(err)=>{
      console.log(err);
    })
}
}
