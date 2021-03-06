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
  { path: 'empresa-gestion', loadChildren: './paginas/empresa-gestion/empresa-gestion.module#EmpresaGestionPageModule' },
  { path: 'usuario-empresa', loadChildren: './paginas/usuario-empresa/usuario-empresa.module#UsuarioEmpresaPageModule' },
  { path: 'usuario-empresa-edit', loadChildren: './paginas/usuario-empresa-edit/usuario-empresa-edit.module#UsuarioEmpresaEditPageModule' },
  { path: 'administrador', loadChildren: './paginas/administrador/administrador.module#AdministradorPageModule' },
  { path: 'articulo', loadChildren: './paginas/articulo/articulo.module#ArticuloPageModule' },
  { path: 'articulo-edit', loadChildren: './paginas/articulo-edit/articulo-edit.module#ArticuloEditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
