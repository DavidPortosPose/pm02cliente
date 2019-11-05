import { ToastController } from '@ionic/angular';

export class Mensaje{
    private toastController: ToastController;
    constructor(toastController: ToastController){
        this.toastController = toastController;
    }

    private async mostrarMensaje(mensaje: string, colorMnesaje: string){
        const toast = await this.toastController.create({
            message: mensaje,
            color: colorMnesaje,
            duration: 4000
          });
        toast.present();
    }

    public async mostrarMensajeError(mensaje: string) {
        this.mostrarMensaje(mensaje, 'danger');
    }

    public async mostrarMensajeOk(mensaje: string){
        this.mostrarMensaje(mensaje, 'medium');
    }
}
