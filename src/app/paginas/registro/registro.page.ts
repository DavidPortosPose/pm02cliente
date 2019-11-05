import { ClienteRest01 } from '../../datos/cliente-rest01';
import { RegistroIdioma, RegistroIdiomaEn, RegistroIdiomaGl, RegistroIdiomaEs } from './registro.idioma';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { Component, OnInit } from '@angular/core';
import { RegistroParams } from './registro.params';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public textosIdioma: RegistroIdioma;
  private registroParams: RegistroParams;
  private clienteRest01: ClienteRest01;
  public form = {
    nombre: '',
    apellidos: '',
    mail: '',
    clave: '',
    clave2: ''
  };

  constructor(private datosApp: DatosAppService) {
    this.registroParams = datosApp.pilaParams.getTop() as RegistroParams;
    this.setIdioma();
    this.clienteRest01 = new ClienteRest01(datosApp);
  }

  ngOnInit() {
  }



  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new RegistroIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new RegistroIdiomaGl();
                      break;
      default: this.textosIdioma = new RegistroIdiomaEs();
    }

}

private comprobarForm(): boolean {
 let resultado = true;

 if (this.form.nombre === ''){
   resultado = false;
   this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorNombre);
 } else if (this.form.apellidos === ''){
  resultado = false;
  this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorApellidos);
} else if ((this.form.mail === '') || 
   !this.datosApp.util.emailValido(this.form.mail)) {
  resultado = false;
  this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorMail);
} else if ((this.form.clave === '') ||
           (this.form.clave !== this.form.clave2)||
           ! this.datosApp.util.claveValida(this.form.clave)) {
  resultado = false;
  this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.errorClave);
}


 return resultado;
}

private restUsuarioAnadirCb2(){
  if (this.clienteRest01.error){
   this.clienteRest01.mostrarMensajeError();
  } else {
    this.datosApp.mensaje.mostrarMensajeOk(this.textosIdioma.datosGuardados);
    this.registroParams.parametrosSalida.ok = true;
    this.datosApp.pilaParams.pop();
  }
}
private restUsuarioAnadirCb(miPagina: object){
  const estaPagina: RegistroPage = miPagina as RegistroPage;
  estaPagina.restUsuarioAnadirCb2();
}
private restUsuarioAnadir(){
  this.clienteRest01.setRetorno(this, this.restUsuarioAnadirCb);

  this.clienteRest01.usuarioInsert(this.form.nombre,
    this.form.apellidos, this.form.mail, this.form.clave);
}

public volverClick() {
  this.registroParams.parametrosSalida.cancelar = true;
  this.datosApp.pilaParams.pop();
}
public guardarClick(){
  if (this.comprobarForm()){
      this.restUsuarioAnadir();
  }
}

}
