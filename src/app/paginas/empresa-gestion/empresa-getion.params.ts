import { Params } from './../../lib/clases/params';
export class EmpresaGestionParams extends Params{

    public parametrosEntrada = {
        idEmpresa: '',
        rol: null
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/empresa-gestion');
    }
}
