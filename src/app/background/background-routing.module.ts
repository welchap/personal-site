import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { BackgroundComponent } from './background.component';

const routes: Routes = Route.withShell([
  { path: 'background', component: BackgroundComponent, data: { title: extract('Background') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BackgroundRoutingModule { }
