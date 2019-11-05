import { HttpClient } from '@angular/common/http';
import { Http } from './../lib/clases/http';
import { Mensaje } from './../lib/clases/mensaje';
import { Util } from './../lib/clases/util';
import { PilaParams } from './../lib/clases/pila-params';
import { NavController, ActionSheetController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HomeParams } from '../paginas/home/home.params';


export enum Idioma {
  ES = 'ES',
  GL = 'GL',
  EN = 'EN'
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
  private IdSesion: string;
  public tamanoAtributos = {
    nombreUsuario : 50,
    apellidos: 70,
    mail: 50,
    clave: 15
  }

  constructor(public navCtrl: NavController,
              public actionSheetController: ActionSheetController,
              public toastController: ToastController,
              public httpc: HttpClient) {
    this.version = '1.0';
    this.idioma = Idioma.ES;
    this.IdSesion = '';
    this.pilaParams = new PilaParams(navCtrl);
    this.pilaParams.push(new HomeParams());
    this.util = new Util();
    this.mensaje = new Mensaje(this.toastController);
    this.http = new Http(httpc, this.urlRestService, this.rutaRestService);
   }
public abrirSesion(idSesion: string) {
  this.IdSesion = idSesion;
}
public cerrarSesion() {
  this.IdSesion = '';
}


}
