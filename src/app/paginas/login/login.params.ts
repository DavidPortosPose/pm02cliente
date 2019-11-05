import { Params } from './../../lib/clases/params';
export class LoginParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/login');
    }
}
