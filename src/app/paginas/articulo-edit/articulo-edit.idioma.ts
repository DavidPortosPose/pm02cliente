export class ArticuloEditIdioma {
    public titulo: string;
    public nombre: string;
    public precio: string;
    public iva: string;
    public aceptar: string;
    public errorNombre: string;
    public errorPrecio: string;
    public operacionOk: string;

}

export class ArticuloEditIdiomaEs extends ArticuloEditIdioma {
    constructor() {
        super();
        this.titulo = 'Editar Articulo';
        this.nombre = 'Nombre';
        this.precio = 'Precio';
        this.iva = 'Iva';
        this.aceptar = 'Aceptar';
        this.errorNombre = 'Error en el nombre';
        this.errorPrecio = 'Error el precio debe estar entre 100 y 200';
        this.operacionOk = ' Operación realizada correctamente';
    }

}

export class ArticuloEditIdiomaGl extends ArticuloEditIdioma {
    constructor() {
        super();
        this.titulo = 'Editar Articulo';
        this.nombre = 'Nome';
        this.precio = 'Prezo';
        this.iva = 'Iva';
        this.aceptar = 'Aceptar';
        this.errorNombre = 'Erro no nome';
        this.errorPrecio = 'Erro o prezo debe estar entre 100 y 200';
        this.operacionOk = ' Operación realizada correctamente';
    }
}

export class ArticuloEditIdiomaEn extends ArticuloEditIdioma {
    constructor() {
        super();
        this.titulo = 'Edit company';
        this.nombre = 'Name'
        this.precio = 'Price';
        this.iva = 'Iva';
        this.aceptar = 'Accept';
        this.errorNombre = 'Name error';
        this.errorPrecio = 'Error price must be between 100 and 200';
        this.operacionOk = 'Operation realized correctly';
    }
}