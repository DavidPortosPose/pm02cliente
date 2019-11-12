import { Params } from './../../lib/clases/params';
export class EmpresaConfigParams extends Params{

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/empresa-config');
    }
}
