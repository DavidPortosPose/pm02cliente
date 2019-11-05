
import { Params } from './../../lib/clases/params';
export class RegistroParams extends Params {
    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false

    };

    constructor() {
        super('/registro');
    }
}

