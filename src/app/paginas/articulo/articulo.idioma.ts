export class ArticuloIdioma {
    public titulo: string;
    public editar: string;
    public borrar: string;
    public cancelar: string;
    public aceptar: string;
    public confirmeBorrado: string;
    public confirmeActivar: string;
    public activar: string;
    public desactivar: string;
    public noActivos: string;
    public operacionOk: string;


}

export class ArticuloIdiomaEs extends ArticuloIdioma {
    constructor() {
        super();
        this.titulo = 'Artículos';
        this.editar = 'Editar';
        this.borrar = 'Borrar';
        this.cancelar = 'Cancelar';
        this.aceptar = 'Aceptar';
        this.confirmeBorrado = 'Confirmar borrado';
        this.confirmeActivar = 'Confirmar activar/desactivar';
        this.activar = 'Activar';
        this.desactivar = 'Desactivar';
        this.noActivos = 'No activos';
        this.operacionOk = ' Operación realizada correctamente';
    }
}

export class ArticuloIdiomaGl extends ArticuloIdioma {
    constructor() {
        super();
        this.titulo = 'Artigos';
        this.editar = 'Editar';
        this.borrar = 'Borrar';
        this.cancelar = 'Cancelar';
        this.aceptar = 'Aceptar';
        this.confirmeBorrado = 'Confirmar borrado';
        this.confirmeActivar = 'Confirmar activar/desactivar';
        this.activar = 'Activar';
        this.desactivar = 'Desactivar';
        this.noActivos = 'Non activos';
        this.operacionOk = ' Operación realizada correctamente';

    }
}

export class ArticuloIdiomaEn extends ArticuloIdioma {
    constructor() {
        super();
        this.titulo = 'Items';
        this.editar = 'Edit';
        this.borrar = 'Delete';
        this.cancelar = 'Cancel';
        this.aceptar = 'Accept';
        this.confirmeBorrado = 'Confirm delete';
        this.confirmeActivar = 'Confirm enable/disable';
        this.activar = 'Enable';
        this.desactivar = 'Disable';
        this.noActivos = 'No actives';
        this.operacionOk = 'Operation realized correctly';
    }
}