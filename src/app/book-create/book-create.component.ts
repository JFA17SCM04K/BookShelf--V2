import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book = {};

  constructor(private commonService: CommonService,
              private state: StateService) { }

  ngOnInit() {
  }

  saveBook(form: NgForm) {
  console.log("Inside the on save");
  console.log("seeeeeeeeeeeeeeeeeee");
  console.log(form);
  this.commonService.storeRecipes(this.book)
    .subscribe((response) => {
        console.log("res is");
        console.log(response);
        let id = response['_id'];
        console.log("id is"+id);
        this.state.go("book");
      }, (err) => {
        console.log(err);
      }
    );
}

}
