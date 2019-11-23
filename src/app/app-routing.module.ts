import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverHomeComponent } from './driver-home/driver-home.component';

const routes: Routes = [
  { path: '', component: DriverHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
