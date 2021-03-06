import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortAlphabeticalPipe } from './pipes/sort-alphabetical.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { DropdownBoxComponent } from './dropdown-box/dropdown-box.component';
import { SearchInputComponent } from './search-form/search-input/search-input.component';
import { ResultItemComponent } from './result-body/grid/result-item/result-item.component';
import { SearchService } from './search-form/search-form.service';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { ResultBodyComponent } from './result-body/result-body.component';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './result-body/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    SortAlphabeticalPipe,
    SearchFormComponent,
    DropdownBoxComponent,
    SearchInputComponent,
    ResultItemComponent,
    EmptyContentComponent,
    ResultBodyComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
