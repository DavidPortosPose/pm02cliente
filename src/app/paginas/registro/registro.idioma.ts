export class RegistroIdioma {
    public titulo: string;
    public nombre: string;
    public guardar: string;
    public apellidos: string;
    public mail: string;
    public clave: string;
    public clave2: string;
    public errorNombre: string;
    public errorApellidos: string;
    public errorMail: string;
    public errorClave: string;
    public errorRest: string;
    public datosGuardados: string;


}

export class RegistroIdiomaEs extends RegistroIdioma {
    constructor() {
        super();
        this.titulo = 'Registro';
        this.nombre = 'Nombre';
        this.guardar = 'Guardar';
        this.apellidos = 'Apellidos';
        this.mail = 'Mail';
        this.clave = 'Clave';
        this.clave2 = 'Repita clave';
        this.errorNombre = 'Error en el nombre';
        this.errorApellidos = 'Error en los apellidos';
        this.errorMail = 'Error en el mail';
        this.errorClave = 'Error en la clave';
        this.errorRest = 'Error al guardar los datos';
        this.datosGuardados = 'Datos guardados';
    }
}

export class RegistroIdiomaGl extends RegistroIdioma {
    constructor() {
        super();
        this.titulo = 'Rexistro';
        this.nombre = 'Nome';
        this.guardar = 'Gardar';
        this.apellidos = 'Apelidos';
        this.mail = 'Mail';
        this.clave = 'Constrasinal';
        this.clave2 = 'Repita contrasinal';
        this.errorNombre = 'Erro no nome';
        this.errorApellidos = 'Erro nos apelidos';
        this.errorMail = 'Erro no mail';
        this.errorClave = 'Erro no contrasinal';
        this.errorRest = 'Erro ao gardar os datos';
        this.datosGuardados = 'Datos gardados';
    }
}

export class RegistroIdiomaEn extends RegistroIdioma {
    constructor() {
        super();
        this.titulo = 'Sign up';
        this.nombre = 'First Name';
        this.guardar = 'Save';
        this.apellidos = 'Last name';
        this.mail = 'Mail';
        this.clave = 'Password';
        this.clave2 = 'Repeat password';
        this.errorNombre = 'Name error';
        this.errorApellidos = 'Last name error';
        this.errorMail = 'Mail error';
        this.errorClave = 'Password error';
        this.errorRest = 'Error on save data';
        this.datosGuardados = 'Data saved';
    }
}