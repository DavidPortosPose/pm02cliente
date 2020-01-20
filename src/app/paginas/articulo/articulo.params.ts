import { Params } from './../../lib/clases/params';
export class ArticuloParams extends Params{

    public parametrosEntrada = {
        idEmpresa: ''
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false,
    };

    constructor() {
        super('/articulo');
    }
}
