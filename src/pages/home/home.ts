import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrerPage } from '../registrer/registrer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  newCard() {
    this.navCtrl.push(RegistrerPage);
  }

}
