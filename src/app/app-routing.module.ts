import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DEFAULT_REDIRECT = 'jobs';
const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_REDIRECT,
    pathMatch: 'full'
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: '**',
    redirectTo: DEFAULT_REDIRECT
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
