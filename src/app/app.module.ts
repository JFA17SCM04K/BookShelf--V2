import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CommonService } from './shared/common.service';
import { BookCreateComponent } from './book-create/book-create.component';


import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule,MatSelectModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {TableModule} from 'primeng/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {GrowlModule} from 'primeng/growl';
// import {MatButtonModule} from '@angular/material/button';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SpinnerModule} from 'primeng/spinner';
import {ChartModule} from 'primeng/chart';
import {ChartComponent} from './chart/chart.component';
import {CommonService} from './shared/common.service';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookCreateComponent,
    BookDetailComponent,
    BookDeleteComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    SpinnerModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatDividerModule,
    ChartModule,
    MessageModule,
    MatProgressBarModule,
    GrowlModule,
    MatProgressSpinnerModule,
    DialogModule,


  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
