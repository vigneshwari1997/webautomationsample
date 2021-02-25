import loginobjects from '../pageobjects/login.pageobjects';
import logindata from '../data/env.json';
import utilities from '../helper/utilties';;
import homepageobjects from '../pageobjects/home.pageobjects';

class LoginPage {

    get userName(){return $(loginobjects.username);}
    get passWord() {return $(loginobjects.password);}
    get loginBtn() {return $(loginobjects.loginbtn);}
    get Cdicon() {return $(homepageobjects.cdicon);}
    get Logoutbtn() {return $(homepageobjects.logoutbtn);}
    get CDicon() {return $(homepageobjects.cdicon);}
    get Changepassword() {return $(homepageobjects.changepassword);}
    get Oldpassword() {return $(homepageobjects.oldpassword);}
    get Newpassword() {return $(homepageobjects.newpassword);}
    get ConfirmPassword() {return $(homepageobjects.confirmpassword);}
    get Changebtn() {return $(homepageobjects.changebtn);}
    get Closebtn() {return $(homepageobjects.closebtn);}
    get Oldeyebtn() {return $(homepageobjects.oldeyebtn);}
    get Neweyebtn() {return $(homepageobjects.neweyebtn);}
    get Confirmeyebtn() {return $(homepageobjects.confirmeyebtn);}

    
    login(url,username,password){
        browser.url(url);
        utilities.doaddValue(this.userName,username);
        utilities.doaddValue(this.passWord,password);
        utilities.doClick(this.loginBtn);
    }
    loginwithwrongusername(){
        browser.url(url.cdurllogin);
        utilities.doaddValue(this.userName,logindata.username1);
        utilities.doaddValue(this.passWord,logindata.password);
        utilities.doClick(this.loginBtn);
    }
    loginwithwrongpassword(){
        browser.url(url.cdurllogin);
        utilities.doaddValue(this.userName,logindata.username);
        utilities.doaddValue(this.passWord,logindata.password1);
        utilities.doClick(this.loginBtn);
        browser.pause(3000);
    }
    loginwithinvalidcredentials(){
        browser.url(url.cdurllogin);
        utilities.doaddValue(this.userName,logindata.username);
        utilities.doaddValue(this.passWord,logindata.confirmpassword);
        utilities.doClick(this.loginBtn);
        browser.pause(3000);
    }
    loginwithnewpassword(url,username,confirmpassword){
        browser.url(url);
        utilities.doaddValue(this.userName,username);
        utilities.doaddValue(this.passWord,confirmpassword);
        utilities.doClick(this.loginBtn);
    }
    logout(){
        utilities.doClick(this.Cdicon);
        utilities.doClick(this.Logoutbtn);
        browser.pause(3000);
    }
    changepassword(oldpassword,newpassword,confirmpassword){
        utilities.doClick(this.CDicon);
        utilities.doClick(this.Changepassword);
        utilities.doaddValue(this.Oldpassword,oldpassword);
        utilities.doaddValue(this.Newpassword,newpassword);
        utilities.doaddValue(this.ConfirmPassword,confirmpassword);
        utilities.waitForClickable(this.Changebtn,true);
        utilities.doClick(this.Changebtn);
    }
}
module.exports = new LoginPage();