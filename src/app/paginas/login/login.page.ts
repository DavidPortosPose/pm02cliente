import { PrincipalParams } from './../principal/principal.params';
import { ClienteRest01 } from '../../datos/cliente-rest01';
import { DatosAppService, Idioma, Rol } from './../../datos/datos-app.service';
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
  public textosIdioma: LoginIdioma;
  public form = {
    mail : '',
    clave: ''
  }
  private clienteRest01: ClienteRest01;
  private principalParams: PrincipalParams;
  constructor(private datosApp: DatosAppService) { 
    this.loginParams = datosApp.pilaParams.getTop() as LoginParams;
    this.setIdioma();
    this.clienteRest01 = new ClienteRest01(datosApp);
    this.principalParams = null;
    if (datosApp.modoDesarrollo){
      this.form.mail = 'alfonsopereira@gmail.com';
      this.form.clave = 'Abc123..';
    }
  }

  ngOnInit() {
  }
  private ionViewDidEnter() {
    if ((this.principalParams !== null) &&
    ((this.principalParams.parametrosSalida.ok) ||
    (this.principalParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/

      this.principalParams = null;
    }

  }

  private restUsuarioLoginCb2(){
    if (this.clienteRest01.error) {
      this.clienteRest01.mostrarMensajeError();
    } else {
      const superAdmin = this.clienteRest01.rows[0].SUPER_ADMIN[this.clienteRest01.tablaUsuario.superAdmin];
      if (this.datosApp.util.stringToBoolean(superAdmin)) {
        this.datosApp.rol = Rol.ROL_SUPER_ADMIN;
      }
      this.datosApp.abrirSesion(this.clienteRest01.rows[0][this.clienteRest01.tablaSesion.idSesion]);
      this.principalParams = new PrincipalParams();
      this.datosApp.pilaParams.push(this.principalParams);
    }
  }
  private restUsuarioLoginCb(miPagina: object){
    const estaPagina: LoginPage = miPagina as LoginPage;
    estaPagina.restUsuarioLoginCb2();
  }
  private restUsuarioLogin(){
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
