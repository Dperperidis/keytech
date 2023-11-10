import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OpencarlockComponent } from './auto/opencarlock/opencarlock.component';
import { RepaircarlockComponent } from './auto/repaircarlock/repaircarlock.component';

const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'open-car-lock', component:OpencarlockComponent },
  { path: 'repair-car-lock', component:RepaircarlockComponent },
  { path: '**', redirectTo: '', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
