import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { GodHomeComponent } from './god-home/god-home.component';

const routes: Routes = [
  { path: '', component: DriverHomeComponent },
  { path: 'driver', component: DriverHomeComponent },
  { path: 'god', component: GodHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
