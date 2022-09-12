import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes= [
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'country-list',
    component:CountryListComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
