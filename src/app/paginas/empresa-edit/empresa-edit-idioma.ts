export class EmpresaEditIdioma {
    public titulo: string;
    public nombre: string;
    public aceptar: string;
    public errorNombre: string;
    public operacionOk: string;

}

export class EmpresaEditIdiomaEs extends EmpresaEditIdioma {
    constructor() {
        super();
        this.titulo = 'Editar empresa';
        this.nombre = 'Nombre';
        this.aceptar = 'Aceptar';
        this.errorNombre = 'Error en el nombre';
        this.operacionOk = ' Operación realizada correctamente';
    }

}

export class EmpresaEditIdiomaGl extends EmpresaEditIdioma {
    constructor() {
        super();
        this.titulo = 'Editar empresa';
        this.nombre = 'Nome';
        this.aceptar = 'Aceptar';
        this.errorNombre = 'Erro no nome';
        this.operacionOk = ' Operación realizada correctamente';
    }
}

export class EmpresaEditIdiomaEn extends EmpresaEditIdioma {
    constructor() {
        super();
        this.titulo = 'Edit company';
        this.nombre = 'Name';
        this.aceptar = 'Accept';
        this.errorNombre = 'Name error';
        this.operacionOk = 'Operation realized correctly';
    }
}