export class EmpresaConfigIdioma {
    public titulo: string;
    public editar: string;
    public borrar: string;
    public cancelar: string;
    public aceptar: string;
    public confirmeBorrado: string;
}

export class EmpresaConfigIdiomaEs extends EmpresaConfigIdioma {
    constructor() {
        super();
        this.titulo = 'Empresas';
        this.editar = 'Editar';
        this.borrar = 'Borrar';
        this.cancelar = 'Cancelar';
        this.aceptar = 'Aceptar';
        this.confirmeBorrado = 'Confirme Borrado';
    }
}

export class EmpresaConfigIdiomaGl extends EmpresaConfigIdioma {
    constructor() {
        super();
        this.titulo = 'Empresas';
        this.editar = 'Editar';
        this.borrar = 'Borrar';
        this.cancelar = 'Cancelar';
        this.aceptar = 'Aceptar';
        this.confirmeBorrado = 'Confirme Borrado';
    }
}

export class EmpresaConfigIdiomaEn extends EmpresaConfigIdioma {
    constructor() {
        super();
        this.titulo = 'Companies';
        this.editar = 'Edit';
        this.borrar = 'Delete';
        this.cancelar = 'Cancel';
        this.aceptar = 'Accept';
        this.confirmeBorrado = 'Confirm delete';
    }
}