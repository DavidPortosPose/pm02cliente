export class LoginIdioma {
    public titulo: string;
    public usuario: string;
    public clave: string;
    public iniciar: string;
    public errorMail: string;
    public errorClave: string;
    public errorLogin: string;
}

export class LoginIdiomaEs extends LoginIdioma {
    constructor() {
        super();
        this.titulo = 'Login';
        this.usuario = 'Mail';
        this.clave = 'Clave';
        this.iniciar = 'Iniciar';
        this.errorMail = 'Error en el mail';
        this.errorClave = 'Error en la contraseña';
        this.errorLogin = 'Mail o clave erróneos';

    }
}

export class LoginIdiomaGl extends LoginIdioma {
    constructor() {
        super();
        this.titulo = 'Login';
        this.usuario = 'Mail';
        this.clave = 'Contrasinal';
        this.iniciar = 'Comezar';
        this.errorMail = 'Erro no mail';
        this.errorClave = 'Erro no contrasinal';
        this.errorLogin = 'Mail ou contrasinal erróneos';
    }
}

export class LoginIdiomaEn extends LoginIdioma {
    constructor() {
        super();
        this.titulo = 'Login';
        this.usuario = 'Mail';
        this.clave = 'Password';
        this.iniciar = 'Start';
        this.errorMail = 'Mail error';
        this.errorClave = 'Password error';
        this.errorLogin = 'Wrong Mail or password';
    }
}