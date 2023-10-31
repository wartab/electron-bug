import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BugComponent} from "./bug/bug.component";

const routes: Routes = [
  {path: "bug", component: BugComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
