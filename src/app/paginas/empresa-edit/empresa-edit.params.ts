import { Params } from './../../lib/clases/params';
export class EmpresaEditParams extends Params {

    public parametrosEntrada = {
        nuevo: true,
        idEmpresa: ''
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/empresa-edit');
    }
}
