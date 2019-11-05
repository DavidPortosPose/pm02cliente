import { Params } from './params';
import { NavController } from '@ionic/angular';

export class PilaParams {
    private pila: Params[] = [];
    private navCtrl: NavController;

    constructor(navCtrl: NavController ) {
        this.navCtrl = navCtrl;
    }
    push(pagina: Params) {
        this.pila.push(pagina);
        this.navCtrl.navigateForward(pagina.getRuta());
    }

    pop() {
      this.pila.pop();
      this.navCtrl.navigateBack(this.getTop().getRuta());
    }

    popHome() {
      const tamano= this.pila.length;
      for (let index = 1; index < tamano; index++) {
        this.pila.pop();
      }
      this.navCtrl.navigateBack(this.getTop().getRuta());
    }

    getTop(): Params {
      return this.pila[this.pila.length - 1];
    }
}
