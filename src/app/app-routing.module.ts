import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './paginas/login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './paginas/registro/registro.module#RegistroPageModule' },
  { path: 'principal', loadChildren: './paginas/principal/principal.module#PrincipalPageModule' },
  { path: 'empresa-config', loadChildren: './paginas/empresa-config/empresa-config.module#EmpresaConfigPageModule' },
  { path: 'empresa-edit', loadChildren: './paginas/empresa-edit/empresa-edit.module#EmpresaEditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
