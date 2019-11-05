export class HomeIdioma {
    public nombreApp: string;
    public bienvenido: string;
    public iniciar: string;
    public idioma: string;
    public seleccioneIdioma: string;
    public noCuenta: string;
}

export class HomeIdiomaEs extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Bienvenidos a DualSoft';
        this.iniciar = 'Iniciar';
        this.idioma = 'Castellano';
        this.seleccioneIdioma = 'Seleccione Idioma';
        this.noCuenta = 'Si no tienes cuenta regístrate';
    }
}

export class HomeIdiomaGl extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Benvidos a DualSoft';
        this.iniciar = 'Comezar';
        this.idioma = 'Galego';
        this.seleccioneIdioma = 'Seleccione Idioma';
        this.noCuenta = 'Se non tes conta rexístrate';
    }
}

export class HomeIdiomaEn extends HomeIdioma {
    constructor() {
        super();
        this.nombreApp = 'Dual App';
        this.bienvenido = 'Welcome to DualSoft';
        this.iniciar = 'Start';
        this.idioma = 'English';
        this.seleccioneIdioma = 'Select language';
        this.noCuenta = 'If you have not an account sign in';
    }
}





