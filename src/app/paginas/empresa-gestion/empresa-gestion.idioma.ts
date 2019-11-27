export class EmpresaGestionIdioma {
    public titulo: string;
    public usuarios: string;
    public administradores: string;
    public trabajadores: string;
    public clientes: string;
    public articulos: string;
    public pedidos: string;
}

export class EmpresaGestionIdiomaEs extends EmpresaGestionIdioma {
    constructor() {
        super();
        this.titulo = 'Gestión de empresa';
        this.usuarios = 'Usuarios';
        this.administradores = 'Administradores';
        this.trabajadores = 'Trabajadores';
        this.clientes = 'Clientes';
        this.articulos = 'Artículos';
        this.pedidos = 'Pedidos';

    }

}

export class EmpresaGestionIdiomaGl extends EmpresaGestionIdioma {
    constructor() {
        super();
        this.titulo = 'Gestión de empresa';
        this.usuarios = 'Usuarios';
        this.administradores = 'Administradores';
        this.trabajadores = 'Traballadores';
        this.clientes = 'Clientes';
        this.articulos = 'Artículos';
        this.pedidos = 'Pedidos';
    }
}

export class EmpresaGestionIdiomaEn extends EmpresaGestionIdioma {
    constructor() {
        super();
        this.titulo = 'Manage Company';
        this.usuarios = 'Users';
        this.administradores = 'Administrators';
        this.trabajadores = 'Employees';
        this.clientes = 'Customers';
        this.articulos = 'Items';
        this.pedidos = 'Orders';
    }
}