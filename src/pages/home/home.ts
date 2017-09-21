import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  like: number = 18;
  isLike: boolean = false;
  isSc: boolean = false;
  constructor(public navCtrl: NavController) {

  }

  updateLike() {
    const me = this;

    if (me.isLike) {
      me.like -= 1;
      me.isLike = false;
    }else {
      me.like += 1;
      me.isLike = true;
    }
  }

  shouchang() {
    const me = this;
    me.isSc = !me.isSc;
  }
}
