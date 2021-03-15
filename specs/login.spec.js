import loginpage from '../page/login.page';
import data from '../data/login.json';


describe('User should be able to login', () => {

    it('#smoke:Casting Director logging in with valid credentials', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.username,data.env.DEV.password);
    });
    it('Casting Director logging in with invalid credentials', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.Invalidusername,data.env.DEV.Invalidpassword);
    });

});    



