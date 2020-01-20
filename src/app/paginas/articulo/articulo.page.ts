import { ArticuloEditParams } from './../articulo-edit/articulo-edit.params';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { ClienteRest01 } from './../../datos/cliente-rest01';
import { ArticuloParams } from './articulo.params';
import { ArticuloIdioma, ArticuloIdiomaEn, ArticuloIdiomaGl, ArticuloIdiomaEs } from './articulo.idioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.page.html',
  styleUrls: ['./articulo.page.scss'],
})
export class ArticuloPage implements OnInit {
  public textosIdioma: ArticuloIdioma;
  private articuloParams: ArticuloParams;
  private articuloEditParams: ArticuloEditParams;
  

  public items = [];
  private clienteRest01: ClienteRest01;
  public activo = true;

  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.articuloParams = datosApp.pilaParams.getTop() as ArticuloParams;
    this.articuloEditParams = null;
    
    
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.restArticuloSelect();
  }

  
  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.articuloEditParams !== null) &&
    ((this.articuloEditParams.parametrosSalida.ok) ||
    (this.articuloEditParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/
      if (this.articuloEditParams.parametrosSalida.ok) {
        this.restArticuloSelect();
      }
      this.articuloEditParams = null;
    }

    

  }

  

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new ArticuloIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new ArticuloIdiomaGl();
                      break;
      default: this.textosIdioma = new ArticuloIdiomaEs();
    }
  }
  private restArticuloSelectCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
        this.items = this.clienteRest01.rows;
    }
  }
  private restArticuloSelectCb(miPagina: object){
    const estaPagina: ArticuloPage = miPagina as ArticuloPage;
    estaPagina.restArticuloSelectCb2();
  }
  private restArticuloSelect(){
    this.clienteRest01.setRetorno(this, this.restArticuloSelectCb);
    this.clienteRest01.articuloSelect(this.articuloParams.parametrosEntrada.idEmpresa, this.activo);
  }

  private restArticuloInsertCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.operacionOk);
      this.restArticuloSelect();
    }
  }
  private restArticuloInsertCb(miPagina: object){
    const estaPagina: ArticuloPage = miPagina as ArticuloPage;
    estaPagina.restArticuloInsertCb2();
  }
  private restArticuloInsert(){
    this.clienteRest01.setRetorno(this, this.restArticuloInsertCb);
    this.clienteRest01.articuloInsert(
      this.articuloParams.parametrosEntrada.idEmpresa);
  }

  private restArticuloDeleteCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
       this.restArticuloSelect();
    }
  }
  private restArticuloDeleteCb(miPagina: object){
    const estaPagina: ArticuloPage = miPagina as ArticuloPage;
    estaPagina.restArticuloDeleteCb2();
  }
  private restArticuloDelete(idArticulo){
    this.clienteRest01.setRetorno(this, this.restArticuloDeleteCb);
    this.clienteRest01.articuloDelete(idArticulo);
  }

  private restArticuloUpdateActivoCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
       this.restArticuloSelect();
    }
  }
  private restArticuloUpdateActivoCb(miPagina: object){
    const estaPagina: ArticuloPage = miPagina as ArticuloPage;
    estaPagina.restArticuloUpdateActivoCb2();
  }
  private restArticuloUpdateActivo(idArticulo: string, activo: boolean){
    this.clienteRest01.setRetorno(this, this.restArticuloUpdateActivoCb);
    this.clienteRest01.articuloUpdateActivo(idArticulo, activo);
  }

  public articuloAnadirClick(){
    this.restArticuloInsert();
  }

  public verActivosClick(){
    this.activo = ! this.activo;
    this.restArticuloSelect();
  }
  public volverClick() {
    this.articuloParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  async confirmarDelete(item) {
    const alert = await this.datosApp.alertController.create({
      header: this.textosIdioma.confirmeBorrado,
      message: item[this.clienteRest01.tablaArticulo.nombre],
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
            this.restArticuloDelete(item[this.clienteRest01.tablaArticulo.idArticulo]);
          }
        }
      ]
    })
    await alert.present();
  }

    async confirmarActivar(item, activo: boolean) {
      const alert = await this.datosApp.alertController.create({
        header: this.textosIdioma.confirmeActivar,
        message: item[this.clienteRest01.tablaArticulo.nombre],
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
              const idArticulo = item[this.clienteRest01.tablaArticulo.idArticulo];
              this.restArticuloUpdateActivo(idArticulo, ! activo);
            }
          }
        ]
      })
      await alert.present();
}

    
  async articuloClick(item) {
    const activo = this.datosApp.util.stringToBoolean(item[this.clienteRest01.tablaArticulo.activo]);
    const actionSheet = await this.datosApp.actionSheetController.create({
      header: item[this.clienteRest01.tablaArticulo.nombre],
      buttons: [{ 
        text: this.textosIdioma.editar,
        icon: 'create',
        handler: () => {
          this.articuloEditParams = new ArticuloEditParams();
          this.articuloEditParams.parametrosEntrada.idArticulo = item[this.clienteRest01.tablaArticulo.idArticulo]; 
          this.articuloEditParams.parametrosEntrada.idEmpresa = item[this.clienteRest01.tablaArticulo.idEmpresa]; 
          this.datosApp.pilaParams.push(this.articuloEditParams);
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
            this.confirmarActivar(item,activo);
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
