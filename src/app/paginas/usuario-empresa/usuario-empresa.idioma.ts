export class UsuarioEmpresaIdioma {
    public titulo: string;
    public editar: string;
    public borrar: string;
    public cancelar: string;
    public aceptar: string;
    public confirmeBorrado: string;
    public activar: string;
    public desactivar: string;
    public noActivos: string;
    public apellidosBuscar: string;


}

export class UsuarioEmpresaIdiomaEs extends UsuarioEmpresaIdioma {
    constructor() {
        super();
        this.titulo = 'Usuarios';
        this.editar = 'Editar';
        this.borrar = 'Borrar';
        this.cancelar = 'Cancelar';
        this.aceptar = 'Aceptar';
        this.confirmeBorrado = 'Confirmar';
        this.activar = 'Activar';
        this.desactivar = 'Desactivar';
        this.noActivos = 'No activos';
        this.apellidosBuscar = 'Apellidos a buscar';
    }
}

export class UsuarioEmpresaIdiomaGl extends UsuarioEmpresaIdioma {
    constructor() {
        super();
        this.titulo = 'Usuarios';
        this.editar = 'Editar';
        this.borrar = 'Borrar';
        this.cancelar = 'Cancelar';
        this.aceptar = 'Aceptar';
        this.confirmeBorrado = 'Confirmar';
        this.activar = 'Activar';
        this.desactivar = 'Desactivar';
        this.noActivos = 'Non activos';
        this.apellidosBuscar = 'Apelidos a buscar';

    }
}

export class UsuarioEmpresaIdiomaEn extends UsuarioEmpresaIdioma {
    constructor() {
        super();
        this.titulo = 'Usuarios';
        this.editar = 'Edit';
        this.borrar = 'Delete';
        this.cancelar = 'Cancel';
        this.aceptar = 'Accept';
        this.confirmeBorrado = 'Confirm';
        this.activar = 'Enable';
        this.desactivar = 'Disable';
        this.noActivos = 'No actives';
        this.apellidosBuscar = 'Second name to search';
    }
}