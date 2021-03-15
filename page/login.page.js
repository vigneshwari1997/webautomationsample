import loginobjects from '../pageobjects/login.pageobjects';
import utilities from '../helper/utilties';
class LoginPage {

    get userName(){return $(loginobjects.username);}
    get passWord() {return $(loginobjects.password);}
    get loginBtn() {return $(loginobjects.loginbtn);}
    
    login(url,username,password){
        browser.url(url);
        utilities.doaddValue(this.userName,username);
        utilities.doaddValue(this.passWord,password);
        utilities.doClick(this.loginBtn);
    }
    loginwithwrongusername(url,username,password){
        browser.url(url);
        utilities.doaddValue(this.userName,username);
        utilities.doaddValue(this.passWord,password);
        utilities.doClick(this.loginBtn);
    }
    loginwithwrongpassword(url,username,password){
        browser.url(url);
        utilities.doaddValue(this.userName,username);
        utilities.doaddValue(this.passWord,password);
        utilities.doClick(this.loginBtn);
        browser.pause(3000);
    }
    loginwithinvalidcredentials(url,username,password){
        browser.url(url);
        utilities.doaddValue(this.userName,username);
        utilities.doaddValue(this.passWord,password);
        utilities.doClick(this.loginBtn);
        browser.pause(3000);
    }
    
}
module.exports = new LoginPage();