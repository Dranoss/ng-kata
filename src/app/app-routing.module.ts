import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownComponent } from './layout/pages/down/down.component';
import { ResetComponent } from './layout/pages/reset/reset.component';
import { UpComponent } from './layout/pages/up/up.component';

const routes: Routes = [
  {path: '', component: UpComponent},
  {path: 'up', component: UpComponent},
  {path: 'down', component: DownComponent},
  {path: 'reset', component: ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
