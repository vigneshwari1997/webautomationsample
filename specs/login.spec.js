import loginpage from '../page/login.page';
import data from '../data/env.json';


describe('Casting Director login', () => {

    it('#smoke:Casting Director logging in with valid credentials', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
    });

});    

describe('Casting director changing the password', () => {

    it('#smoke:changing the old password with new password', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        loginpage.changepassword(data.env.DEV.CDpassword,data.env.DEV.Newpassword,data.env.DEV.Confirmpassword);
        loginpage.logout();
        loginpage.loginwithnewpassword(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.Confirmpassword);
    });
    
});


