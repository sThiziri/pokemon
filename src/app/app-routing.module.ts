import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {
    path: "", redirectTo: 'pokemon/all', pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  { path: "**", component: PageNotFoundComponent } // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
