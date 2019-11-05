import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { PrincipalIdioma, PrincipalIdiomaEn, PrincipalIdiomaGl, PrincipalIdiomaEs } from './principal.idioma';
import { PrincipalParams } from './principal.params';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  private principalParams: PrincipalParams;
  public textosIdioma: PrincipalIdioma;
  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.principalParams = datosApp.pilaParams.getTop() as PrincipalParams;

  }

  ngOnInit() {
  }

 
  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new PrincipalIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new PrincipalIdiomaGl();
                      break;
      default: this.textosIdioma = new PrincipalIdiomaEs();
    }
  }

  public volverClick() {
    this.principalParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }


}
