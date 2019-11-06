import { ClienteRest01Idioma, ClienteRest01IdiomaEn, ClienteRest01IdiomaGl, ClienteRest01IdiomaEs } from './cliente-rest01.idioma';
import { DatosAppService, Idioma } from './datos-app.service';
import { DatosEnviar } from '../lib/clases/http';
import { ClienteRest } from '../lib/clases/cliente-rest';
export class ClienteRest01 extends ClienteRest {
   
    public tablaUsuario = { // DEFINICION DE DATOS CONEXION A BASE DE DATOS. NO LA CONECTA.
        idUsuario: 'ID_USUARIO',
        nombre: 'NOMBRE',
        apellidos: 'APELLIDOS',
        mail: 'MAIL',
        clave: 'CLAVE',
        activo: 'ACTIVO'
    };
    public tablaSesion = { // DEFINICION DE DATOS CONEXION A BASE DE DATOS. NO LA CONECTA.
        idsesion: 'ID_SESION',
        idUsuario: 'ID_USUARIO',
        fechaInicio: 'FECHA_INICIO',
        fechaAcceso: 'FECHA_ACCESO',
        fechaFin: 'FECHA_FIN',
        ip: 'IP'
    };
    private textosIdioma: ClienteRest01Idioma;
    constructor(private datosApp: DatosAppService) {
        super(datosApp.http, datosApp.mensaje);
        this.setIdioma();
    }

    public mostrarMensajeError() {
        switch (this.tipoError) {
            case 'EX_USUARIO_MAIL_EXISTE':
                this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_USUARIO_MAIL_EXISTE);
                break;
            case 'EX_USUARIO_LOGIN_ERROR':
                    this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_USUARIO_LOGIN_ERROR);
                    break;
        }
    }

    private setIdioma() {
        switch (this.datosApp.idioma) {
          case Idioma.EN: this.textosIdioma = new ClienteRest01IdiomaEn();
                          break;
          case Idioma.GL: this.textosIdioma = new ClienteRest01IdiomaGl();
                          break;
          default: this.textosIdioma = new ClienteRest01IdiomaEs();
        }
      }


    public usuarioInsert(nombre: string, apellidos: string,
                         mail: string, clave: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_I',
            params: {
                ['idusuario_generarId'] : '',
                ['nombre'] : nombre,
                ['apellidos'] : apellidos,
                ['mail'] : mail,
                ['clave_generarMd5'] : clave
            }
        };
        this.peticionRest(datosEnviar);
    }


    public usuarioLogin(mail: string, clave: string) {
        const datosEnviar: DatosEnviar = {
        operacion: 'PUB_USUARIO_S_LOGIN',
        params: {
        ['idSesion_generarId'] : '',
        ['ip_obtenerIp'] : '',
        ['mail'] : mail,
        ['clave_generarMd5'] : clave
        }
        };
        this.peticionRest(datosEnviar);
}




}
