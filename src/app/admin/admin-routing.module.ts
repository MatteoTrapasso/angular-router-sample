import {AuthGuard} from '../auth/auth.guard';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ManageCrisesComponent} from './manage-crises/manage-crises.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {NgModule} from '@angular/core';
import {ManageHeroesComponent} from './manage-heroes/manage-heroes.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'crises', component: ManageCrisesComponent},
          {path: 'heroes', component: ManageHeroesComponent},
          {path: '', component: AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
