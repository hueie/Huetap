var calendar;
var pYear;
var pMonth;
var pDate;
var pDay;
var addEntryBtn1 = 1;

var startDate;
var endDate;
var constMilToAday = 24 * 60 * 60 * 1000;


function Calendar() {
    this.db = "";
}
Calendar.prototype.setup = function (callback) {
    this.db = window.openDatabase("huetap", 1.0, "Huetap by Hueie", 5 * 1024 * 1024);
    this.db.transaction(this.initDB, this.InitDBErrorHandler, callback);
};
Calendar.prototype.initDB = function (t) {
    //t.executeSql('drop table huetap_calendar');
    //t.executeSql('drop table huetap_user');

    t.executeSql('create table if not exists huetap_user(user_email TEXT PRIMARY KEY, ' +
        'user_pw TEXT, signup_dt TEXT, status TEXT)');
	//varchar(N) 써도 결국 TEXT로 변환됨
    t.executeSql('create table if not exists huetap_calendar ( '+
		'id INTEGER , ' +
        'info_0 varchar(45) , info_1 varchar(45) , info_2 varchar(45) ,'+
		'info_3 varchar(45) , info_4 varchar(45) , info_5 varchar(45) ,'+
		'info_6 varchar(45) , info_7 varchar(45) , info_8 varchar(45) ,'+
		'info_9 varchar(45) , note varchar(45) ,'+
		'reg_dt varchar(45) NOT NULL , kindId varchar(45) NOT NULL , user_email varchar(45) NOT NULL,'+
		'PRIMARY KEY (reg_dt,kindId,user_email) )');
};
Calendar.prototype.InitDBErrorHandler = function (e) {
    alert("dbInitErrorHandlerr : " + e.code);
    console.log('dbInitErrorHandlerr');
};

Calendar.prototype.dbErrorHandler = function (e) {
    alert("DB Error : " + e.code);

    if (e.code == 0) return;
    console.log('DB Error');
};
Calendar.prototype.getEntries = function (start, callback) {
	
	if (menuType == "hueie") {
        hueie.getEntry(start, callback);
    } else if (menuType == "period") {
        period.getEntry(start, callback);
    } else if (menuType == "diabetes") {
        diabetes.getEntry(start, callback);
    }
};
Calendar.prototype.getEntry = function (reg_dt, callBack) {
    if(menuType == "hueie"){
        hueie.getEntry(reg_dt,callback);
    } else if(menuType == "period"){
        period.getEntry(reg_dt,callback);
    } else if(menuType == "diabetes"){
        diabetes.getEntry(reg_dt,callback);
    }
};
Calendar.prototype.insertEntry = function (data, callback) {
    if(menuType == "hueie"){
        hueie.insertEntry(data,callback);
    } else if(menuType == "period"){
        period.insertEntry(data,callback);
    } else if(menuType == "diabetes"){
        diabetes.insertEntry(data,callback);
    }
};
Calendar.prototype.updateEntry = function (data, callback) {
    if(menuType == "hueie"){
        hueie.updateEntry(data,callback);
    } else if(menuType == "period"){
        period.updateEntry(data,callback);
    } else if(menuType == "diabetes"){
        diabetes.updateEntry(data,callback);
    }
};
Calendar.prototype.fixResults = function (res) {
    var result = [];
    for (var i = 0, len = res.rows.length; i < len; i++) {
        var row = res.rows.item(i);
        result.push(row);
    }
    return result;
};
Calendar.prototype.fixResult = function (res) {
    if (res.rows.length) {
        return res.rows.item(0);
    } else {
        return res.rows.item(0);
    }
};
Calendar.prototype.yearToMonth = function (month) {// 연도달력의 월을 클릭하면
    pMonth = month;
    addEntryBtn1 = 1;
    setStringDateVar(pYear + ".", parseInt(pMonth) + 1, "", "");
    calendar.changeCalendar(pYear, pMonth, pDate);
};

Calendar.prototype.selectSrchDate = function () {
    if (addEntryBtn1 == 1) {
        pYear = parseInt($('select[name=sYear]').val());
        pMonth = parseInt($('select[name=sMonth]').val()) - 1;
        setStringDateVar(pYear + ".", parseInt(pMonth) + 1, "", "");
        calendar.changeCalendar(pYear, pMonth, pDate);

    } else {
        pYear = parseInt($('select[name=sYear]').val());
        setStringDateVar(pYear, "", "", "");
        calendar.changeCalendar(pYear);
    }
};
function strday(day, lang) {
    if (lang == "kr") {
        switch (day) {
            case 0:
                return "일";
            case 1:
                return "월";
            case 2:
                return "화";
            case 3:
                return "수";
            case 4:
                return "목";
            case 5:
                return "금";
            case 6:
                return "토";
        }
    }
    if (lang == "en") {
        switch (day) {
            case 0:
                return "Sun.";
            case 1:
                return "Mon.";
            case 2:
                return "Tues.";
            case 3:
                return "Wed.";
            case 4:
                return "Thurs.";
            case 5:
                return "Fri.";
            case 6:
                return "Sat.";
        }
    }
}
//month calendar only have day
Calendar.prototype.makeMonthCalendar = function (pyy, pmm, pdd) {
    var day = "<tr id='day' style='height: "+dayHeight+"px; font-size:"+dayFontSize+"px;font-family: nanum-barun-gothic-bold;color: white;background-color:"+themeColorMain+";'><td>Sun.</td><td>Mon.</td><td>Tues.</td><td>Wed.</td><td>Thurs.</td><td>Fri.</td><td>Sat.</td></tr>";
    var content = "<table width='100%' id='entryTable' style='font-size:"+dayFontSize+"px;text-align: left;'><tbody>" +
        "<colgroup><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/></colgroup>"
        + day + calendar.makeCalendar(pyy, pmm, pdd) + "</tbody></table>";
    return content;
};
Calendar.prototype.makeCalendar = function (pyy, pmm, pdd) {
    var today = new Date();//pdd
    today.setFullYear(pyy, pmm,1 );
    var yy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var day = today.getDay();

    var minusWeekNum = parseInt(((dd - day) / 7) + 1);
    var strtdd = (dd - day - minusWeekNum * 7);
    var firstDay = new Date();
    firstDay.setFullYear(yy, mm - 1, strtdd);

    var content = "";
    var style = "";
    for (var i = 0; i < 6; i++) {
        content = content + "<tr style='padding: 0; margin: 0;'>";
        for (var j = 0; j < 7; j++) {
            var fontColor = "black";
            var fyy = firstDay.getFullYear();
            var fmm = firstDay.getMonth() + 1;
            var fdd = firstDay.getDate();
            var str = "" + fyy + "," + fmm + "," + fdd;
            var sfmm = fmm;
            var sfdd = fdd;
            if (parseInt(fmm) < 10) {
                sfmm = "0" + fmm;
            }
            if (parseInt(fdd) < 10) {
                sfdd = "0" + fdd;
            }
            var reg_dt = fyy + "" + sfmm + "" + sfdd;
            if (i == 0 && j == 0) {
                startDate = reg_dt;
            } else if (i == 5 && j == 6) {
                endDate = reg_dt;
            }
            if (firstDay.getMonth() == today.getMonth()) {
                fdd = "<strong>" + fdd + "</strong>";
            }
            if (j == 0) {
                fontColor = "red";
            } else if (j == 6) {
                fontColor = "blue";
            }


            var tmpHeight = parseInt( ( (totalHeight) - (noticHeight + calMenuHeight + mainMenuHeight + dayHeight) ) / 6 );

            content = content + "<td style='height: " + tmpHeight + "px;' id='" + reg_dt + "' name='caldate' ><a href='#' onclick='calendar.inputDateData(" + str + ")' style='width:100%; height: " + tmpHeight + "px;display:inline-block;text-decoration:none;color:" + fontColor + ";'>" + fdd + "</a></td>";
            firstDay.setDate(firstDay.getDate() + 1);
        }
        content = content + "</tr>";
    }
    return content;
};
Calendar.prototype.makeYearCalendar = function (pyy) {

    var tmpHeight = parseInt( ( (totalHeight) - (noticHeight + calMenuHeight + mainMenuHeight + monthHeight*4 )) / 4 );
    var calendars = "";

    for (var i = 0; i < 4; i++) {
        calendars = calendars + "<tr style='height: " + tmpHeight + "px; '>";
        for (var j = 0; j < 3; j++) {
            var curMonth = i * 3 + j + 1;
            var curMonthMinus = curMonth - 1;
            calendars = calendars + "<td style='border: 1px solid ; border-color: "+themeColorMain+";'> " +
                "<a href='#' onclick='calendar.yearToMonth(" + curMonthMinus + ")' style='text-decoration : none;color:black;'>" +
                "<table  id='entryInnerTable' class='table' style='font-size:"+monthDayFontSize+"px;padding:0;margin: 0;' ><div  style='text-align: center; display:inline-block; background-color: "+themeColorMain+"; width:100%; height:"+monthHeight+"px;font-size:"+monthFontSize+"px;padding:0;margin: 0;font-family: nanum-barun-gothic-bold;color: white;'>" + curMonth + "</div>" +
                "<colgroup><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/><col width='14%'/></colgroup>"
                + calendar.makeBlankCalendar(pyy, curMonthMinus, 1)
                + "</table></a></td>";
        }
        calendars = calendars + "</tr>";
    }
    var content = "<table id='entryTable' class='table'  ><tbody><colgroup><col width='33%'/><col width='33%'/><col width='33%'/></colgroup>" + calendars + "</tbody></table>";
    return content;
};
Calendar.prototype.makeBlankCalendar = function (pyy, pmm, pdd) {

    var tmpHeight = parseFloat ( ( (totalHeight) - (noticHeight + calMenuHeight + mainMenuHeight + monthHeight*4 + 13) ) / 24 ) ; //+13 냐 12에 따라 달라짐여기서 전체 달력 높이 보임

    var today = new Date();
    today.setFullYear(pyy, pmm, pdd);
    var yy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var day = today.getDay();

    var minusWeekNum = parseInt(((dd - day) / 7) + 1);
    var strtdd = (dd - day - minusWeekNum * 7);
    var firstDay = new Date();
    firstDay.setFullYear(yy, mm - 1, strtdd);
    startDate = yy + "0101";
    endDate = yy + "1231";

    var content = "";
    var style = "";

    for (var i = 0; i < 6; i++) {
        content = content + "<tr style='height: " + tmpHeight + "px;'>";
        for (var j = 0; j < 7; j++) {
            if (firstDay.getMonth() == today.getMonth()) {
                var fontColor ="black";
                var fyy = firstDay.getFullYear();
                var fmm = firstDay.getMonth() + 1;
                var fdd = firstDay.getDate();
                var str = "" + fyy + "," + fmm + "," + fdd;
                var sfmm = fmm;
                var sfdd = fdd;

                if (parseInt(fmm) < 10) {
                    sfmm = "0" + fmm;
                }
                if (parseInt(fdd) < 10) {
                    sfdd = "0" + fdd;
                }


                if (firstDay.getMonth() == today.getMonth()) {
                    fdd = "<strong>" + fdd + "</strong>";
                }
                if (j == 0) {
                    fontColor = "red";
                } else if (j == 6) {
                    fontColor = "blue";
                }

                var reg_dt = fyy + "" + sfmm + "" + sfdd;
                content = content + "<td id='" + reg_dt + "' name='caldate' ><a href='#' onclick='calendar.inputDateData(" + str + ")' style='height: " + tmpHeight + "px;display:inline-block;text-decoration:none;color:" + fontColor + ";'>" + fdd + "</a></td>";
            } else {
                content = content + "<td></td>"
            }
            firstDay.setDate(firstDay.getDate() + 1);
        }
        content = content + "</tr>";
    }
    return content;
};
Calendar.prototype.changeCalendar = function (pYear, pMonth, pDate) {
    if (addEntryBtn1 == 1) {
        $('#entryTable').replaceWith(calendar.makeMonthCalendar(pYear, pMonth, pDate));
        if(menuType == "hueie"){
            hueie.checkDateData();
            hueie.checkHueieData();
        } else if(menuType == "period") {
            period.checkDateData();
            period.checkPeriodData();
        } else if(menuType == "diabetes") {
            diabetes.checkDateData();
            diabetes.checkPeriodData();
        }
    } else if (addEntryBtn1 == 2) {
        $('#entryTable').replaceWith(calendar.makeYearCalendar(pYear));
        if(menuType == "hueie"){
            hueie.checkDateData();
            hueie.checkHueieData();
        } else if(menuType == "period") {
            period.checkDateData();
            period.checkPeriodData();
        } else if(menuType == "diabetes") {
            diabetes.checkDateData();
            diabetes.checkPeriodData();
        }
    }
};
Calendar.prototype.inputDateData = function (pyy, pmm, pdd) {
    if(menuType == "hueie"){
        hueie.inputDateData(pyy,pmm,pdd);
    } else if(menuType == "period"){
        period.inputDateData(pyy,pmm,pdd);
    } else if(menuType == "diabetes"){
        diabetes.inputDateData(pyy,pmm,pdd);
    }
};
$(document).on("tap", "#addEntryBtn2", function (e) {
    $('#addEntryBtn1').css('display', 'inline-block');
    addEntryBtn1 = 1;
    setStringDateVar(pYear + ".", parseInt(pMonth) + 1, "", "");
    calendar.changeCalendar(pYear, pMonth, pDate);
});
$(document).on("tap", "#addEntryBtn3", function (e) {
    $('#addEntryBtn1').css('display', 'inline-block');
    addEntryBtn1 = 2;
    setStringDateVar(pYear, "", "", "");
    calendar.changeCalendar(pYear);
});
$(document).on("tap", "#addEntryBtn4", function (e) {
    $('#addEntryBtn1').css('display', 'none');
    var today = new Date();
    var yy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var day = today.getDay();
    setStringDateVar(yy + ".", mm + ".", dd + ".", " " );
    if (addEntryBtn1 != 4) {
        addEntryBtn1 = 4;
        if(menuType == "hueie"){
            hueie.infoList();
        } else if(menuType == "period"){
            period.infoList();
        } else if(menuType == "diabetes"){
            diabetes.infoList();
        }
    }
});
$(document).on("tap", "#addEntrySubmit", function (e) {
    //grab the values
    var info_0 = "0";var info_1 = "0";var info_2 = "0";var info_3 = "0";var info_4 = "0";var info_5 = "0";var info_6 = "0";
    var reg_dt = $("#reg_dt").val();

    if(menuType == "hueie"){

    } else if(menuType == "period"){
        if ($("#info_0").prop('checked') == true) { info_0 = 1; }
        if ($("#info_1").prop('checked') == true) { info_1 = 1; }
        if ($("#info_2").prop('checked') == true) { info_2 = 1; }
        if ($("#info_3").prop('checked') == true) { info_3 = 1; }
        if ($("#info_4").prop('checked') == true) { info_4 = 1; }
        if ($("#info_5").prop('checked') == true) { info_5 = 1; }
        if ($("#info_6").prop('checked') == true) { info_6 = 1; }
    } else if(menuType == "diabetes"){
        if ($("#info_0").val() != "" ) { info_0 = $("#info_0").val(); }
        if ($("#info_1").val() != "" ) { info_1 = $("#info_1").val(); }
        if ($("#info_2").val() != "" ) { info_2 = $("#info_2").val(); }
        if ($("#info_3").prop('checked') == true) { info_3 = 1; }
        if ($("#info_4").prop('checked') == true) { info_4 = 1; }
        if ($("#info_5").prop('checked') == true) { info_5 = 1; }
        if ($("#info_6").prop('checked') == true) { info_6 = 1; }
    }

    //store!
    if ($("#existed").val() == 1) {
        calendar.updateEntry({
            info_0: info_0,
            info_1: info_1,
            info_2: info_2,
            info_3: info_3,
            info_4: info_4,
            info_5: info_5,
            info_6: info_6,
            reg_dt: reg_dt
        }, function () {
            pop_up_layer_close();
            layer_pop_close();
            pageLoad("calendar.html");
        });
    } else {
        calendar.insertEntry({
            info_0: info_0,
            info_1: info_1,
            info_2: info_2,
            info_3: info_3,
            info_4: info_4,
            info_5: info_5,
            info_6: info_6,
            reg_dt: reg_dt
        }, function () {
            pop_up_layer_close();
            layer_pop_close();
            pageLoad("calendar.html");
        });
    }
});
$(document).on("swipeRight", "#entryTable", function (e) {
    if (addEntryBtn1 == 1) {
        pMonth = pMonth - 1;
        if (pMonth == -1) {
            pMonth = 11;
            pYear = pYear - 1;
        }
        setStringDateVar(pYear + ".", parseInt(pMonth) + 1, "", "");
        calendar.changeCalendar(pYear, pMonth, pDate);
    } else if (addEntryBtn1 == 2) {
        pYear = pYear - 1;
        setStringDateVar(pYear, "", "", "");
        calendar.changeCalendar(pYear);
    }
});
$(document).on("swipeLeft", "#entryTable", function (e) {
    if (addEntryBtn1 == 1) {
        pMonth = pMonth + 1;
        if (pMonth == 12) {
            pMonth = 0;
            pYear = pYear + 1;
        }
        setStringDateVar(pYear + ".", parseInt(pMonth) + 1, "", "");
        calendar.changeCalendar(pYear, pMonth, pDate);
    } else if (addEntryBtn1 == 2) {
        pYear = pYear + 1;
        setStringDateVar(pYear, "", "", "");
        calendar.changeCalendar(pYear);
    }
});

//검색 할 날짜 팝업
$(document).on("tap", "#addEntryBtn1", function (e) {
    var yContent = "";
    var mContent = "";
    for (var i = 0; i < 30; i++) {
        var tmp = pYear - 15 + i;
        yContent = yContent + "<option value='" + tmp + "'";
        if (tmp == pYear) {
            yContent = yContent + "selected='selected'";
        }
        yContent = yContent + ">" + tmp + "</option>";
    }
    for (var i = 0; i < 12; i++) {
        var tmp = i + 1;
        mContent = mContent + "<option value='" + tmp + "'";
        if (tmp - 1 == pMonth) {
            mContent = mContent + "selected='selected'";
        }
        mContent = mContent + ">" + tmp + "</option>";
    }
    var inputPopUp = "<div id='popup' class='pop_up_layer' style='color:"+themeColorHighLight+";background-color: antiquewhite;border-radius: 15px;font-family: nanum-barun-gothic-bold;'>" +
        "<table width='100%' style='margin-top: 10px; text-align: center;border-color: "+themeColorMain+"'>" ;
    if (addEntryBtn1 == 1) {
        inputPopUp = inputPopUp + "<tr >" +
            "<td  style='height:"+searchFontSize+"px;'>" +
            "<select name='sYear' style='height:100%;font-size:"+searchFontSize+"px;text-align: center;background-color:"+themeColorMain+";border-color:"+themeColorDeep+";'>" + yContent + "</select>" +
            "</td>"+
            "<td >" +
            "<select name='sMonth' style='height:100%;font-size:"+searchFontSize+"px;text-align: center;background-color:"+themeColorMain+";border-color:"+themeColorDeep+";'>" + mContent + "</select>" +
            "</td>" ;
    }
    if (addEntryBtn1 == 2) {
        inputPopUp = inputPopUp + "<tr >" +
            "<td  style='height:20px;'>" +
            "<select name='sYear' style='height:100%;font-size:"+searchFontSize+"px;text-align: center;background-color:"+themeColorMain+";border-color:"+themeColorDeep+";'>" + yContent + "</select>" +
            "</td>" ;
    }
    inputPopUp = inputPopUp +
        "<td><a style='display:inline-block;height:100%;' onclick='calendar.selectSrchDate();pop_up_layer_close();layer_pop_close(); '><div class='greenCheck'></div></a></td>" +
        "</tr>" +
        "</table></div>" ;
    opacity_bg_layer();
    pop_up_layer(inputPopUp, screenWidth*2/3, searchFontSize*2, screenWidth/6,(screenHeight - searchFontSize*2)/2);
});