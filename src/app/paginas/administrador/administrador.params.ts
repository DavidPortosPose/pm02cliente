import { Params } from 'src/app/lib/clases/params';

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
