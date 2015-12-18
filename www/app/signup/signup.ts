import {Validators, Control, ControlGroup} from 'angular2/common';
import {IonicApp, Page, NavController} from 'ionic-framework/ionic';

import {LoginPage} from '../login/login';

@Page({
    templateUrl: 'app/signup/signup.html'
})
export class SignupPage {
    form: ControlGroup;
    constructor(app: IonicApp, nav: NavController) {
        this.nav = nav;
        this.form = new ControlGroup({
            name: new Control("", Validators.required),
            email: new Control("", Validators.required),
            password: new Control("", Validators.required),
        });

        this.loginPage = LoginPage;
    }

    doSignup(event) {
        // Handle the signup here:
        console.log('Doing signup', this.form.value);


        // Don't allow the form to submit normally, since we
        // will handle it ourselves
        //event.preventDefault();
    }
}
