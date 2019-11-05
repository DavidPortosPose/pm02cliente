import { Params } from './../../lib/clases/params';
export class PrincipalParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/principal');
    }
}
