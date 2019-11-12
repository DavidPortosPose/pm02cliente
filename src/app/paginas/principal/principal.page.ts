import { EmpresaConfigParams } from './../empresa-config/empresa-config.params';
import { PrincipalParams } from './principal.params';
import { PrincipalIdioma, PrincipalIdiomaEn, PrincipalIdiomaGl, PrincipalIdiomaEs } from './principal.idioma';
import { DatosAppService, Idioma } from './../../datos/datos-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public textosIdioma: PrincipalIdioma;
  private principalParams: PrincipalParams;
  private empresaConfigParams: EmpresaConfigParams;

  
  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.principalParams = datosApp.pilaParams.getTop() as PrincipalParams;
    this.empresaConfigParams = null;
  }

  ngOnInit() {
  }


  private ionViewDidEnter() {
    if ((this.empresaConfigParams !== null) &&
    ((this.empresaConfigParams.parametrosSalida.ok) ||
    (this.empresaConfigParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/

      this.empresaConfigParams = null;
    }

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

  public empresaConfigClick(){
      this.empresaConfigParams = new EmpresaConfigParams();
      this.datosApp.pilaParams.push(this.empresaConfigParams);
  }

}
