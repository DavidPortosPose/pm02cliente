import { Component, OnInit } from '@angular/core';
import { AdministradorParams } from './administrador.params';
import { AdministradorIdioma, AdministradorIdiomaEn, AdministradorIdiomaGl, AdministradorIdiomaEs } from './administrador.idioma';
import { DatosAppService, Idioma } from 'src/app/datos/datos-app.service';
import { ClienteRest01 } from 'src/app/datos/cliente-rest01';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  public textosIdioma: AdministradorIdioma;
  private administradorParams: AdministradorParams;

  public items = [];
  private clienteRest01: ClienteRest01;
  public activo = true;

  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.administradorParams = datosApp.pilaParams.getTop() as AdministradorParams;
    
    
    this.clienteRest01 = new ClienteRest01(datosApp);
    
  }


  ngOnInit() {
  }



  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new AdministradorIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new AdministradorIdiomaGl();
                      break;
      default: this.textosIdioma = new AdministradorIdiomaEs();
    }
  }

  public volverClick() {
    this.administradorParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

}
