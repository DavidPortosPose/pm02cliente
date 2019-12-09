import { UsuarioEmpresaParams } from './../usuario-empresa/usuario-empresa.params';
import { UsuarioEmpresaEditIdioma } from './../usuario-empresa-edit/usuario-empresa-edit.idioma';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { ClienteRest01 } from './../../datos/cliente-rest01';
import { AdministradorParams } from './administrador.params';
import { AdministradorIdioma, AdministradorIdiomaEn, AdministradorIdiomaGl, AdministradorIdiomaEs } from './administrador.idioma';
import { Component, OnInit } from '@angular/core';
import { UsuarioEmpresaPage } from '../usuario-empresa/usuario-empresa.page';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit  {
  public textosIdioma: AdministradorIdioma;
  private administradorParams: AdministradorParams;
  private usuarioEmpresa: UsuarioEmpresaPage;
  private usuarioEmpresaParams: UsuarioEmpresaParams;
  


  public items = [];
  private clienteRest01: ClienteRest01;
  public activo = true;

  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.administradorParams = datosApp.pilaParams.getTop() as AdministradorParams;
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.usuarioEmpresaParams = null;
  }
  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.usuarioEmpresaParams !== null) &&
    ((this.usuarioEmpresaParams.parametrosSalida.ok) ||
    (this.usuarioEmpresaParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/
      this.usuarioEmpresaParams = null;
    }

    

  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new AdministradorIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new AdministradorIdiomaGl();
                      break;
      default: this.textosIdioma = new AdministradorIdiomaEs();
    }
  }

  public volverClick() {
    this.administradorParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public usuariosClick(){
    this.usuarioEmpresaParams = new UsuarioEmpresaParams();
    this.usuarioEmpresaParams.parametrosEntrada.idEmpresa = 
    this.administradorParams.parametrosEntrada.idEmpresa;
    this.usuarioEmpresaParams.parametrosEntrada.seleccionar = true;
    this.datosApp.pilaParams.push(this.usuarioEmpresaParams);
  }

}
