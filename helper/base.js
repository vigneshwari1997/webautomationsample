class baseUtil {
    //method

    getcurrentdate(){
        let todaydate = new Date();
        let date = todaydate.getDate();
        let month = todaydate.getMonth();
        let year = todaydate.getFullYear();
        if(date<10){
            date='0'+date;
        }
        if(month<10){
            month = month + 1; 
            month = '0'+month;
        }
        let deriveddate = month+'/'+date+'/'+year;
        console.log("Today is:",deriveddate);
        return deriveddate;
    }
   
}
module.exports = new baseUtil();