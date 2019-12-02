export class UsuarioEmpresaEditIdioma {
    public titulo: string;
    public nombre: string;
    public apellidos: string;
    public mail: string;
    public nif: string;
    public dir: string;
    public aceptar: string;
    public errorNombre: string;
    public errorApellidos: string;
    public errorMail: string;
    public errorNif: string;
    public errorDir: string;
    public operacionOk: string;

}

export class UsuarioEmpresaEditIdiomaEs extends UsuarioEmpresaEditIdioma {
    constructor() {
        super();
        this.titulo = 'Editar usuario';
        this.nombre = 'Nombre';
        this.apellidos = 'Apellidos';
        this.mail = 'Mail';
        this.nif = 'Nif';
        this.dir = 'Dirección';
        this.aceptar = 'Aceptar';
        this.errorNombre = 'Error en el nombre';
        this.errorApellidos = 'Error en los apellidos';
        this.errorMail = 'Error en el mail';
        this.errorNif = 'Error en el nif';
        this.errorDir = 'Error en la dirección';
        this.operacionOk = ' Operación realizada correctamente';
    }

}

export class UsuarioEmpresaEditIdiomaGl extends UsuarioEmpresaEditIdioma {
    constructor() {
        super();
        this.titulo = 'Editar usuario';
        this.nombre = 'Nome';
        this.apellidos = 'Apelidos';
        this.mail = 'Mail';
        this.nif = 'Nif';
        this.dir = 'Enderezo';
        this.aceptar = 'Aceptar';
        this.errorNombre = 'Erro no nome';
        this.errorApellidos = 'Erro nos apellidos';
        this.errorMail = 'Erro no mail';
        this.errorNif = 'Erro no nif';
        this.errorDir = 'Erro no enderezo';
        this.operacionOk = ' Operación realizada correctamente';
    }
}

export class UsuarioEmpresaEditIdiomaEn extends UsuarioEmpresaEditIdioma {
    constructor() {
        super();
        this.titulo = 'Edit user';
        this.nombre = 'Name';
        this.apellidos = 'Last Name';
        this.mail = 'Mail';
        this.nif = 'Nif';
        this.dir = 'Address';
        this.aceptar = 'Accept';
        this.errorNombre = 'Name error';
        this.errorApellidos = 'Last name error';
        this.errorMail = 'Mail error';
        this.errorNif = 'Nif error';
        this.errorDir = 'Address error';
        this.operacionOk = 'Operation realized correctly';
    }
}