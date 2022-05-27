import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
// import { SortDirective } from './directive/sort.directive';
// import { SearchFilterPipe } from './pipe/search-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    // SortDirective,
    // SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AdminModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
