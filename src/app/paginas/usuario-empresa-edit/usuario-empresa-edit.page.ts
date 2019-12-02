import { EmpresaEditParams } from './../empresa-edit/empresa-edit.params';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { ClienteRest01 } from './../../datos/cliente-rest01';
import { UsuarioEmpresaEditParams } from './usuario-empresa-edit-params';
// tslint:disable-next-line: max-line-length
import { UsuarioEmpresaEditIdioma, UsuarioEmpresaEditIdiomaEn, UsuarioEmpresaEditIdiomaGl, UsuarioEmpresaEditIdiomaEs } from './usuario-empresa-edit-idioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-empresa-edit',
  templateUrl: './usuario-empresa-edit.page.html',
  styleUrls: ['./usuario-empresa-edit.page.scss'],
})
export class UsuarioEmpresaEditPage implements OnInit {
  public textosIdioma: UsuarioEmpresaEditIdioma;
  private usuarioEmpresaEditParams: UsuarioEmpresaEditParams;
  private empresaEditParams: UsuarioEmpresaEditParams;
  private clienteRest01: ClienteRest01;
  public form = {
    nombre : '',
    apellidos: '',
    mail: '',
    nif: '',
    dir: ''
  };


  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.empresaEditParams = datosApp.pilaParams.getTop() as UsuarioEmpresaEditParams;
    this.clienteRest01 = new ClienteRest01(datosApp);
    if (! this.empresaEditParams.parametrosEntrada.nuevo){
      this.restUsuarioEmpresaSelectId();
    }
  }

  ngOnInit() {
  }

  private comprobarForm(): boolean {
    let resultado = true;
    if ((this.usuarioEmpresaEditParams.parametrosEntrada.nuevo) && (this.form.mail === ''))  {
     resultado = false;
     this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorMail);
   // tslint:disable-next-line: align
   } else if (this.form.apellidos === '') {
    this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorApellidos);
   } else if (this.form.nombre === '') {
    this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorNombre);
   } else if (this.form.nif === '') {
    this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorNif);
   } else if (this.form.dir === '') {
    this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorDir);
   }
    return resultado;
  }


  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new UsuarioEmpresaEditIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new UsuarioEmpresaEditIdiomaGl();
                      break;
      default: this.textosIdioma = new UsuarioEmpresaEditIdiomaEs();
    }
  }

  private restUsuarioEmpresaInsertCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.usuarioEmpresaEditParams.parametrosSalida.ok = true;
      this.datosApp.pilaParams.pop();
    }
  }
  // tslint:disable-next-line: max-line-length
  private restUsuarioEmpresaInsertCb(miPagina: object) { // Esta fuera de contexto y no puede utilizar el this, que lo llama en el callback2.
    const estaPagina: UsuarioEmpresaEditPage = miPagina as UsuarioEmpresaEditPage;
    estaPagina.restUsuarioEmpresaInsertCb2();
  }
  private restUsuarioEmpresaInsert(){
    this.clienteRest01.setRetorno(this, this.restUsuarioEmpresaInsertCb);
    // tslint:disable-next-line: max-line-length
    this.clienteRest01.usuarioEmpresaInsert(this.usuarioEmpresaEditParams.parametrosEntrada.idEmpresa, this.form.mail, this.form.nombre, this.form.apellidos, this.form.nif, this.form.mail);
  }

  private restUsuarioEmpresaSelectIdCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      // tslint:disable-next-line: max-line-length
      this.form.nombre = this.clienteRest01.rows[0][this.clienteRest01.tablaUsuarioEmpresa.nombre]; // seleccionar uno y los pone en el formulario, y nos devuelve uno solo.
      this.form.apellidos = this.clienteRest01.rows[0][this.clienteRest01.tablaUsuarioEmpresa.apellidos];
      this.form.nombre = this.clienteRest01.rows[0][this.clienteRest01.tablaUsuarioEmpresa.nif];
      this.form.nombre = this.clienteRest01.rows[0][this.clienteRest01.tablaUsuarioEmpresa.dir];
    }
  }
  private restUsuarioEmpresaSelectIdCb(miPagina: object){
    const estaPagina: UsuarioEmpresaEditPage = miPagina as UsuarioEmpresaEditPage;
    estaPagina.restUsuarioEmpresaSelectIdCb2();
  }
  private restUsuarioEmpresaSelectId(){
    this.clienteRest01.setRetorno(this, this.restUsuarioEmpresaSelectIdCb);
    this.clienteRest01.empresaSelectId(this.usuarioEmpresaEditParams.parametrosEntrada.idUsuarioEmpresa);
  }

  private restUsuarioEmpresaUpdateCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.usuarioEmpresaEditParams.parametrosSalida.ok = true;
      this.datosApp.pilaParams.pop();
    }
  }
  private restUsuarioEmpresaUpdateCb(miPagina: object){
    const estaPagina: UsuarioEmpresaEditPage = miPagina as UsuarioEmpresaEditPage;
    estaPagina.restUsuarioEmpresaUpdateCb2();
  }
  private restUsuarioEmpresaUpdate() {
    this.clienteRest01.setRetorno(this, this.restUsuarioEmpresaUpdateCb);
    this.clienteRest01.usuarioEmpresaUpdate(
      this.usuarioEmpresaEditParams.parametrosEntrada.idUsuarioEmpresa,
      this.form.nombre,
      this.form.apellidos,
      this.form.nif,
      this.form.dir);


  }



  public volverClick() {
    this.usuarioEmpresaEditParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public aceptarClick(){
    if (this.comprobarForm()){
        if (this.usuarioEmpresaEditParams.parametrosEntrada.nuevo){
          this.restUsuarioEmpresaInsert();
        } else {
         this.restUsuarioEmpresaUpdate();
        }
    }
  }

}
