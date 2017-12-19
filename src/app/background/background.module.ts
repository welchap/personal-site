import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BackgroundRoutingModule } from './background-routing.module';
import { BackgroundComponent } from './background.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BackgroundRoutingModule
  ],
  declarations: [
    BackgroundComponent
  ]
})
export class BackgroundModule { }
