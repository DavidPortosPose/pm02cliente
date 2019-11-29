import { Params } from './../../lib/clases/params';
export class UsuarioEmpresaParams extends Params {

    public parametrosEntrada = {

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/usuario-empresa');
    }
}
