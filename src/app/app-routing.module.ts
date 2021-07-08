import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { IndexComponent } from './screens/post/index/index.component';
import { LoginComponent } from './screens/auth/login/login.component';
import { ViewComponent } from './screens/post/view/view.component';
import { CreateComponent } from './screens/post/create/create.component';
import { EditComponent } from './screens/post/edit/edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent },
  { path: 'post/:postId/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent } ,
  { path: 'c1/:id/:name', component: ListproductComponent },
  { path: 'home', component: AddmovieComponent },
  { path: '**', component: AddproductComponent }, //for any routes , need to be the last item
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
