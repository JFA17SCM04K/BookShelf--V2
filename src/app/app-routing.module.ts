import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule, Transition } from '@uirouter/angular';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { CommonService } from './shared/common.service';

const rootModule: RootModule = {
  states: [
    {
      name: "book",
      url: "/book",
      component: BookComponent
    },
    {
      name: "book-create",
      url: "/book-create",
      component: BookCreateComponent
    },
    {
      name: "book-detail",
      url: "/:id",
      component: BookDetailComponent
      // resolve: [
      //   {
      //     token: "bookItem",
      //     deps: [Transition, CommonService],
      //     resolveFn: (trans: Transition, commonService: CommonService) => {
      //       console.log("Inside the app routing resolve function");
      //       console.log("Id from the params"+trans.params().id);
      //       commonService.getOneBook(trans.params().id).toPromise()
      //         .then(data =>{
      //           console.log("Inside the response then");
      //           console.log(data);
      //         });
      //     }
      //   }
      // ]
    },
    {
      name: "book-detail.book-edit",
      url: "/:id/edit",
      component: BookEditComponent
    }


  ],
  useHash: true;

  transitionService.onBefore({ to: 'home' }, (trans: Transition) =>
    trans.router.stateService.target("home.dashboard"));


};



@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
