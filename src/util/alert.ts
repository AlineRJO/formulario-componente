import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class Alert {
  constructor(
      public alertCtrl: AlertController
    )
  {

  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      subTitle: message,
      cssClass: 'alert-default',
      buttons: ['OK']
    });
    alert.present();

    setTimeout(()=>{
      alert.dismiss();
    }, 10000);

  }

  showErrorAlert(message) {
    let alert = this.alertCtrl.create({
      subTitle: message,
      cssClass: 'alert-danger',
      buttons: ['OK']
    });
    alert.present();

    setTimeout(()=>{
      alert.dismiss();
    }, 10000);

  }

}
