import { ClienteRest01Idioma, ClienteRest01IdiomaEn, ClienteRest01IdiomaGl, ClienteRest01IdiomaEs } from './cliente-rest01.idioma';
import { DatosAppService, Idioma } from './datos-app.service';
import { DatosEnviar } from '../lib/clases/http';
import { ClienteRest } from '../lib/clases/cliente-rest';

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
};
public tablaUsuarioEmpresa = {
    idUsuarioEmpresa: 'ID_USUARIO_EMPRESA',
    idEmpresa: 'ID_EMPRESA',
    idUsuario: 'ID_USUARIO',
    nombre: 'NOMBRE',
    apellidos: 'APELLIDOS',
    nif: 'NIF',
    activo: 'ACTIVO',
    dir: 'DIR'
};
public tablaAdministrador = {
    idAdministrador: 'ID_ADMINISTRADOR',
    idUsuarioEmpresa: 'ID_USUARIO_EMPRESA',
    nombre: 'NOMBRE',
    apellidos: 'APELLIDOS',
    nif: 'NIF',
    dir: 'DIR',
    activo: 'ACTIVO'
};

public tablaArticulo = {
    idArticulo: 'ID_ARTICULO',
    idEmpresa: 'ID_EMPRESA',
    nombre: 'NOMBRE',
    precio: 'PRECIO',
    iva: 'IVA',
    activo: 'ACTIVO'
};








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
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_USUARIO_LOGIN_ERROR);
            break;
        case 'EX_SUPER_ADMIN_ERROR':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_SUPER_ADMIN_ERROR);
            break;
        case 'EX_USUARIO_MAIL_EXISTE':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_USUARIO_MAIL_EXISTE);
            break;
        case 'EX_ADMINISTRADOR_ERROR':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_ADMINISTRADOR_ERROR);
            break;
        case 'EX_TRABAJADOR_ERROR':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_TRABAJADOR_ERROR);
            break;
        case 'EX_ROL_ERROR':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_ROL_ERROR);
            break;
        case 'EX_ARTICULO_NUM_MAXIMO':
            this.datosApp.mensaje.mostrarMensajeError(this.textosIdioma.EX_ARTICULO_NUM_MAXIMO);
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

   

    public usuarioEmpresaSelect(idEmpresa: string, patron: string,
                                activo: boolean){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_EMPRESA_S',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa'] : idEmpresa,
                ['rol'] : this.datosApp.rol,
                ['patron'] : patron,
                ['activo'] : this.datosApp.util.booleanToString(activo)
            }
        };
        this.peticionRest(datosEnviar);
    }

    public usuarioEmpresaSelectId(idUsuarioEmpresa: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_EMPRESA_S_ID',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['rol'] : this.datosApp.rol,
                ['idUsuarioEmpresa'] : idUsuarioEmpresa,
            }
        };
        this.peticionRest(datosEnviar);
    }

    public usuarioEmpresaInsert(idEmpresa: string,
                                mail: string, nombre: string, apellidos: string,
                                nif: string, dir: string ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_EMPRESA_I',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['rol'] : this.datosApp.rol,
                ['idUsuarioEmpresa_generarId'] : '',
                ['idEmpresa'] : idEmpresa,
                ['mail'] : mail,
                ['nombre'] : nombre,
                ['apellidos'] : apellidos,
                ['nif'] : nif,
                ['dir'] : dir

            }
        };
        this.peticionRest(datosEnviar);
    }

    public usuarioEmpresaUpdate(idUsuarioEmpresa: string, nombre: string, apellidos: string,
                                nif: string, dir: string ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_EMPRESA_U',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['rol'] : this.datosApp.rol,
                ['idUsuarioEmpresa'] : idUsuarioEmpresa,
                ['nombre'] : nombre,
                ['apellidos'] : apellidos,
                ['nif'] : nif,
                ['dir'] : dir
            }
        };
        this.peticionRest(datosEnviar);
    }

    public usuarioEmpresaUpdateActivo(idUsuarioEmpresa: string, activo: boolean ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_EMPRESA_U_ACTIVO',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['rol'] : this.datosApp.rol,
                ['idUsuarioEmpresa'] : idUsuarioEmpresa,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }

    public usuarioEmpresaDelete(idUsuarioEmpresa: string ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_USUARIO_EMPRESA_D',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['rol'] : this.datosApp.rol,
                ['idUsuarioEmpresa'] : idUsuarioEmpresa
            }
        };
        this.peticionRest(datosEnviar);
    }

    public administradorSelect(idEmpresa: string, activo: boolean){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ADMINISTRADOR_S',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idEmpresa'] : idEmpresa,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }

    public administradorInsert(idUsuarioEmpresa: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ADMINISTRADOR_I',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idAdministrador_generarId'] : '',
                ['idUsuarioEmpresa'] : idUsuarioEmpresa
            }
        };
        this.peticionRest(datosEnviar);
    }

    public administradorUpdateActivo(idAdministrador: string, activo: boolean ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ADMINISTRADOR_U_ACTIVO',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idAdministrador'] : idAdministrador,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }

    public administradorDelete(idAdministrador: string ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ADMINISTRADOR_D',
            params: {
                ['idSesion'] : this.datosApp.idSesion,
                ['idAdministrador'] : idAdministrador
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloSelect(idEmpresa: string, activo: boolean){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_S',
            params: {
                ['idEmpresa'] : idEmpresa,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloSelectId(idEmpresa: string, idArticulo: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_S_ID',
            params: {
                ['idEmpresa'] : idEmpresa,
                ['idArticulo'] : idArticulo
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloSelectContar(idEmpresa: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_S_CONTAR',
            params: {
                ['idEmpresa'] : idEmpresa,
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloInsert(idEmpresa: string){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_I',
            params: {
                ['idEmpresa'] : idEmpresa,
                ['idArticulo_generarId'] : ''
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloUpdate(idArticulo: string, nombre: string, precio: number,
                          iva: number) {
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_U',
            params: {
                ['idArticulo'] : idArticulo,
                ['nombre'] : nombre,
                ['precio'] : precio,
                ['iva'] : iva,
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloUpdateActivo(idArticulo: string, activo: boolean ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_U_ACTIVO',
            params: {
                ['idArticulo'] : idArticulo,
                ['activo'] : this.datosApp.util.booleanToString(activo),
            }
        };
        this.peticionRest(datosEnviar);
    }

    public articuloDelete(idArticulo: string ){
        const datosEnviar: DatosEnviar = {
            operacion: 'PUB_ARTICULO_D',
            params: {
                ['idArticulo'] : idArticulo
            }
        };
        this.peticionRest(datosEnviar);
    }



}
