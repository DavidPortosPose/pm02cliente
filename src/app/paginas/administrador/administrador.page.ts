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
    this.restAdministradorSelect();

  }
  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.usuarioEmpresaParams !== null) &&
    ((this.usuarioEmpresaParams.parametrosSalida.ok) ||
    (this.usuarioEmpresaParams.parametrosSalida.cancelar))) {
     
     if(this,this.usuarioEmpresaParams.parametrosSalida.ok) { 
       this.restAdministradorInsert(this.usuarioEmpresaParams.parametrosSalida.idUsuarioEmpresa);
       
    }
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

  public verActivosClick(){
    this.activo = ! this.activo;
    this.restAdministradorSelect();
  }

  public usuariosClick(){
    this.usuarioEmpresaParams = new UsuarioEmpresaParams();
    this.usuarioEmpresaParams.parametrosEntrada.idEmpresa = 
    this.administradorParams.parametrosEntrada.idEmpresa;
    this.usuarioEmpresaParams.parametrosEntrada.seleccionar = true;
    this.datosApp.pilaParams.push(this.usuarioEmpresaParams);
  }

  private restAdministradorSelectCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
     this.items = this.clienteRest01.rows;
    }
  }
  private restAdministradorSelectCb(miPagina: object){
    const estaPagina: AdministradorPage = miPagina as AdministradorPage;
    estaPagina.restAdministradorSelectCb2();
  }
  private restAdministradorSelect(){
    this.clienteRest01.setRetorno(this, this.restAdministradorSelectCb);
    this.clienteRest01.administradorSelect(this.administradorParams.parametrosEntrada.idEmpresa, this.activo);
  }

  private restAdministradorInsertCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.restAdministradorSelect();
     
    }
  }
  private restAdministradorInsertCb(miPagina: object){
    const estaPagina: AdministradorPage = miPagina as AdministradorPage;
    estaPagina.restAdministradorInsertCb2();
  }
  private restAdministradorInsert(idUsuarioEmpresa: string) {
    this.clienteRest01.setRetorno(this, this.restAdministradorInsertCb);
    this.clienteRest01.administradorInsert(idUsuarioEmpresa);
     
  }

  private restAdministradorDeleteCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
       this.restAdministradorSelect();
    }
  }
  private restAdministradorDeleteCb(miPagina: object){
    const estaPagina: AdministradorPage = miPagina as AdministradorPage;
    estaPagina.restAdministradorDeleteCb2();
  }
  private restAdministradorDelete(idAdministrador: string){
    this.clienteRest01.setRetorno(this, this.restAdministradorDeleteCb);
    this.clienteRest01.administradorDelete(idAdministrador);
  }

  private restAdministradorUpdateActivoCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
       this.restAdministradorSelect();
    }
  }
  private restAdministradorUpdateActivoCb(miPagina: object){
    const estaPagina: AdministradorPage = miPagina as AdministradorPage;
    estaPagina.restAdministradorUpdateActivoCb2();
  }
  private restAdministradorUpdateActivo(idAdministrador: string, activo: boolean){
    this.clienteRest01.setRetorno(this, this.restAdministradorUpdateActivoCb);
    this.clienteRest01.administradorUpdateActivo(idAdministrador, activo);
  }

  async confirmarDelete(item) {
    const alert = await this.datosApp.alertController.create({
      header: this.textosIdioma.confirmeBorrado,
      message: item[this.clienteRest01.tablaAdministrador.nombre] + ' ' + item[this.clienteRest01.tablaAdministrador.apellidos],
      buttons: [
        {
          text: this.textosIdioma.cancelar,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: this.textosIdioma.aceptar,
          handler: () => {
            this.restAdministradorDelete(item[this.clienteRest01.tablaAdministrador.idAdministrador]);
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  async administradorClick(item) {
    const activo = this.datosApp.util.stringToBoolean(item[this.clienteRest01.tablaEmpresa.activo]);
    const actionSheet = await this.datosApp.actionSheetController.create({
      header: item[this.clienteRest01.tablaEmpresa.nombre],
      buttons: [{
       
      }, {
        text: this.textosIdioma.borrar,
        icon: 'trash',
        handler: () => {
            this.confirmarDelete(item);
        }
        }, {
  
          text: activo ? this.textosIdioma.desactivar : this.textosIdioma.activar,
          icon: activo ? 'eye-off' : 'eye',
          handler: () => {
            const idAdministrador = item[this.clienteRest01.tablaAdministrador.idAdministrador];
    
            this.restAdministradorUpdateActivo(idAdministrador, ! activo);
          }
        }, {
          text: this.textosIdioma.cancelar,
          icon: 'close',
          role: 'cancel',
          handler: () => {
  
          }
      }]
    });
    await actionSheet.present();
  }
  

}
