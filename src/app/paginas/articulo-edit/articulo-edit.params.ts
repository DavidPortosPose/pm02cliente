import { Params } from './../../lib/clases/params';
export class ArticuloEditParams extends Params{

    public parametrosEntrada = {
        idArticulo: '',
        idEmpresa: ''
    };

    public parametrosSalida = {
        ok: false,
        cancelar: false
    };

    constructor() {
        super('/articulo-edit');
    }
}
