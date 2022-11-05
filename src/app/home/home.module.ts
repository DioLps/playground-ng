import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { CardPropostaModule } from './card-proposta/card-proposta.module';
import { NavigationModule } from '../components/navigation/navigation.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardPropostaModule,
    NavigationModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
