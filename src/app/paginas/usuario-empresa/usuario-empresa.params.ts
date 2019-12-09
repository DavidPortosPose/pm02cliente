import { Params } from './../../lib/clases/params';
export class UsuarioEmpresaParams extends Params{

    public parametrosEntrada = {
        idEmpresa: '',
        seleccionar: false

    };

    public parametrosSalida = {
        ok: false,
        cancelar: false,
        idUsuarioEmpresa: ''
    };

    constructor() {
        super('/usuario-empresa');
    }
}
