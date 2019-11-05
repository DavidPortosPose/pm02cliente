export class Params {
    private ruta: string;

    constructor(ruta: string) {
        this.ruta = ruta;
    }

    public getRuta(): string {
        return this.ruta;
    }
}
