import { Params } from './../../lib/clases/params';
export class EmpresaEditParams extends Params{

    public parametrosEntrada = {
        nuevo: true
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/empresa-edit');
    }
}
