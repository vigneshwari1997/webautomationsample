import loginpage from '../page/login.page';
import data from '../data/login.json';


describe('Casting Director should be able to login', () => {

    it('#smoke:Casting Director logging in with valid credentials', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
    });
    it('Casting Director logging in with invalid credentials', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.Invalidusername,data.env.DEV.Invalidpassword);
    });

});    

describe('Casting director should be able to change the password', () => {

    it('#smoke:changing the old password with new password', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername1,data.env.DEV.CDpassword1);
        loginpage.changepassword(data.env.DEV.CDpassword1,data.env.DEV.Newpassword,data.env.DEV.Confirmpassword);
        loginpage.logout();
        loginpage.loginwithnewpassword(data.env.DEV.URL,data.env.DEV.CDusername1,data.env.DEV.Confirmpassword);
    });
    
});


