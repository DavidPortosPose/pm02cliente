

export class ClienteRest01Idioma {
    public EX_USUARIO_MAIL_EXISTE: string;
    public EX_USUARIO_LOGIN_ERROR: string;
    public EX_SUPER_ADMIN_ERROR: string;
    public EX_USUARIO_MAIL_NO_EXISTE: string;
    public EX_ADMINISTRADOR_ERROR: string;
    public EX_TRABAJADOR_ERROR: string;
    public EX_ROL_ERROR: string;
    public EX_ARTICULO_NUM_MAXIMO: string;

}

export class ClienteRest01IdiomaEs extends ClienteRest01Idioma {
    constructor() {
        super();
        this.EX_USUARIO_MAIL_EXISTE = 'Mail existente';
        this.EX_USUARIO_LOGIN_ERROR = 'Error en el login';
        this.EX_SUPER_ADMIN_ERROR = 'Error no eres admin';
        this.EX_USUARIO_MAIL_EXISTE = 'Error mail inexistente';
        this.EX_ADMINISTRADOR_ERROR = 'Error no eres administrador de empresa';
        this.EX_TRABAJADOR_ERROR = 'Error no eres trabajador de empresa';
        this.EX_ROL_ERROR = 'Error no existe dicho rol';
        this.EX_ARTICULO_NUM_MAXIMO = 'Error ha alcanzado el número máximo de artículos';


        

    }
}

export class ClienteRest01IdiomaGl extends ClienteRest01Idioma {
    constructor() {
        super();
        this.EX_USUARIO_MAIL_EXISTE = 'Mail existente';
        this.EX_USUARIO_LOGIN_ERROR = 'Erro no login';
        this.EX_SUPER_ADMIN_ERROR = 'Erro non es admin';
        this.EX_USUARIO_MAIL_EXISTE = 'Erro mail inexistente';
        this.EX_ADMINISTRADOR_ERROR = 'Erro non es administrador de empresa';
        this.EX_TRABAJADOR_ERROR = 'Erro non es traballador de empresa';
        this.EX_ROL_ERROR = 'Erro non existe dito rol';
        this.EX_ARTICULO_NUM_MAXIMO = 'Error acadou o número máximo de artígos';
    }
}

export class ClienteRest01IdiomaEn extends ClienteRest01Idioma {
    constructor() {
        super();
        this.EX_USUARIO_MAIL_EXISTE = 'Mail exists';
        this.EX_USUARIO_LOGIN_ERROR = 'Login error';
        this.EX_SUPER_ADMIN_ERROR = 'Error you are not an admin';
        this.EX_USUARIO_MAIL_EXISTE = 'Error mail does not exists';
        this.EX_ADMINISTRADOR_ERROR = 'Error you are not a company administrator';
        this.EX_TRABAJADOR_ERROR = 'Error you are not a company worker';
        this.EX_ROL_ERROR = 'Error Rol does not exists';
        this.EX_ARTICULO_NUM_MAXIMO = 'Error you have get max number of articles';
    }
}