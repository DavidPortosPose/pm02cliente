import { Params } from './../../lib/clases/params';
export class HomeParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/home');
    }
}
