import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'app/intro/intro.html'
})
export class IntroPage {
    constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
  }


}
