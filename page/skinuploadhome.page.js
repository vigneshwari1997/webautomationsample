import skinuploadpageobjects from '../pageobjects/skinuploadhome.pageobjects';
import  base from '../helper/base';
import  utilities, { waitForClickable } from '../helper/utilties';
import {assert, expect} from 'chai';

let green ="color: rgb(0, 178, 111);";
let red = "color: rgb(247, 126, 139);";
let grey = "color: rgb(179, 179, 179);";

class CreateShoot {
    get Shootfield() {return $(skinuploadpageobjects.shootfield);}
    get Showname() {return $(skinuploadpageobjects.showname);}
    get Location() {return $(skinuploadpageobjects.location);}
    get Shootdate() {return $(skinuploadpageobjects.shootdate);}
    get Cancelbtn() {return $(skinuploadpageobjects.cancelbtn);}
    get Createshootbtn() {return $(skinuploadpageobjects.createshootbtn);}
    get Cleardateicon() {return $(skinuploadpageobjects.cleardateicon);}
    get Editshootbtn() {return $(skinuploadpageobjects.editshootbtn);}
    get Selectshoot() {return $(skinuploadpageobjects.selectshoot);}
    get Selectshoot1() {return $(skinuploadpageobjects.selectshoot1);}
    get Selectshoot2() {return $(skinuploadpageobjects.selectshoot2);}
    get Selectshowname() {return $(skinuploadpageobjects.selectshowname);}
    get Selectshowname1() {return $(skinuploadpageobjects.selectshowname1);}
    get Selectlocation() {return $(skinuploadpageobjects.selectlocation);}
    get Selectlocation1() {return $(skinuploadpageobjects.selectlocation1);}
    get Calendaricon() {return $(skinuploadpageobjects.calendaricon);}
    get Selectdate1() {return $(skinuploadpageobjects.selectdate1);}
    get Selectdate2() {return $(skinuploadpageobjects.selectdate2);}
    get Createlocationbtn() {return $(skinuploadpageobjects.createlocationbtn);}
    get Locationname() {return $(skinuploadpageobjects.locationname);}
    get Statename() {return $(skinuploadpageobjects.statename);}
    get Selectstate() {return $(skinuploadpageobjects.selectstate);}
    get Shownamefield() {return $(skinuploadpageobjects.shownamefield);}
    get Country() {return $(skinuploadpageobjects.country);}
    get Selectcountry() {return $(skinuploadpageobjects.selectcountry);}
    get Savebtn() {return $(skinuploadpageobjects.savebtn);}
    get Closebtn1() {return $(skinuploadpageobjects.closebtn1);}
    get Cdicon() {return $(skinuploadpageobjects.cdicon);}
    get Logoutbtn() {return $(skinuploadpageobjects.logoutbtn);}
    get Newlocation() {return $(skinuploadpageobjects.newlocation);}
    get Addtalentbtn() {return $(skinuploadpageobjects.addtalentbtn);}
    get Calltime() {return $(skinuploadpageobjects.calltimefield);}
    get Lastname() {return $(skinuploadpageobjects.lastname);}
    get Firstname() {return $(skinuploadpageobjects.firstname);}
    get Phone() {return $(skinuploadpageobjects.phone);}
    get Email() {return $(skinuploadpageobjects.email);}
    get Role() {return $(skinuploadpageobjects.role);}
    get Jobtitle() {return $(skinuploadpageobjects.jobtitle);}
    get Rate() {return $(skinuploadpageobjects.rate);}
    get Hours() {return $(skinuploadpageobjects.hours);}
    get Submitbtn() {return $(skinuploadpageobjects.submitbtn);}
    get Talentcancelbtn() {return $(skinuploadpageobjects.talentcancelbtn);}
    get Addtalentbtn() {return $(skinuploadpageobjects.addtalentbtn);}
    get Calltime() {return $(skinuploadpageobjects.calltime);}
    get Lastname() {return $(skinuploadpageobjects.lastname);}
    get Firstname() {return $(skinuploadpageobjects.firstname);}
    get Phone() {return $(skinuploadpageobjects.phone);}
    get Email() {return $(skinuploadpageobjects.email);}
    get Role() {return $(skinuploadpageobjects.role);}
    get Rolecheckbox() {return $(skinuploadpageobjects.rolecheckbox);}
    get Roletextfield() {return $(skinuploadpageobjects.roletxtfield);}
    get Calltimecheckbox() {return $(skinuploadpageobjects.calltimecheckbox);}
    get Calltimeicon() {return $(skinuploadpageobjects.calltimeicon);}
    get Tbdcheckbox() {return $(skinuploadpageobjects.tbdcheckbox);}
    get Jobtitle() {return $(skinuploadpageobjects.jobtitle);}
    get Jobtitledropdown() {return $(skinuploadpageobjects.jobtitledropdown);}
    get Rate() {return $(skinuploadpageobjects.rate);}
    get Hours() {return $(skinuploadpageobjects.hours);}
    get Selecthours() {return $(skinuploadpageobjects.selecthours);}
    get Guildcheckbox() {return $(skinuploadpageobjects.guildcheckbox);}
    get Adjustmentaddlink() {return $(skinuploadpageobjects.adjustmentaddlink);}
    get Adjustmentselect() {return $(skinuploadpageobjects.adjustmentselect);}
    get Adjustmentopt1() {return $(skinuploadpageobjects.adjustmentopt1);}
    get Adjustmentopt2() {return $(skinuploadpageobjects.adjustmentopt2);}
    get Adjustmentplusbtn() {return $(skinuploadpageobjects.adjustmentplusbtn);}
    get Adjustmentclosebtn() {return $(skinuploadpageobjects.adjustmentclosebtn);}
    get Compensationaddlink() {return $(skinuploadpageobjects.compensationaddlink);}
    get Compensationselect() {return $(skinuploadpageobjects.compensationselect);}
    get Compensationopt1() {return $(skinuploadpageobjects.compensationopt1);}
    get Compensationopt2() {return $(skinuploadpageobjects.compensationopt2);}
    get Compensationplusbtn() {return $(skinuploadpageobjects.compensationplusbtn);}
    get Compensationclosebtn() {return $(skinuploadpageobjects.compensationclosebtn);}
    get Othercompensationaddlink() {return $(skinuploadpageobjects.othercompensationaddlink);}
    get Othercompensationselect() {return $(skinuploadpageobjects.othercompensationselect);}
    get Othercompensationopt1() {return $(skinuploadpageobjects.othercompensationopt1);}
    get Othercompensationopt2() {return $(skinuploadpageobjects.othercompensationopt2);}
    get Othercompensationplusbtn() {return $(skinuploadpageobjects.othercompensationplusbtn);}
    get Othercompensationdesbox() {return $(skinuploadpageobjects.othercompensationdesbox);}
    get Othercompensationratebox() {return $(skinuploadpageobjects.othercompensationratebox);}
    get Othercompensationclosebtn() {return $(skinuploadpageobjects.othercompensationclosebtn);}
    get addSubmitbtn() {return $(skinuploadpageobjects.addsubmitbtn);}
    get addCancelbtn() {return $(skinuploadpageobjects.addcancelbtn);}
    get Actionscheckout() {return $(skinuploadpageobjects.actionscheckout);}
    //get Actionscheckinclkshoot1() {return $$(skinuploadpageobjects.actionscheckinshoot1)[0];}
    get Actionscheckinclkshoot1() {return $(skinuploadpageobjects.actionscheckinshoot1);}
    get Actionsclkshoot2() {return $(skinuploadpageobjects.actionsclkshoot2);}
    get Actionszero() {return $(skinuploadpageobjects.actionszero);}
    get Elipsebtn() {return $(skinuploadpageobjects.elipsebtn);}
    get View() {return $(skinuploadpageobjects.view);}
    get Viewclose() {return $(skinuploadpageobjects.viewclose);}
    get Edit() {return $(skinuploadpageobjects.edit);}
    get Editcancel() {return $(skinuploadpageobjects.editcancel);}
    get Delete() {return $(skinuploadpageobjects.delete);}
    get Deleteno() {return $(skinuploadpageobjects.deleteno);}
    get Messageicon() {return $(skinuploadpageobjects.messageicon);}
    get Entermsgfield() {return $(skinuploadpageobjects.entermsgfield);}
    get Msgsendicon() {return $(skinuploadpageobjects.msgsendicon);}
    get Msgcloseicon() {return $(skinuploadpageobjects.msgcloseicon);}
    get Projectlocation() {return $(skinuploadpageobjects.projectlocation);}
    get Projectselectfield() {return $(skinuploadpageobjects.projectselectfield);}
    get Projectselectopt() {return $(skinuploadpageobjects.projectselectopt);}
    get Projectaddnew() {return $(skinuploadpageobjects.projectaddnew);}
    get Projectlocationtxtfield() {return $(skinuploadpageobjects.projectlocationtxtfield);}
    get Projectstatefield() {return $(skinuploadpageobjects.projectstatefield);}
    get Projectstateselect() {return $(skinuploadpageobjects.projectstateselect);}
    get Projectsavebtn() {return $(skinuploadpageobjects.projectsavebtn);}
    get Projectclosebtn() {return $(skinuploadpageobjects.projectclosebtn);}
    get Deletecheckbox() {return $(skinuploadpageobjects.deletecheckbox);}
    get Deletetalentbtn() {return $(skinuploadpageobjects.deletetalentbtn);}
    get Deletebulkno() {return $(skinuploadpageobjects.deletebulkno);}


    createshoot() {
        utilities.doClick(this.Showname);
        utilities.doClick(this.Selectshowname);
        utilities.doClick(this.Location);
        utilities.doClick(this.Selectlocation);
        utilities.doClick(this.Calendaricon);
        utilities.doClick(this.Selectdate1);
        utilities.waitForClickable(this.Createshootbtn,true);
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
    
    viewandedittheshootcreated(){
        utilities.doClick(this.Showname);
        utilities.doClick(this.Selectshowname1);
        utilities.doClick(this.Location);
        utilities.doClick(this.Selectlocation);
        utilities.doClick(this.Calendaricon);
        utilities.doClick(this.Selectdate1);
        utilities.waitForClickable(this.Createshootbtn,true);
        utilities.doClick(this.Createshootbtn);
        utilities.doClick(this.Location);
        utilities.doClick(this.Selectlocation1);
        utilities.waitForClickable(this.Editshootbtn,true);
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
        utilities.waitForClickable(this.Cancelbtn,true);
        utilities.doClick(this.Cancelbtn);
    }
    addtalentmandatoryfields(calltime,lastname,firstname,phone,email,role,rate){
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
        utilities.waitForClickable(this.Submitbtn,true);
        utilities.doClick(this.Submitbtn);
    }
    addtalentwithbottomfields(lastname,firstname,phone,email,rate,role,description,rate2) {
        utilities.doClick(this.Addtalentbtn);
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
        utilities.doScroll(this.Jobtitle);
        utilities.doClick(this.Rolecheckbox);
        utilities.doClick(this.Roletextfield);
        utilities.dosetvalue(this.Roletextfield,role)
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
        utilities.waitForClickable(this.Submitbtn,true);
        utilities.doClick(this.Submitbtn);
    }
    infooftalent(){
        utilities.doClick(this.Shootfield);
        utilities.doClick(this.Selectshoot1);
        let clockclr = utilities.getattribute(this.Actionscheckinclkshoot1,'style');

        if(clockclr== red){
            utilities.doClick(this.Elipsebtn);
            utilities.doClick(this.View);
            utilities.doClick(this.Viewclose);
            browser.pause(2000);
        }
        else if(clockclr == grey){
             utilities.doClick(this.Elipsebtn);
             utilities.doClick(this.Delete);
             utilities.doClick(this.Deleteno);
             browser.pause(2000);
        }
        else if(clockclr == green){
            utilities.doClick(this.Elipsebtn);
            utilities.doClick(this.Edit);
            utilities.doClick(this.Editcancel);
            browser.pause(2000);
        }
    
    }
    messagetoad(message){
        utilities.doClick(this.Shootfield);
        utilities.doClick(this.Selectshoot1);
        utilities.doScroll(this.Messageicon);
        utilities.doClick(this.Messageicon);
        utilities.doClick(this.Entermsgfield);
        utilities.dosetvalue(this.Entermsgfield,message);
        utilities.doClick(this.Msgsendicon);
        utilities.waitForClickable(this.Msgcloseicon,true);
        utilities.doClick(this.Msgcloseicon);
        utilities.doMoveTo(this.Cdicon);
    }
    projectlocation(projectlocation){
        utilities.doClick(this.Projectlocation);
        utilities.doClick(this.Projectselectfield);
        utilities.doClick(this.Projectselectopt);
        utilities.doClick(this.Projectaddnew);
        utilities.doClick(this.Projectlocationtxtfield);
        utilities.dosetvalue(this.Projectlocationtxtfield,projectlocation);
        utilities.doClick(this.Projectstatefield);
        utilities.doClick(this.Projectstateselect);
        utilities.doClick(this.Projectsavebtn);
    }
    deletetalentindividual(){
        utilities.doClick(this.Shootfield);
        utilities.doClick(this.Selectshoot2);
        let clk = utilities.getattribute(this.Actionsclkshoot2,'style');
        if(clk == grey){
            utilities.doClick(this.Elipsebtn);
            utilities.doClick(this.Delete);
            utilities.doClick(this.Deleteno);
        }
    }
    deletetalentbulk(){
        utilities.doClick(this.Shootfield);
        utilities.doClick(this.Selectshoot2);
        let clk = utilities.getattribute(this.Actionsclkshoot2,'style');
        if(clk == grey){
            utilities.doClick(this.Deletecheckbox);
            utilities.doClick(this.Deletetalentbtn);
            utilities.doClick(this.Deletebulkno);
        }
    }
}
module.exports = new CreateShoot();