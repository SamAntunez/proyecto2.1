import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina3Page } from './pagina3.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina3PageRoutingModule {}
