import { Http, DatosEnviar } from './http';
import { Mensaje } from './mensaje';

export class ClienteRest {
    public OK_CORREO_ENVIADO = 'OK_CORREO_ENVIADO';
    private ERROR_NO_CONEXION_SERVIDOR = 'ERROR_NO_CONEXION_SERVIDOR';
    private ERROR_NO_CONEXION_BD = 'ERROR_NO_CONEXION_BD';
    private ERROR_NO_TRANSACCION_BD = 'ERROR_NO_TRANSACCION_BD';
    private ERROR_SQL = 'ERROR_SQL';
    private ERROR_NO_COMMIT_BD = 'ERROR_NO_COMMIT_BD';
    private ERROR_OPERACION_NO_PERMITIDA = 'ERROR_OPERACION_NO_PERMITIDA';
    private ERROR_NUMERIC_OVERFLOW_STRING_TRUNCATION = 'ERROR_NUMERIC_OVERFLOW_STRING_TRUNCATION';


    private http: Http;
    private mensaje: Mensaje;

    private cb: (paginaRetorno: object) => void;
    private paginaRetorno: object;
    public rows: any [];
    public error: boolean;
    public tipoError: string;
    public ack: string;

    constructor(http: Http, mensaje: Mensaje) {
        this.http = http;
        this.mensaje = mensaje;
    }

    private mostrarErrorInterno() {
        if ((this.tipoError.length >= 5) && (this.tipoError.substr(0, 5) === 'ERROR')) {
            this.mensaje.mostrarMensajeError(this.tipoError);
        }
    }

    public setRetorno(paginaRetorno: object, metodoRetorno: (paginaRetorno: object) => void) {
        this.paginaRetorno = paginaRetorno;
        this.cb = metodoRetorno;
    }

    private resultadoCb(result: any) {
        this.error = result.error;
        this.tipoError = result.tipoError;
        this.rows = result.rows;
        this.ack = result.ack;
        if (this.error) { this.mostrarErrorInterno(); }
        if (this.cb !== undefined) { this.cb( this.paginaRetorno); }
    }

    private resultadoOkCb(result: any) {
        this.resultadoCb(result);
    }
    private resultadoErrorCb(result: any): any {
        result.error = true;
        result.tipoError = this.ERROR_NO_CONEXION_SERVIDOR;
        result.rows = [];
        result.ack = '';
        this.resultadoCb(result);
    }



    public peticionRest(datos: DatosEnviar) {
            this.http.post(datos)
            .then(
                (result) => {
                  this.resultadoOkCb(result);
               },
               (err) => {
                   this.resultadoErrorCb(err);
               }
            );
    }
}
