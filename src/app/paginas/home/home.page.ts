import { LoginParams } from './../login/login.params';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { HomeIdioma, HomeIdiomaEn, HomeIdiomaGl, HomeIdiomaEs } from './home.idioma';
import { Component } from '@angular/core';
import { RegistroParams } from '../registro/registro.params';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textosIdioma: HomeIdioma;
  loginParams: LoginParams;
  registroParams: RegistroParams;

  constructor(private datosApp: DatosAppService) {
    this.setIdioma();
    this.loginParams = null;
    this.registroParams = null;
  }

  private ionViewDidEnter() {
    if ((this.loginParams !== null) &&
    ((this.loginParams.parametrosSalida.ok) ||
    (this.loginParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/

      this.loginParams = null;
    }

    if ((this.registroParams !== null) &&
    ((this.registroParams.parametrosSalida.ok) ||
    (this.registroParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/

      this.registroParams = null;
    }

  }

  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new HomeIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new HomeIdiomaGl();
                      break;
      default: this.textosIdioma = new HomeIdiomaEs();
    }
  }

  async botonIdiomaClick() {
    const actionSheet = await this.datosApp.actionSheetController.create({
      header: this.textosIdioma.seleccioneIdioma,
      buttons: [{
        text: 'Español',
        icon: 'flag',
        handler: () => {
            this.datosApp.idioma = Idioma.ES;
            this.setIdioma();
        }
      }, {
        text: 'Galego',
        icon: 'flag',
        handler: () => {
          this.datosApp.idioma = Idioma.GL;
          this.setIdioma();
        }
      }, {
        text: 'English',
        icon: 'flag',
        handler: () => {
          this.datosApp.idioma = Idioma.EN;
          this.setIdioma();
        }
      }]
    });
    await actionSheet.present();
  }

  public loginClick() {
      this.loginParams = new LoginParams();
      this.datosApp.pilaParams.push(this.loginParams);
  }

  public registroClick() {
    this.registroParams = new RegistroParams();
    this.datosApp.pilaParams.push(this.registroParams);
  }

}
