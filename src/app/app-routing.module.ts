import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { GodComponent } from './god/god.component';

const routes: Routes = [
  { path: '', component: DriverHomeComponent },
  { path: 'driver', component: DriverHomeComponent },
  { path: 'god', component: GodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
