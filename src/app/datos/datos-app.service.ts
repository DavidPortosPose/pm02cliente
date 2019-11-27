import { HttpClient } from '@angular/common/http';
import { Http } from './../lib/clases/http';
import { Mensaje } from './../lib/clases/mensaje';
import { Util } from './../lib/clases/util';
import { PilaParams } from './../lib/clases/pila-params';
import { NavController, ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HomeParams } from '../paginas/home/home.params';


export enum Idioma {
  ES = 'ES',
  GL = 'GL',
  EN = 'EN'
}

export enum Rol {
  ROL_SUPER_ADMIN = 'ROL_SUPER_ADMIN',
  ROL_ADMIN = 'ROL_ADMIN',
  ROL_TRABAJADOR = 'ROL_ADMIN',
  ROL_NO_ROL = 'ROL_NO_ROL'
}


@Injectable({
  providedIn: 'root'
})
export class DatosAppService {
  public version: string;
  public idioma: Idioma;
  public pilaParams: PilaParams;
  public util: Util;
  public mensaje: Mensaje;
  public http: Http;
  private urlRestService = 'http://127.0.0.1:8081';
  private rutaRestService = '/dual2/peticion2';
  public idSesion: string;
  public rol: Rol;
  public tamanoAtributos = {
    nombreUsuario : 50,
    apellidos: 70,
    mail: 50,
    clave: 15
  }
  public modoDesarrollo = true;

  constructor(public navCtrl: NavController,
              public actionSheetController: ActionSheetController,
              public toastController: ToastController,
              public httpc: HttpClient,
              public alertController: AlertController) {
    this.version = '1.0';
    this.idioma = Idioma.ES;
    this.idSesion = '';
    this.rol = Rol.ROL_NO_ROL;
    this.pilaParams = new PilaParams(navCtrl);
    this.pilaParams.push(new HomeParams());
    this.util = new Util();
    this.mensaje = new Mensaje(this.toastController);
    this.http = new Http(httpc, this.urlRestService, this.rutaRestService);
   }
public abrirSesion(idSesion: string) {
  this.idSesion = idSesion;
}
public cerrarSesion() {
  this.idSesion = '';
  this.rol = Rol.ROL_NO_ROL;
}


}
