import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasComponent } from './datas/datas.component';
import { GitComponent } from './git/git.component';


const routes: Routes = [
  {path: "adatok", component: DatasComponent},
  {path: "git", component: GitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
