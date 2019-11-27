import { ClienteRest01Idioma, ClienteRest01IdiomaEn, ClienteRest01IdiomaGl, ClienteRest01IdiomaEs } from './cliente-rest01.idioma';
import { DatosAppService, Idioma } from './datos-app.service';
import { DatosEnviar } from '../lib/clases/http';
import { ClienteRest } from '../lib/clases/cliente-rest';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class ClienteRest01 extends ClienteRest {
public tablaUsuario = {
    idUsuario : 'ID_USUARIO',
    nombre : 'NOMBRE',
    apellidos: 'APELLIDOS',
    mail : 'MAIL',
    clave: 'CLAVE',
    activo: 'ACTIVO',
    superAdmin: 'SUPER_ADMIN'
};

public tablaSesion = {
    idSesion : 'ID_SESION',
    idUsuario : 'ID_USUARIO',
    fechaInicio: 'FECHA_INICIO',
    fechaAcceso: 'FECHA_ACCESO',
    fechaFin: 'FECHA_FIN',
    ip: 'IP'
};

public tablaEmpresa = {
    idEmpresa: 'ID_EMPRESA',
    nombre: 'NOMBRE',
    activo: 'ACTIVO'
}





private textosIdioma: ClienteRest01Idioma;


    constructor(private datosApp: DatosAppService){
        super(datosApp.http, datosApp.mensaje);
        this.setIdioma();
    }

public mostrarMensajeError(){
    switch (this.tipoError) {
        case 'EX_USUARIO_MAIL_EXISTE':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_USUARIO_MAIL_EXISTE)
            break;
        case 'EX_USUARIO_LOGIN_ERROR':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_USUARIO_LOGIN_ERROR)
            break;
        case 'EX_SUPER_ADMIN_ERROR':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_SUPER_ADMIN_ERROR)
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

    public usuarioLogin(mail: string, clave: string){
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

    public empresaSelect(activo: boolean){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_EMPRESA_S',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }

    public empresaSelectId(idEmpresa: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_EMPRESA_S_ID',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa'] : idEmpresa
            }
        };
        this.peticionRest(datosEnviar);
    }

    public empresaInsert(nombre: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_EMPRESA_I',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa_generarId'] : '',
                ['nombre'] : nombre,
            }
        };
        this.peticionRest(datosEnviar);
    }

    public empresaDelete(idEmpresa: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_EMPRESA_D',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa'] : idEmpresa,
            }
        };
        this.peticionRest(datosEnviar);
    }

    public empresaUpdateNombre(idEmpresa: string, nombre: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_EMPRESA_U_NOMBRE',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa'] : idEmpresa,
                ['nombre'] : nombre,
            }
        };
        this.peticionRest(datosEnviar);
    }

    public empresaUpdateActivo(idEmpresa: string, activo: boolean){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_EMPRESA_U_ACTIVO',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa'] : idEmpresa,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }


}
