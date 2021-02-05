import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {CrisisCenterHomeComponent} from './crisis-center-home/crisis-center-home.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';

import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {CrisisService} from './crisis.service';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
    RouterModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    CrisisListComponent,
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule {}
