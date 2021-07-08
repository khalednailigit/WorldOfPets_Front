import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { NavComponent } from './components/nav/nav.component';
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { LoginComponent } from './screens/auth/login/login.component';
import { EditComponent } from './screens/post/edit/edit.component';
import { CreateComponent } from './screens/post/create/create.component';
import { ViewComponent } from './screens/post/view/view.component';
import { IndexComponent } from './screens/post/index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    ProductdetailComponent,
    AddproductComponent,
    ListproductComponent,
    NavComponent,
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    EventdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
