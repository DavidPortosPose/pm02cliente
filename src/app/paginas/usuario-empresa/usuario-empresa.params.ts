import { Params } from './../../lib/clases/params';
export class UsuarioEmpresaParams extends Params {

    public parametrosEntrada = {
        idEmpresa: ''

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/usuario-empresa');
    }
}
