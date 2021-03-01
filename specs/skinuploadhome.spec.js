import loginpage from '../page/login.page';
import skinuploadpage from '../page/skinuploadhome.page';
import skinuploadpagedata from '../data/skinupload.json';
import data from '../data/login.json';

describe('Casting Director should be able to create shoot', () => {
    it('#smoke:Casting director able create shoot and able to view and edit the shoot created', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.viewandedittheshootcreated();
        loginpage.logout();
    });
});  
describe('Casting director should be able to add talent', () => {

    it('#smoke:casting director should be able to add mandatory fields', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.createshoot();
        skinuploadpage.addtalentmandatoryfields(skinuploadpagedata.add.talent.calltime,skinuploadpagedata.add.talent.lastname,skinuploadpagedata.add.talent.firstname,skinuploadpagedata.add.talent.phone,skinuploadpagedata.add.talent.email,skinuploadpagedata.add.talent.role,skinuploadpagedata.add.talent.rate);
        loginpage.logout();
    });
    
}); 
describe('Casting Director should be able to assign compensation to talent', () => {
    it('#smoke:casting director should be able to add talent with compensations', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.createshoot();
        skinuploadpage.addtalentwithbottomfields(skinuploadpagedata.add.talent.lastname1,skinuploadpagedata.add.talent.firstname1,skinuploadpagedata.add.talent.phone1,skinuploadpagedata.add.talent.email1,skinuploadpagedata.add.talent.rate1,skinuploadpagedata.add.talent.role1,skinuploadpagedata.add.talent.description,skinuploadpagedata.add.talent.rate2);
        loginpage.logout();
    });
    
}); 

describe('Casting director trying to view and edit details of talent', () => {

    it('#smoke:casting director should be able to view and edit talent until checkout', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.infooftalent();
        loginpage.logout();
    });
    
});  
describe('Casting Director should be able to send message to Assistant Director', () => {
    it('#smoke:Casting Director sending message to Assistant Director', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.messagetoad(skinuploadpagedata.add.message.msg);
        loginpage.logout();
    });
    
});
describe('Casting Director should be able to add new location', () => {
    it('#smoke:Casting director should be able to add new location to the project', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.projectlocation(skinuploadpagedata.add.location.projectlocation);
        loginpage.logout();
    });
    
});
describe('Casting Director should be able to delete the talents', () => {
    it('#smoke:Casting Director should be able to delete the talents individual before checkin', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.deletetalentindividual();
        loginpage.logout();
    });
    it('#smoke:Casting Director should be able to delete the talents bulk before checkin', () => {
        loginpage.login(data.env.DEV.URL,data.env.DEV.CDusername,data.env.DEV.CDpassword);
        skinuploadpage.deletetalentbulk();
        loginpage.logout();
    });
});