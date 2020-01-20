import { UsuarioEmpresaEditParams } from './../usuario-empresa-edit/usuario-empresa-edit.params';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { ClienteRest01 } from './../../datos/cliente-rest01';
import { UsuarioEmpresaParams } from './usuario-empresa.params';
import { UsuarioEmpresaIdioma, UsuarioEmpresaIdiomaEn, UsuarioEmpresaIdiomaGl, UsuarioEmpresaIdiomaEs } from './usuario-empresa.idioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-empresa',
  templateUrl: './usuario-empresa.page.html',
  styleUrls: ['./usuario-empresa.page.scss'],
})
export class UsuarioEmpresaPage implements OnInit {
  public textosIdioma: UsuarioEmpresaIdioma;
  private usuarioEmpresaParams: UsuarioEmpresaParams;
  private usuarioEmpresaEditParams: UsuarioEmpresaEditParams;



  public items = [];
  private clienteRest01: ClienteRest01;
  public activo = true;
  public patronBuscar = '';
  public buscando = false;
  public seleccionar: boolean;

  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.usuarioEmpresaParams = datosApp.pilaParams.getTop() as UsuarioEmpresaParams;
    this.usuarioEmpresaEditParams = null;
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.seleccionar = this.usuarioEmpresaParams.parametrosEntrada.seleccionar;
  }

  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.usuarioEmpresaEditParams !== null) &&
    ((this.usuarioEmpresaEditParams.parametrosSalida.ok) ||
    (this.usuarioEmpresaEditParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/
      if (this.usuarioEmpresaEditParams.parametrosSalida.ok) {
        this.buscarItems();
      }
      this.usuarioEmpresaEditParams = null;
    }

    

  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new UsuarioEmpresaIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new UsuarioEmpresaIdiomaGl();
                      break;
      default: this.textosIdioma = new UsuarioEmpresaIdiomaEs();
    }
  }

  private restUsuarioEmpresaSelectCb2(){
   
    this.buscando = false;
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
        this.items = this.clienteRest01.rows;
    }
  }
  private restUsuarioEmpresaSelectCb(miPagina: object){
    const estaPagina: UsuarioEmpresaPage = miPagina as UsuarioEmpresaPage;
    estaPagina.restUsuarioEmpresaSelectCb2();
  }
  private restUsuarioEmpresaSelect(){
    this.buscando = true;
    this.clienteRest01.setRetorno(this, this.restUsuarioEmpresaSelectCb);
    this.clienteRest01.usuarioEmpresaSelect(
      this.usuarioEmpresaParams.parametrosEntrada.idEmpresa,
      this.patronBuscar, this.activo);
  }

  private restUsuarioEmpresaDeleteCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
       this.buscarItems();
    }
  }
  private restUsuarioEmpresaDeleteCb(miPagina: object){
    const estaPagina: UsuarioEmpresaPage = miPagina as UsuarioEmpresaPage;
    estaPagina.restUsuarioEmpresaDeleteCb2();
  }
  private restUsuarioEmpresaDelete(idUsuarioEmpresa){
    this.clienteRest01.setRetorno(this, this.restUsuarioEmpresaDeleteCb);
    this.clienteRest01.usuarioEmpresaDelete(idUsuarioEmpresa);
  }

  private restUsuarioEmpresaUpdateActivoCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
       this.buscarItems();
    }
  }
  private restUsuarioEmpresaUpdateActivoCb(miPagina: object){
    const estaPagina: UsuarioEmpresaPage = miPagina as UsuarioEmpresaPage;
    estaPagina.restUsuarioEmpresaUpdateActivoCb2();
  }
  private restUsuarioEmpresaUpdateActivo(idUsuarioEmpresa: string, activo: boolean){
    this.clienteRest01.setRetorno(this, this.restUsuarioEmpresaUpdateActivoCb);
    this.clienteRest01.usuarioEmpresaUpdateActivo(idUsuarioEmpresa, activo);
  }

  public volverClick() {
    this.usuarioEmpresaParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public empresaEditNuevoClick(){
    this.usuarioEmpresaEditParams = new UsuarioEmpresaEditParams();
    this.usuarioEmpresaEditParams.parametrosEntrada.nuevo = true;
    this.usuarioEmpresaEditParams.parametrosEntrada.idEmpresa =
    this.usuarioEmpresaParams.parametrosEntrada.idEmpresa;
    this.datosApp.pilaParams.push(this.usuarioEmpresaEditParams);
}

public verActivosClick(){
  this.activo = ! this.activo;
  this.buscarItems();
}

async confirmarDelete(item) {
  const alert = await this.datosApp.alertController.create({
    header: this.textosIdioma.confirmeBorrado,
    message: item[this.clienteRest01.tablaEmpresa.nombre],
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
          this.restUsuarioEmpresaDelete(item[this.clienteRest01.tablaUsuarioEmpresa.idUsuarioEmpresa]);
        }
      }
    ]
  });

  await alert.present();
}

public usuarioEmpresaClick(item){
  if (this.seleccionar){
    this.usuarioEmpresaParams.parametrosSalida.ok = true;
    this.usuarioEmpresaParams.parametrosSalida.idUsuarioEmpresa=
    item[this.clienteRest01.tablaUsuarioEmpresa.idUsuarioEmpresa];
    this.datosApp.pilaParams.pop();
  } else {
    this.usuarioEmpresaMenu(item);
  }
}


async usuarioEmpresaMenu(item) {
  const activo = this.datosApp.util.stringToBoolean(item[this.clienteRest01.tablaUsuarioEmpresa.activo]);
  const actionSheet = await this.datosApp.actionSheetController.create({
    header: item[this.clienteRest01.tablaUsuarioEmpresa.nombre] + ' ' +
            item[this.clienteRest01.tablaUsuarioEmpresa.apellidos],
    buttons: [{ 
      text: this.textosIdioma.editar,
      icon: 'create',
      handler: () => {
        this.usuarioEmpresaEditParams = new UsuarioEmpresaEditParams();
        this.usuarioEmpresaEditParams.parametrosEntrada.nuevo = false;
        this.usuarioEmpresaEditParams.parametrosEntrada.idUsuarioEmpresa = 
          item[this.clienteRest01.tablaUsuarioEmpresa.idUsuarioEmpresa];
        this.datosApp.pilaParams.push(this.usuarioEmpresaEditParams);
      }
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
          const idUsuarioEmpresa = item[this.clienteRest01.tablaUsuarioEmpresa.idUsuarioEmpresa];
  
          this.restUsuarioEmpresaUpdateActivo(idUsuarioEmpresa, ! activo);
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

public buscarItems(){
  if (this.patronBuscar === ''){
    this.items = [];
  } else {
    this.restUsuarioEmpresaSelect();
  }
}



}