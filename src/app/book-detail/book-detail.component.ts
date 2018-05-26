import { Component, OnInit} from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Transition, StateService } from '@uirouter/angular';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  constructor(private commonService: CommonService,
              private trans: Transition,
              private state: StateService) { }

  book;

  ngOnInit() {
    this.commonService.getOneBook(this.trans.params().id)
      .subscribe(data =>{
        this.book = data;
      })
  }

  deleteBook(bookId){
    this.commonService.deleteOneBook(bookId)
      .subscribe(res => {
        this.state.go("book");
      }, (err) =>{
        console.log(err);
      })
  }

}
