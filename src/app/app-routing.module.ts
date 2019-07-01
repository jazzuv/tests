import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: "./about/about.module#AboutModule"
  },
  {
    path: "about",
    loadChildren: "./about/about.module#AboutModule"
  },
  {
    path: "faq",
    loadChildren: "./faq/faq.module#FaqModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
