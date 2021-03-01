class utilities{
    doClick(element){
        element.click();
    }
    dodoubleclick(element){
        element.doubleClick();
    }
    doaddValue(element,text){
        element.waitForDisplayed();
        element.addValue(text);
    }
    dosetvalue(element,text){
        element.waitForDisplayed();
        element.setValue(text);
    }
    doMoveTo(element){
        element.waitForDisplayed();
        element.moveTo();
    }
    doScroll(element){
        element.waitForDisplayed();
        element.scrollIntoView();
    }
    doGetText(element){
        element.waitForDisplayed();
        return element.getText();
    }
    doclear(element){
        element.waitForDisplayed();
        element.clearValue();
    }
    getlocator(selector,replace1){
        console.log(replace1);
        return (selector.replace('p1',replace1));
    }
    doSelect(element,value){
        element.selectByVisibleText(value);
    }
    gettextdate(element,value){
        const textdate = element.getAttribute(value);
        console.log("The textdate is:",textdate);
        return textdate;
    }
    doDisplayed(element) {
        element.isDisplayed();
    }
    unHideElement (selector) {
        browser.execute("arguments[0].setAttribute('style','pointer-events:display;')", selector);
    }
    waitforDisplayed (selector,isDisplayed = true) {
       return $(selector).waitForEnabled({
       timeout: 28000,
       reverse: !isDisplayed,
    });
    }
    waitForClickable (selector, isClickable = true) {
        return selector.waitForClickable({
            timeout: 28000,
            reverse: !isClickable,
        });
    }
    waitForWebElement (selector, isExist = true) {
        return selector.waitForExist({
            timeout: 28000,
            reverse: !isExist,
        });
    }
    clearAndSetValue (selector,value) {
        selector.clearValue();
        selector.setValue(value);
    }
    getattribute(element,value){
        element.waitForDisplayed();
        return element.getAttribute(value);
    }
}
module.exports = new utilities();