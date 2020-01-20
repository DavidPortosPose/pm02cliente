import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { ClienteRest01 } from './../../datos/cliente-rest01';
import { ArticuloEditParams } from './articulo-edit.params';
import { ArticuloEditIdioma, ArticuloEditIdiomaEn, ArticuloEditIdiomaGl, ArticuloEditIdiomaEs } from './articulo-edit.idioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo-edit',
  templateUrl: './articulo-edit.page.html',
  styleUrls: ['./articulo-edit.page.scss'],
})
export class ArticuloEditPage implements OnInit  {
  public textosIdioma: ArticuloEditIdioma;
  private articuloEditParams: ArticuloEditParams;
  private clienteRest01: ClienteRest01;
  public form = {
    nombre : '',
    precio : 0,
    iva : 0
  }


  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.articuloEditParams = datosApp.pilaParams.getTop() as ArticuloEditParams;
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.restArticuloSelectId();
  }

  ngOnInit() {
  }

  private comprobarForm(): boolean {
    let resultado = true;
    if (this.form.nombre === ''){
     resultado = false;
     this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorNombre);
   }
   if ((this.form.precio < 100) || (this.form.precio > 200)){
    resultado = false;
    this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorPrecio);
  } 
    return resultado;
  }


  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new ArticuloEditIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new ArticuloEditIdiomaGl();
                      break;
      default: this.textosIdioma = new ArticuloEditIdiomaEs();
    }
  }

  

  private restArticuloSelectIdCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.form.nombre = this.clienteRest01.rows[0][this.clienteRest01.tablaArticulo.nombre];
      this.form.precio = this.clienteRest01.rows[0][this.clienteRest01.tablaArticulo.precio];
      this.form.iva = this.clienteRest01.rows[0][this.clienteRest01.tablaArticulo.iva];
    }
  }
  private restArticuloSelectIdCb(miPagina: object){
    const estaPagina: ArticuloEditPage = miPagina as ArticuloEditPage;
    estaPagina.restArticuloSelectIdCb2();
  }
  private restArticuloSelectId(){
    this.clienteRest01.setRetorno(this, this.restArticuloSelectIdCb);
    this.clienteRest01.articuloSelectId(this.articuloEditParams.parametrosEntrada.idEmpresa,
      this.articuloEditParams.parametrosEntrada.idArticulo);
  }

  private restArticuloUpdateCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.articuloEditParams.parametrosSalida.ok = true;
      this.datosApp.pilaParams.pop();
    }
  }
  private restArticuloUpdateCb(miPagina: object){
    const estaPagina: ArticuloEditPage = miPagina as ArticuloEditPage;
    estaPagina.restArticuloUpdateCb2();
  }
  private restArticuloUpdate(){
    this.clienteRest01.setRetorno(this, this.restArticuloUpdateCb);
    this.clienteRest01.articuloUpdate(
      this.articuloEditParams.parametrosEntrada.idArticulo,
      this.form.nombre, this.form.precio, this.form.iva);


  }



  public volverClick() {
    this.articuloEditParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public aceptarClick(){
    if (this.comprobarForm()){
         this.restArticuloUpdate();
    }
  }

}
