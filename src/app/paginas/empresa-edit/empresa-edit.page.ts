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



  public volverClick() {
    this.empresaEditParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public aceptarClick(){
    if (this.comprobarForm()){
        if (this.empresaEditParams.parametrosEntrada.nuevo){
          this.restEmpresaInsert();
        }
    }
  }

}
