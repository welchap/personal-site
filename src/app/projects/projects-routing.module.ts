import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ProjectsComponent } from './projects.component';

const routes: Routes = Route.withShell([
  { path: 'projects', component: ProjectsComponent, data: { title: extract('Projects') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectsRoutingModule { }
