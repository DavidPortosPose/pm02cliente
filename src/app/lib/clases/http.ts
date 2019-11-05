import { HttpClient } from '@angular/common/http';
export interface DatosEnviar {
  operacion: string;
  params: any;
}

export class Http {
    private url: string;
    private ruta: string;
    private http: HttpClient;

    constructor(http: HttpClient, url: string, ruta: string) {
        this.url = url;
        this.ruta = ruta;
        this.http = http;
    }

    public post(datos: DatosEnviar) {
        return new Promise((resolve, reject) => {
          this.http.post (this.url +  this.ruta , JSON.stringify(datos))
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
      }
}