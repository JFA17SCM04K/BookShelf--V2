import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { BookModel} from './BookModel';
import 'rxjs/Rx';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {}

  //Get books
  getBooks(){
  console.log("Common service get books mehttod")
  return this.http.get('/book',{
    observe: 'body',
    responseType: 'json',
  })
    .map(
      (books) => {
        console.log(books);
      return books;
      }
    );
  }

  //Create Books - post
  storeRecipes(newBook) {
    console.log("the value of new book is"+newBook);
    return this.http.post('/book', newBook, {
      observe: 'body'
    });
  }


  //Get Book details
  getOneBook(id){
  console.log("inside the service");
  console.log("value of book id is:"+id);
    return this.http.get('/book/'+id,{
      observe:'body'
    });
  }
  //
  //Update the Book
  updateExistingBook(id, updatedBook){
    console.log("the value of new book is"+updatedBook);
    return this.http.put('/book/'+id, updatedBook, {
      observe: 'body'
    });
  }

  // //Get Book details
  // getOneBook(id){
  //   return this.http.get('/book/'+id,{
  //     observe: 'body'
  //   });
  // }
  //
  //Delete Books
  deleteOneBook(id){
    return this.http.delete('/book/'+id,{
      observe: 'body'
    });
  }
  //
  // //charts
  // getChartData(){
  //   return this.http.get('/book/charts',{
  //     observe: 'body'
  //   });
  // }
  //
  // getChartDataNew(){
  //   return this.http.get('/book/charts/aggr2',{
  //     observe: 'body'
  //   });
  // }
}
