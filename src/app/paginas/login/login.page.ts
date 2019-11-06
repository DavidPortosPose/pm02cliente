import { PrincipalParams } from './../principal/principal.params';
import { ClienteRest01 } from '../../datos/cliente-rest01';
import { ClienteRest } from './../../lib/clases/cliente-rest';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { LoginParams } from './login.params';
import { Component, OnInit } from '@angular/core';
import { LoginIdioma, LoginIdiomaEn, LoginIdiomaGl, LoginIdiomaEs } from './login.idioma';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private loginParams: LoginParams;
  private textosIdioma: LoginIdioma;
  public form = {
    mail: '',
    clave: ''
  };
  private clienteRest01: ClienteRest01;
  private principalParams: PrincipalParams;
  constructor(private datosApp: DatosAppService) { 
    this.loginParams = datosApp.pilaParams.getTop() as LoginParams;
    this.setIdioma();
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.principalParams = null;
    if (datosApp.modoDesarrollo) {
      this.form.mail = 'david.ppose@gmail.com';
      this.form.clave = '12345.As';
    }
  }

  ngOnInit() {
  }
  
  private ionViewDidEnter() {
    if ((this.principalParams !== null) &&
    ((this.principalParams.parametrosSalida.ok) ||
    (this.principalParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/

      this.loginParams = null;
    }

   

  }
  private restUsuarioLoginCb2() {
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
      
    } else {
      // tslint:disable-next-line: max-line-length
      this.datosApp.abrirSesion(this.clienteRest01.rows[0][this.clienteRest01.tablaSesion.idsesion]); // llama a la variable. Fácil mantenimiento futuro por si se cambia el contenido de la variable.
      this.datosApp.abrirSesion(this.clienteRest01.rows[0].ID_SESION);
      this.principalParams = new PrincipalParams();
      this.datosApp.pilaParams.push(this.principalParams);
    }
  }
  private restUsuarioLoginCb(miPagina: object) {
    const estaPagina: LoginPage = miPagina as LoginPage;
    estaPagina.restUsuarioLoginCb2();
  }
  private restUsuarioLogin() {
    this.clienteRest01.setRetorno(this, this.restUsuarioLoginCb);
  
    this.clienteRest01.usuarioLogin(this.form.mail, this.form.clave);
  }

  private comprobarForm(): boolean {
    let resultado = true;
   
    if ((this.form.mail === '') || 
      !this.datosApp.util.emailValido(this.form.mail)) {
     resultado = false;
     this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorMail);
   } else if (this.form.clave === '') {
     resultado = false;
     this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorClave);
   } 
   
   
   
    return resultado;
 }
 
 
   



  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new LoginIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new LoginIdiomaGl();
                      break;
      default: this.textosIdioma = new LoginIdiomaEs();
    }
  }

  public iniciarClick() {
    if (this.comprobarForm()) {
      this.restUsuarioLogin();
      
    }

  }
  public volverClick() {
    this.loginParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }



}
