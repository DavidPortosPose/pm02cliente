import { Params } from './../../lib/clases/params';
export class AdministradorParams extends Params{

    public parametrosEntrada = {
        idEmpresa: ''
        
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/administrador');
    }
}
