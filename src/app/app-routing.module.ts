import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBookComponent} from "./show-book/show-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";

const routes: Routes = [
  {
    path:"",component:ShowBookComponent
  },
  {
    path:"Create",component:CreateBookComponent
  },
  {
    path:"Edit/:id",component:EditBookComponent
  },
  // {
  //   path:"ShowDetail/:id",component:EditBookComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
