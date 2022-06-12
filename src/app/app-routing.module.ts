import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { GigsComponent } from './gigs/gigs.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: "", redirectTo:"dashboard",pathMatch:"full"
  }, {
    path: "dashboard", component:DashBoardComponent
  },{
    path:"gigs",component:GigsComponent
  },{
    path:"training",component:TrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
