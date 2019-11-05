export class ClienteRest01Idioma {
    public EX_USUARIO_MAIL_EXISTE: string;
    public EX_USUARIO_LOGIN_ERROR: string;
}

export class ClienteRest01IdiomaEs extends ClienteRest01Idioma {
    constructor() {
        super();
        this.EX_USUARIO_MAIL_EXISTE = 'Mail existente';
        this.EX_USUARIO_LOGIN_ERROR = 'Error en el login';


    }
}

export class ClienteRest01IdiomaGl extends ClienteRest01Idioma {
    constructor() {
        super();
        this.EX_USUARIO_MAIL_EXISTE = 'Mail existente';
        this.EX_USUARIO_LOGIN_ERROR = 'Erro no login';

    }
}

export class ClienteRest01IdiomaEn extends ClienteRest01Idioma {
    constructor() {
        super();
        this.EX_USUARIO_MAIL_EXISTE = 'Mail exists';
        this.EX_USUARIO_LOGIN_ERROR = 'Login error';

    }
}




