import loginpage from '../page/login.page';
import homepage from '../page/home.page';
import homepagedata from '../data/homepage.json';
import data from '../data/env.json';

describe('Casting Director creating shoot', () => {
    it('#smoke:Casting director creating shoot and editing the shoot by adding the new location', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        homepage.createshootnewlocation(homepagedata.add.location.locationname);
        homepage.createshoot();
        loginpage.logout();
        browser.pause(2000);
    });
});  
describe('Casting director trying to add talent', () => {

    it('#smoke:cd able to add mandatory fields', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        homepage.createshoot();
        homepage.addtalentgrid(homepagedata.add.talent.calltime,homepagedata.add.talent.lastname,homepagedata.add.talent.firstname,homepagedata.add.talent.phone,homepagedata.add.talent.email,homepagedata.add.talent.role);
        homepage.addtalentbottomfields(homepagedata.add.talent.rate,homepagedata.add.talent.description,homepagedata.add.talent.rate2);
    });
    
});  