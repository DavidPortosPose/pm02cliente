import { DatosAppService, Idioma, Rol } from './../../datos/datos-app.service';
import { EmpresaGestionParams } from './empresa-getion.params';
import { EmpresaGestionIdioma, EmpresaGestionIdiomaEn, EmpresaGestionIdiomaGl, EmpresaGestionIdiomaEs } from './empresa-gestion.idioma';
import { Component, OnInit } from '@angular/core';
import { UsuarioEmpresaParams } from '../usuario-empresa/usuario-empresa.params';

@Component({
  selector: 'app-empresa-gestion',
  templateUrl: './empresa-gestion.page.html',
  styleUrls: ['./empresa-gestion.page.scss'],
})
export class EmpresaGestionPage implements OnInit {
  public textosIdioma: EmpresaGestionIdioma;
  private empresaGestionParams: EmpresaGestionParams;
  public verAdministradores: boolean;
  public verTrabajadores: boolean;
  public verAvanzadas: boolean;
  private usuarioEmpresaParams: UsuarioEmpresaParams;


  constructor(private datosApp: DatosAppService) { 
    this.setIdioma();
    this.empresaGestionParams = datosApp.pilaParams.getTop() as EmpresaGestionParams;
    this.verAvanzadas = (this.datosApp.rol ===  Rol.ROL_SUPER_ADMIN) || (this.datosApp.rol === Rol.ROL_ADMIN);
    this.usuarioEmpresaParams = null;
  }

  ngOnInit() {
  }
  private ionViewDidEnter() {
    if ((this.usuarioEmpresaParams !== null) &&
    ((this.usuarioEmpresaParams.parametrosSalida.ok) ||
    (this.usuarioEmpresaParams.parametrosSalida.cancelar))) {
      /* Realizar acciones*/
     this.usuarioEmpresaParams = null;
    }

    }
  private setIdioma() {
    switch (this.datosApp.idioma) {
      case Idioma.EN: this.textosIdioma = new EmpresaGestionIdiomaEn();
                      break;
      case Idioma.GL: this.textosIdioma = new EmpresaGestionIdiomaGl();
                      break;
      default: this.textosIdioma = new EmpresaGestionIdiomaEs();
    }
  }

  public volverClick() {
    this.empresaGestionParams.parametrosSalida.cancelar = true;
    this.datosApp.pilaParams.pop();
  }

  public usuariosClick() {
    this.usuarioEmpresaParams = new UsuarioEmpresaParams();
    this.usuarioEmpresaParams.parametrosEntrada.idEmpresa = this.empresaGestionParams.parametrosEntrada.idEmpresa;
    this.datosApp.pilaParams.push(this.usuarioEmpresaParams);
  }


}
