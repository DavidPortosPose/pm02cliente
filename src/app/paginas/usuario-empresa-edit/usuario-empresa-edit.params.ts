import { Params } from './../../lib/clases/params';
export class UsuarioEmpresaEditParams extends Params{

    public parametrosEntrada = {
        nuevo: true,
        idEmpresa: '',
        idUsuarioEmpresa: '',
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/usuario-empresa-edit');
    }
}
