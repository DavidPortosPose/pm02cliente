import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioEmpresaEditPage } from './usuario-empresa-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEmpresaEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioEmpresaEditPage]
})
export class UsuarioEmpresaEditPageModule {}
