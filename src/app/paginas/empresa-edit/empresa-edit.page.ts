import { ClienteRest01 } from './../../datos/cliente-rest01';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { EmpresaEditParams } from './empresa-edit.params';
import { EmpresaEditIdioma, EmpresaEditIdiomaEn, EmpresaEditIdiomaEs, EmpresaEditIdiomaGl } from './empresa-edit-idioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.page.html',
  styleUrls: ['./empresa-edit.page.scss'],
})
export class EmpresaEditPage implements OnInit {
  public textosIdioma: EmpresaEditIdioma;
  private empresaEditParams: EmpresaEditParams;
  private clienteRest01: ClienteRest01;
  public form = {
    nombre : ''
  }


  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.empresaEditParams = datosApp.pilaParams.getTop() as EmpresaEditParams;
    this.clienteRest01 = new ClienteRest01(datosApp);
    if (! this.empresaEditParams.parametrosEntrada.nuevo){
      this.restEmpresaSelectId();
    }
  }

  ngOnInit() {
  }

  private comprobarForm(): boolean {
    let resultado = true;
    if (this.form.nombre === ''){
     resultado = false;
     this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorNombre);
   } 
    return resultado;
  }


  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new EmpresaEditIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new EmpresaEditIdiomaGl();
                      break;
      default: this.textosIdioma = new EmpresaEditIdiomaEs();
    }
  }

  private restEmpresaInsertCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.empresaEditParams.parametrosSalida.ok = true;
      this.datosApp.pilaParams.pop();
    }
  }
  private restEmpresaInsertCb(miPagina: object){
    const estaPagina: EmpresaEditPage = miPagina as EmpresaEditPage;
    estaPagina.restEmpresaInsertCb2();
  }
  private restEmpresaInsert(){
    this.clienteRest01.setRetorno(this, this.restEmpresaInsertCb);
    this.clienteRest01.empresaInsert(this.form.nombre);
  }

  private restEmpresaSelectIdCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.form.nombre = this.clienteRest01.rows[0][this.clienteRest01.tablaEmpresa.nombre];
    }
  }
  private restEmpresaSelectIdCb(miPagina: object){
    const estaPagina: EmpresaEditPage = miPagina as EmpresaEditPage;
    estaPagina.restEmpresaSelectIdCb2();
  }
  private restEmpresaSelectId(){
    this.clienteRest01.setRetorno(this, this.restEmpresaSelectIdCb);
    this.clienteRest01.empresaSelectId(this.empresaEditParams.parametrosEntrada.idEmpresa);
  }

  private restEmpresaUpdateCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.empresaEditParams.parametrosSalida.ok = true;
      this.datosApp.pilaParams.pop();
    }
  }
  private restEmpresaUpdateCb(miPagina: object){
    const estaPagina: EmpresaEditPage = miPagina as EmpresaEditPage;
    estaPagina.restEmpresaUpdateCb2();
  }
  private restEmpresaUpdate(){
    this.clienteRest01.setRetorno(this, this.restEmpresaUpdateCb);
    this.clienteRest01.empresaUpdateNombre(
      this.empresaEditParams.parametrosEntrada.idEmpresa,
      this.form.nombre);


  }



  public volverClick() {
    this.empresaEditParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public aceptarClick(){
    if (this.comprobarForm()){
        if (this.empresaEditParams.parametrosEntrada.nuevo){
          this.restEmpresaInsert();
        } else {
         this.restEmpresaUpdate();
        }
    }
  }

}
