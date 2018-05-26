import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  animal: string;
  name: string;
  books: any;
  total: any=0;
  constructor(private http: HttpClient,
              private commonService: CommonService) {

  }

  ngOnInit() {
    this.commonService.getBooks()
      .subscribe(data =>{
        this.books = data;
        console.log("Inside the book component");
        console.log(this.books);
      })
  }

}
