import {CORE_DIRECTIVES, FORM_DIRECTIVES}  from 'angular2/angular2';
import {IonicApp, Page, NavController} from 'ionic-framework/ionic';

//import {SignupPage} from '../signup/signup';

@Page({
    templateUrl: 'app/login/login.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginPage {
    constructor(app: IonicApp, nav: NavController) {
        this.nav = nav;


        //this.form = new ControlGroup({
        //  email: new Control('', Validators.required),
        //  password: new Control('', Validators.required),
        //});

        //this.signupPage = SignupPage;
        //this.forgotPasswordPage = ForgotPasswordPage;

        //this.loginData = {};
    }

    doLogin(event) {
      console.log('Doing login');

      // Handle the login here:

      // Don't allow the form to submit normally, since we
      // will handle it ourselves
      //event.preventDefault();
    }
}

@Page({
    templateUrl: 'app/login/forgot-password.html'
})
export class ForgotPasswordPage {
    constructor(app: IonicApp, nav: NavController) {
        //this.email = "";
    }
    //doForgotPassword(event) {
    //  console.log('Resetting password for user', this.email);

    //  // Maybe reset their password here.

    //  event.preventDefault();
    //}
}
