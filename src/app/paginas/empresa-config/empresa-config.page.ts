import { ClienteRest01 } from './../../datos/cliente-rest01';
import { EmpresaEditParams } from './../empresa-edit/empresa-edit.params';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { EmpresaConfigParams } from './empresa-config.params';
import { EmpresaConfigIdioma, EmpresaConfigIdiomaEn, EmpresaConfigIdiomaGl, EmpresaConfigIdiomaEs } from './empresa-config.idioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-config',
  templateUrl: './empresa-config.page.html',
  styleUrls: ['./empresa-config.page.scss'],
})
export class EmpresaConfigPage implements OnInit {
  public textosIdioma: EmpresaConfigIdioma;
  private empresaConfigParams: EmpresaConfigParams;
  private empresaEditParams: EmpresaEditParams;
  public items = [];
  private clienteRest01: ClienteRest01;
  public activo = true;
  

  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.empresaConfigParams = datosApp.pilaParams.getTop() as EmpresaConfigParams;
    this.empresaEditParams = null;
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.restEmpresaSelect();
  }

  ngOnInit() {
  }

  private ionViewDidEnter() {
    if ((this.empresaEditParams !== null) &&
    ((this.empresaEditParams.parametrosSalida.ok) ||
    (this.empresaEditParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/
      if (this.empresaEditParams.parametrosSalida.ok) {
        this.restEmpresaSelect();
      }
      this.empresaEditParams = null;
    }

  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new EmpresaConfigIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new EmpresaConfigIdiomaGl();
                      break;
      default: this.textosIdioma = new EmpresaConfigIdiomaEs();
    }
  }

  private restEmpresaSelectCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
        this.items = this.clienteRest01.rows;
    }
  }
  private restEmpresaSelectCb(miPagina: object){
    const estaPagina: EmpresaConfigPage = miPagina as EmpresaConfigPage;
    estaPagina.restEmpresaSelectCb2();
  }
  private restEmpresaSelect(){
    this.clienteRest01.setRetorno(this, this.restEmpresaSelectCb);
    this.clienteRest01.empresaSelect(this.activo);
  }

  private restEmpresaDeleteCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      this.restEmpresaSelect();
    }
  }
  private restEmpresaDeleteCb(miPagina: object){
    const estaPagina: EmpresaConfigPage = miPagina as EmpresaConfigPage;
    estaPagina.restEmpresaDeleteCb2();
  }
  private restEmpresaDelete(idEmpresa: string) {
    this.clienteRest01.setRetorno(this, this.restEmpresaDeleteCb);
    this.clienteRest01.empresaDelete(idEmpresa);
  }

  public volverClick() {
    this.empresaConfigParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public empresaEditNuevoClick(){
    this.empresaEditParams = new EmpresaEditParams();
    this.empresaEditParams.parametrosEntrada.nuevo = true;
    this.datosApp.pilaParams.push(this.empresaEditParams);
}

async empresaClick(item) {
  const actionSheet = await this.datosApp.actionSheetController.create({
    header: item[this.clienteRest01.tablaEmpresa.nombre],
    buttons: [{
      text: this.textosIdioma.editar,
      icon: 'create',
      handler: () => {
        this.empresaEditParams = new EmpresaEditParams();
        this.empresaEditParams.parametrosEntrada.nuevo = false;
        this.empresaEditParams.parametrosEntrada.idEmpresa = item[this.clienteRest01.tablaEmpresa.idEmpresa];
        this.datosApp.pilaParams.push(this.empresaEditParams);
      }
    }, {
      text: this.textosIdioma.borrar,
      icon: 'trash',
      handler: () => {
        this.confirmarDelete(item);
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

async confirmarDelete(item) {
  const alert = await this.datosApp.alertController.create({
    header: this.textosIdioma.confirmeBorrado,
    message: item[this.clienteRest01.tablaEmpresa.nombre],
    buttons: [
      {
        text: this.textosIdioma.cancelar,
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }, {
        text: this.textosIdioma.aceptar,
        handler: () => {
          this.restEmpresaDelete(item[this.clienteRest01.tablaEmpresa.idEmpresa]);
        }
      }
    ]
  });

  await alert.present();
}

}
