import homepageobjects from '../pageobjects/home.pageobjects';
import  base from '../helper/base';
import  utilities from '../helper/utilties';
import homepagedata from '../data/homepage.json';
import {assert} from 'chai';

class CreateShoot {
    get Shootfield() {return $(homepageobjects.shootfield);}
    get Showname() {return $(homepageobjects.showname);}
    get Location() {return $(homepageobjects.location);}
    get Shootdate() {return $(homepageobjects.shootdate);}
    get Cancelbtn() {return $(homepageobjects.cancelbtn);}
    get Createshootbtn() {return $(homepageobjects.createshootbtn);}
    get Cleardateicon() {return $(homepageobjects.cleardateicon);}
    get Editshootbtn() {return $(homepageobjects.editshootbtn);}
    get Selectshoot() {return $(homepageobjects.selectshoot);}
    get Selectshowname() {return $(homepageobjects.selectshowname);}
    get Selectlocation() {return $(homepageobjects.selectlocation);}
    get Calendaricon() {return $(homepageobjects.calendaricon);}
    get Selectdate1() {return $(homepageobjects.selectdate1);}
    get Selectdate2() {return $(homepageobjects.selectdate2);}
    get Createlocationbtn() {return $(homepageobjects.createlocationbtn);}
    get Locationname() {return $(homepageobjects.locationname);}
    get Statename() {return $(homepageobjects.statename);}
    get Selectstate() {return $(homepageobjects.selectstate);}
    get Shownamefield() {return $(homepageobjects.shownamefield);}
    get Country() {return $(homepageobjects.country);}
    get Selectcountry() {return $(homepageobjects.selectcountry);}
    get Savebtn() {return $(homepageobjects.savebtn);}
    get Closebtn1() {return $(homepageobjects.closebtn1);}
    get Cdicon() {return $(homepageobjects.cdicon);}
    get Logoutbtn() {return $(homepageobjects.logoutbtn);}
    get Newlocation() {return $(homepageobjects.newlocation);}
    get Addtalentbtn() {return $(homepageobjects.addtalentbtn);}
    get Calltime() {return $(homepageobjects.calltimefield);}
    get Lastname() {return $(homepageobjects.lastname);}
    get Firstname() {return $(homepageobjects.firstname);}
    get Phone() {return $(homepageobjects.phone);}
    get Email() {return $(homepageobjects.email);}
    get Role() {return $(homepageobjects.role);}
    get Jobtitle() {return $(homepageobjects.jobtitle);}
    get Rate() {return $(homepageobjects.rate);}
    get Hours() {return $(homepageobjects.hours);}
    get Submitbtn() {return $(homepageobjects.submitbtn);}
    get Talentcancelbtn() {return $(homepageobjects.talentcancelbtn);}
    get Addtalentbtn() {return $(homepageobjects.addtalentbtn);}
    get Calltime() {return $(homepageobjects.calltime);}
    get Lastname() {return $(homepageobjects.lastname);}
    get Firstname() {return $(homepageobjects.firstname);}
    get Phone() {return $(homepageobjects.phone);}
    get Email() {return $(homepageobjects.email);}
    get Role() {return $(homepageobjects.role);}
    get Jobtitle() {return $(homepageobjects.jobtitle);}
    get Jobtitledropdown() {return $(homepageobjects.jobtitledropdown);}
    get Rate() {return $(homepageobjects.rate);}
    get Hours() {return $(homepageobjects.hours);}
    get Selecthours() {return $(homepageobjects.selecthours);}
    get Guildcheckbox() {return $(homepageobjects.guildcheckbox);}
    get Adjustmentaddlink() {return $(homepageobjects.adjustmentaddlink);}
    get Adjustmentselect() {return $(homepageobjects.adjustmentselect);}
    get Adjustmentopt1() {return $(homepageobjects.adjustmentopt1);}
    get Adjustmentopt2() {return $(homepageobjects.adjustmentopt2);}
    get Adjustmentplusbtn() {return $(homepageobjects.adjustmentplusbtn);}
    get Adjustmentclosebtn() {return $(homepageobjects.adjustmentclosebtn);}
    get Compensationaddlink() {return $(homepageobjects.compensationaddlink);}
    get Compensationselect() {return $(homepageobjects.compensationselect);}
    get Compensationopt1() {return $(homepageobjects.compensationopt1);}
    get Compensationopt2() {return $(homepageobjects.compensationopt2);}
    get Compensationplusbtn() {return $(homepageobjects.compensationplusbtn);}
    get Compensationclosebtn() {return $(homepageobjects.compensationclosebtn);}
    get Othercompensationaddlink() {return $(homepageobjects.othercompensationaddlink);}
    get Othercompensationselect() {return $(homepageobjects.othercompensationselect);}
    get Othercompensationopt1() {return $(homepageobjects.othercompensationopt1);}
    get Othercompensationopt2() {return $(homepageobjects.othercompensationopt2);}
    get Othercompensationplusbtn() {return $(homepageobjects.othercompensationplusbtn);}
    get Othercompensationdesbox() {return $(homepageobjects.othercompensationdesbox);}
    get Othercompensationratebox() {return $(homepageobjects.othercompensationratebox);}
    get Othercompensationclosebtn() {return $(homepageobjects.othercompensationclosebtn);}
    get addSubmitbtn() {return $(homepageobjects.addsubmitbtn);}
    get addCancelbtn() {return $(homepageobjects.addcancelbtn);}

    createshoot() {
        utilities.doClick(this.Cancelbtn);
        utilities.doClick(this.Showname);
        utilities.doClick(this.Selectshowname);
        utilities.doClick(this.Location);
        utilities.doClick(this.Selectlocation);
        utilities.doClick(this.Calendaricon);
        utilities.doClick(this.Selectdate1);
        utilities.doClick(this.Createshootbtn);
    }
    createshootwithexistingdate(){
        utilities.doClick(this.Showname);
        utilities.doClick(this.Selectshowname);
        utilities.doClick(this.Location);
        utilities.doClick(this.Selectlocation);
        utilities.waitforDisplayed(this.Shootdate,true);
        let displayeddate = utilities.gettextdate(this.Shootdate,'value');
        utilities.waitforDisplayed(this.Shootdate,true);
        assert.strictEqual(displayeddate,base.getcurrentdate(),'These are equal');
        utilities.doClick(this.Createshootbtn);
    }
    
    selectexistingshootwithmodifying(){
        utilities.doClick(this.Shootfield);
        utilities.doClick(this.Selectshoot);
        utilities.waitforDisplayed(this.Selectshoot,true);
        utilities.doClick(this.Cleardateicon);
        utilities.doClick(this.Calendaricon);
        utilities.doClick(this.Selectdate2);
        utilities.doClick(this.Editshootbtn);
    }
    createshootnewlocation(locationname){
        utilities.doClick(this.Shootfield);
        utilities.doClick(this.Selectshoot);
        utilities.waitforDisplayed(this.Selectshoot,true);
        utilities.doClick(this.Createlocationbtn);
        utilities.waitforDisplayed(this.Locationname,true);
        utilities.doaddValue(this.Locationname,locationname);
        utilities.waitforDisplayed(this.Statename,true);
        utilities.doClick(this.Statename);
        utilities.doClick(this.Selectstate);
        utilities.waitforDisplayed(this.Country,true);
        utilities.doClick(this.Country);
        utilities.doClick(this.Selectcountry);
        utilities.waitforDisplayed(this.Savebtn,true);
        utilities.doClick(this.Savebtn);
        utilities.doClick(this.Closebtn1);
        utilities.waitforDisplayed(this.Location,true);
        utilities.doClick(this.Location);
        utilities.waitforDisplayed(this.Location);
        utilities.doSelect(this.Location,locationname);
        utilities.waitForClickable(this.Editshootbtn,true);
        utilities.doClick(this.Editshootbtn);
    }
    addtalentgrid(calltime,lastname,firstname,phone,email,role){
        utilities.doClick(this.Addtalentbtn);
        utilities.waitforDisplayed(this.Calltime,true);
        utilities.dodoubleclick(this.Calltime);
        browser.keys(['Meta',calltime]);
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        browser.keys('ArrowRight');
        browser.pause(1000);
        utilities.waitforDisplayed(this.Lastname,true);
        utilities.dodoubleclick(this.Lastname);
        browser.keys(['Meta',lastname]);
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        browser.keys('ArrowRight');
        browser.pause(1000);
        utilities.waitforDisplayed(this.Firstname,true);
        utilities.dodoubleclick(this.Firstname);
        browser.keys(['Meta',firstname]);
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        browser.keys('ArrowRight');
        browser.pause(1000);
        utilities.waitforDisplayed(this.Phone,true);
        utilities.dodoubleclick(this.Phone);
        browser.keys(['Meta',phone]);
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        browser.keys('ArrowRight');
        browser.pause(1000);
        utilities.waitforDisplayed(this.Email,true);
        utilities.dodoubleclick(this.Email);
        browser.keys(['Meta',email]);
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        browser.keys('ArrowRight');
        browser.pause(1000);
        utilities.waitforDisplayed(this.Role,true);
        utilities.dodoubleclick(this.Role);
        browser.keys(['Meta',role]);
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        browser.keys('ArrowRight');
        browser.pause(1000);
    }
    addtalentbottomfields(rate,description,rate2) {
        utilities.doScroll(this.Jobtitle);
        utilities.waitForClickable(this.Guildcheckbox,true);
        utilities.doClick(this.Guildcheckbox);
        utilities.waitforDisplayed(this.Jobtitle,true);
        utilities.doClick(this.Jobtitle);
        utilities.doClick(this.Jobtitledropdown);
        utilities.waitforDisplayed(this.Rate,true);
        utilities.doClick(this.Rate);
        utilities.doaddValue(this.Rate,rate);
        utilities.doClick(this.Hours);
        utilities.doClick(this.Selecthours);
        utilities.doClick(this.Adjustmentaddlink);
        utilities.doClick(this.Adjustmentselect);
        utilities.doClick(this.Adjustmentopt1);
        utilities.waitForClickable(this.Adjustmentplusbtn,true);
        utilities.doClick(this.Adjustmentplusbtn);
        utilities.waitforDisplayed(this.Adjustmentselect,true);
        utilities.doClick(this.Adjustmentselect);
        utilities.doClick(this.Adjustmentopt2);
        utilities.waitForClickable(this.Adjustmentplusbtn,true);
        utilities.doClick(this.Adjustmentplusbtn);
        utilities.doClick(this.Adjustmentclosebtn);
        utilities.doClick(this.Compensationaddlink);
        utilities.doClick(this.Compensationselect);
        utilities.doClick(this.Compensationopt1);
        utilities.waitForClickable(this.Compensationplusbtn,true);
        utilities.doClick(this.Compensationplusbtn);
        utilities.waitforDisplayed(this.Compensationselect,true);
        utilities.doClick(this.Compensationselect);
        utilities.doClick(this.Compensationopt2);
        utilities.waitForClickable(this.Compensationplusbtn,true);
        utilities.doClick(this.Compensationplusbtn);
        utilities.doClick(this.Compensationclosebtn);
        utilities.doClick(this.Othercompensationaddlink);
        utilities.doClick(this.Othercompensationselect);
        utilities.doClick(this.Othercompensationopt1);
        utilities.doaddValue(this.Othercompensationdesbox,description);
        utilities.waitforDisplayed(this.Othercompensationratebox,true);
        utilities.doaddValue(this.Othercompensationratebox,rate2);
        utilities.doClick(this.Othercompensationplusbtn);
        utilities.waitForClickable(this.Othercompensationselect,true);
        utilities.doClick(this.Othercompensationselect);
        utilities.doClick(this.Othercompensationopt2);
        utilities.waitForClickable(this.Othercompensationplusbtn,true);
        utilities.doClick(this.Othercompensationplusbtn);
        utilities.doClick(this.Othercompensationclosebtn);
        utilities.doClick(this.Submitbtn);
    }
    
}
module.exports = new CreateShoot();