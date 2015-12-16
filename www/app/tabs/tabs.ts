import {IonicApp, Page, NavController} from 'ionic-framework/ionic';

//
// Tab 1
//
@Page({
    template: `
    <ion-navbar *navbar>
    <button menuToggle>
        <icon menu></icon>
    </button>
      <ion-title>Heart</ion-title>
    </ion-navbar>
    <ion-content class="padding">
      <h2>Tab 1</h2>
    </ion-content>
    `
})
class Tab1 {
    constructor(nav: NavController) {
        this.nav = nav;
    }
}

//
// Tab 2
//
@Page({
    template: `
    <ion-navbar *navbar>
<button menuToggle>
        <icon menu></icon>
    </button>
      <ion-title>Star</ion-title>
    </ion-navbar>
    <ion-content class="padding">
      <h2>Tab 2</h2>
    </ion-content>
    `
})
class Tab2 {
    constructor(nav: NavController) {
        this.nav = nav;
    }
}

//
// Tab 3
//
@Page({
    template: `
    <ion-navbar *navbar>
<button menuToggle>
        <icon menu></icon>
    </button>
      <ion-title>Stopwatch</ion-title>
    </ion-navbar>
    <ion-content class="padding">
      <h2>Tab 3</h2>
    </ion-content>
    `
})
class Tab3 {
    constructor(nav: NavController) {
        this.nav = nav;
    }
}

@Page({
    templateUrl: 'app/tabs/tabs.html'
})
export class TabsPage {
    constructor(app: IonicApp,nav: NavController) {
        this.nav = nav;
        this.tab1Root = Tab1;
        this.tab2Root = Tab2;
        this.tab3Root = Tab3;
    }
}
