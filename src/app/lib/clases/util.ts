export class Util {
    public  emailValido(email: string): boolean {
        // tslint:disable-next-line: max-line-length
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    /**
     * Comprueba si la clave es válida. Debe cumplir:
     * Minimo 8 caracteres
     * Al menos una letra mayúscula
     * Al menos una letra minucula
     * Al menos un dígito
     * Al menos 1 caracter especial
     * @param clave clave a verificar
     */
    public claveValida(password: string): boolean {
        let resultado = false;
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';
        const splChars = '!@#$%&*().=';
        const ucaseFlag = this.contains(password, uppercase);
        const lcaseFlag = this.contains(password, lowercase);
        const digitsFlag = this.contains(password, digits);
        const splCharsFlag = this.contains(password, splChars);
        if (password.length >= 8 && ucaseFlag && lcaseFlag && digitsFlag && splCharsFlag) {
              resultado = true;
        }
        return resultado;
     }

   private  contains(password, allowedChars) {
       for (let i = 0; i < password.length; i++) {
               const char = password.charAt(i);
               if (allowedChars.indexOf(char) >= 0) { return true; }
            }
       return false;
   }


   public  stringToBoolean(texto: string): boolean{
    let resultado = false;
    if (texto === 'S') { resultado = true;}
    return resultado;
   }

   public  booleanToString(dato: boolean): string{
    let resultado = 'N';
    if (dato) { resultado = 'S'; }
    return resultado;
   }

   public  esNumero(dato: string): boolean {
    return ! isNaN(Number(dato));
   }
   public  esNumeroEntreValores(numero: number, min: number, max: number): boolean {
       return ((numero !== null) && (numero >= min) && (numero <= max));
   }

   public  pad(dato: number, tamano: number, relleno = '0'): string {
    let resultado: string = dato.toString();
    while (resultado.length < tamano) {resultado = relleno + resultado; }
    return resultado;
  }

  public  ionDateToFirebirdDate(fechaString: string, ms = false): string {
           const fecha: Date = new Date(fechaString);
           const dia =  fecha.getDate();
           const mes =  fecha.getMonth() + 1;
           const  ano =  fecha.getFullYear();
           const horas = fecha.getHours();
           const minutos = fecha.getMinutes();
           let  resultado: string = mes + '/' + dia + '/' + ano;
           if (ms) { resultado += ' ' +  horas + ':' + minutos; }

           return resultado;
  }

  public  ionDateToLabelDate(fechaString: string, ms = false): string {
           const fecha: Date = new Date(fechaString);
           const dia =  fecha.getDate();
           const mes =  fecha.getMonth() + 1;
           const ano =  fecha.getFullYear();
           const horas = fecha.getHours();
           const minutos = fecha.getMinutes();
           let resultado: string = dia + '/' + mes + '/' + ano;
           if (ms) { resultado += ' ' + horas + ':' + minutos; }
           return resultado;
  }

  public  firebirdDateToIonDate(fechaString: string, ms = false): string {
           const fecha: Date = new Date(fechaString);
           const dia =  fecha.getDate();
           const mes =  fecha.getMonth() + 1;
           const ano =  fecha.getFullYear();
           const horas = fecha.getHours();
           const minutos = fecha.getMinutes();
           let resultado: string = this.pad(ano, 4) + '-' + this.pad(mes, 2) + '-' + this.pad(dia, 2);
           if (ms) { resultado += ' ' + this.pad(horas, 2) + ':' + this.pad(minutos,2); }
           return resultado;
  }
  public  firebirdDateToLabelDate(fechaString: string, ms = false): string {
           let resultado = '';
           if (fechaString != null) {
             const fecha: Date = new Date(fechaString);
             const dia =  fecha.getDate();
             const mes =  fecha.getMonth() + 1;
             const ano =  fecha.getFullYear();
             const horas = fecha.getHours();
             const minutos = fecha.getMinutes();
             resultado = this.pad(dia, 2) + '/' + this.pad(mes, 2) + '/' + this.pad(ano, 4);
             if (ms) { resultado += ' ' + this.pad(horas, 2) + ':' + this.pad(minutos, 2); }
           }
           return resultado;
  }



public calcularDistancia(lat1: number, long1: number, lat2: number, long2: number){
  const p = 0.017453292519943295;    // Math.PI / 180
  const c = Math.cos;
  const a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
  const dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
  return Math.round(dis * 1000);
}


}
