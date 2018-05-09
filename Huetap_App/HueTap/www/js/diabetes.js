var diabetes = new Diabetes();
function Diabetes() {
}
Diabetes.prototype.getEntries = function (start, callback) {
    console.log('Running getEntries');
    if (arguments.length === 1) callback = arguments[0];
    calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where kindId = 2 and user_email = ? order by reg_dt desc', [glbSignedUserEmail],
                function (t, results) {
                    callback(calendar.fixResults(results));
                }, calendar.dbErrorHandler);
        }, calendar.dbErrorHandler);
};
Diabetes.prototype.getEntry = function (reg_dt, callBack) {
    calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt = ? and kindId = 2 and user_email = ? ', [reg_dt, glbSignedUserEmail],
                function (t, results) {
                    if (results.rows.length == 0) return;
                    var tt = results.rows.item(0);
                    var result12 = {info_1: tt['info_1']};
                    callBack(results);
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, function () {
        });
};
Diabetes.prototype.insertEntry = function (data, callback) {
    calendar.db.transaction(
        function (t) {
            t.executeSql(
                'insert into huetap_calendar(id,info_0,info_1,info_2,info_3,info_4,info_5,info_6,reg_dt,kindId,user_email) values(NULL,?, ?, ?, ?, ?, ?, ?, ?,2,?)',
                [data.info_0, data.info_1, data.info_2, data.info_3, data.info_4, data.info_5, data.info_6, data.reg_dt,glbSignedUserEmail],
                function () {
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, callback);
};
Diabetes.prototype.updateEntry = function (data, callback) {
    calendar.db.transaction(
        function (t) {
            t.executeSql(
                'update huetap_calendar set info_0=?,info_1=?,info_2=?,info_3=?,info_4=?,info_5=?,info_6=? where reg_dt = ? and kindId = 2 and user_email = ?',
                [data.info_0, data.info_1, data.info_2, data.info_3, data.info_4, data.info_5, data.info_6, data.reg_dt, glbSignedUserEmail],
                function (tx, rs) {
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, callback);
};
Diabetes.prototype.checkDateData = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt between ? and ? and kindId = 2 and user_email = ?  order by reg_dt asc', [startDate, endDate,glbSignedUserEmail],
                function (t, ob) {
                    var j = 0;
                    var checkDiabetes;
                    if (addEntryBtn1 == 1) {
                        checkDiabetes = 42;
                    } else if (addEntryBtn1 == 2) {
                        checkDiabetes = 365
                    }
                    for (var i = 0; i < checkDiabetes; i++) {
                        var target = $('td[name=caldate]').eq(i);//.child();
                        var curDate2 = target.prop('id');
                        if (curDate2 == ob.rows.item(j)['reg_dt']) {
                            if (addEntryBtn1 == 1) {
                                if ( 100 > parseInt(ob.rows.item(j)['info_0']) && parseInt(ob.rows.item(j)['info_0']) > 0 ) {
                                    target.find('a').append('<div class=\"diabetes_morning_green\"></div>');
                                } else if ( 200 > parseInt(ob.rows.item(j)['info_0']) && parseInt(ob.rows.item(j)['info_0']) >= 100 ) {
                                    target.find('a').append('<div class=\"diabetes_morning_yellow\"></div>');
                                }  else if (parseInt(ob.rows.item(j)['info_0']) >= 200 ) {
                                    target.find('a').append('<div class=\"diabetes_morning_red\"></div>');
                                }
                                if ( 100 > parseInt(ob.rows.item(j)['info_1']) && parseInt(ob.rows.item(j)['info_1']) > 0 ) {
                                    target.find('a').append('<div class=\"diabetes_noon_green\"></div>');
                                } else if ( 200 > parseInt(ob.rows.item(j)['info_1']) && parseInt(ob.rows.item(j)['info_1']) >= 100 ) {
                                    target.find('a').append('<div class=\"diabetes_noon_yellow\"></div>');
                                } else if (parseInt(ob.rows.item(j)['info_1']) >= 200 ) {
                                    target.find('a').append('<div class=\"diabetes_noon_red\"></div>');
                                }
                                if ( 100 > parseInt(ob.rows.item(j)['info_2']) && parseInt(ob.rows.item(j)['info_2']) > 0 ) {
                                    target.find('a').append('<div class=\"diabetes_night_green\"></div>');
                                } else if ( 200 > parseInt(ob.rows.item(j)['info_2']) && parseInt(ob.rows.item(j)['info_2']) >= 100 ) {
                                    target.find('a').append('<div class=\"diabetes_night_yellow\"></div>');
                                } else if (parseInt(ob.rows.item(j)['info_2']) >= 200 ) {
                                    target.find('a').append('<div class=\"diabetes_night_red\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_3']) == 1) {
                                    target.find('a').append('<div class=\"diabetes_exercise_red\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_4']) == 1) {
                                    target.find('a').append('<div class=\"diabetes_pill_red\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_5']) == 1) {
                                    target.find('a').append('<div class=\"diabetes_injection_red\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_6']) == 1) {
                                    target.find('a').append('<div class=\"diabetes_hospital_red\"></div>');
                                }
                            }
                            if (addEntryBtn1 == 2) {
                                var total = parseInt(ob.rows.item(j)['info_0']) + parseInt(ob.rows.item(j)['info_1']) + parseInt(ob.rows.item(j)['info_2']);
                                if (300 > total && total > 0) {
                                    target.css('background-color', 'skyblue');
                                }
                                if (450 > total && total >= 300) {
                                    target.css('background-color', 'green');
                                }
                                if (600 > total && total >= 450) {
                                    target.css('background-color', 'yellow');
                                }
                                if ( total >= 600) {
                                    target.css('background-color', 'red');
                                }

                            }

                            j++;
                        }
                    }
                }, null);
        },
        null);
}

//Advanced
Diabetes.prototype.checkDiabetesData = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, reg_dt from huetap_calendar where kindId = 2 and user_email = ? order by reg_dt asc', [glbSignedUserEmail],
                function (t, ob) {
                    var target = $('td[name=caldate]');
                    var cYear = target.eq(0);
                    cYear = cYear.prop('id');
                    var calcYear = new Date(cYear.substring(0, 4), parseInt(cYear.substring(4, 6)) - 1, cYear.substring(6, 8));
                    var fYear = target.eq(-1);
                    fYear = fYear.prop('id');
                    var calfYear = new Date(fYear.substring(0, 4), parseInt(fYear.substring(4, 6)) - 1, fYear.substring(6, 8));

                    var diabetesStart = "";
                    var diabetesEnd = "";
                    var calDiabetesStart = "";
                    var calDiabetesEnd = "";
                    var preDiabetesStart = "";
                    var calPreDiabetesStart = new Date(1900, 1 - 1, 1);

                    var diabetesCycle = 0;

                    var maxLength =0;
                    if (addEntryBtn1 == 1) {
                        maxLength = 42;
                    } else if (addEntryBtn1 == 2) {
                        maxLength = 42*12;
                    }

                    for (var i = 0; i < ob.rows.length; i++) {


                    }
                }, null);
        },
        null);
}


Diabetes.prototype.inputDateData = function (pyy, pmm, pdd) {
    if (addEntryBtn1 == 1) {
        var sfmm = pmm;
        var sfdd = pdd;
        if (parseInt(pmm) < 10) {
            sfmm = "0" + pmm;
        }
        if (parseInt(pdd) < 10) {
            sfdd = "0" + pdd;
        }
        var reg_dt = pyy + "" + sfmm + "" + sfdd;

        var startCalRegDt = new Date(reg_dt.substring(0, 4), parseInt(reg_dt.substring(4, 6)) - 1, parseInt(reg_dt.substring(6, 8)) - 7);
        var endCalRegDt = new Date(reg_dt.substring(0, 4), parseInt(reg_dt.substring(4, 6)) - 1, parseInt(reg_dt.substring(6, 8)) + 7);

        var yy = startCalRegDt.getFullYear();
        var mm = startCalRegDt.getMonth() + 1;
        var dd = startCalRegDt.getDate();
        if (parseInt(mm) < 10) {
            mm = "0" + mm;
        }
        if (parseInt(dd) < 10) {
            dd = "0" + dd;
        }
        var startRegDt = yy + "" + mm + "" + dd;

        yy = endCalRegDt.getFullYear();
        mm = endCalRegDt.getMonth() + 1;
        dd = endCalRegDt.getDate();
        if (parseInt(mm) < 10) {
            mm = "0" + mm;
        }
        if (parseInt(dd) < 10) {
            dd = "0" + dd;
        }
        var endRegDt = yy + "" + mm + "" + dd;

        calendar.db.transaction(function (t) {
                t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt  between ? and ? and kindId = 2 and user_email = ? ', [startRegDt, endRegDt, glbSignedUserEmail],
                    function (t, ob) {
                        var existed, info_0, info_1, info_2, info_3, info_4, info_5, info_6;

                        var diabetesMorning = "<img class='diabetes_morning_white' id='morning' />" +
                            "<input type='text' id='info_0' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'>" ;
                        var diabetesNoon = "<img class='diabetes_noon_white' id='noon' />" +
                                "<input type='text' id='info_1' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'>" ;
                        var diabetesNight = "<img class='diabetes_night_white' id='night' />" +
                            "<input type='text' id='info_2' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'>" ;

                        if (ob.rows.length == 0) {

                        } else {
                            for (var i = 0; i < ob.rows.length; i++) {
                                if (parseInt(ob.rows.item(i)['reg_dt']) == reg_dt) {
                                    existed = 1;
                                    //morning
                                    if ( 100 > parseInt(ob.rows.item(i)['info_0']) && parseInt(ob.rows.item(i)['info_0']) > 0) {
                                        diabetesMorning = "<img class='diabetes_morning_green' id='morning' />" +
                                            "<input type='text' id='info_0' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_0']) +"'>" ;
                                    } else if ( 200 > parseInt(ob.rows.item(i)['info_0']) && parseInt(ob.rows.item(i)['info_0']) >= 100) {
                                        diabetesMorning = "<img class='diabetes_morning_yellow' id='morning' />" +
                                            "<input type='text' id='info_0' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_0']) +"'>" ;
                                    } else if (  parseInt(ob.rows.item(i)['info_0']) >= 200) {
                                        diabetesMorning = "<img class='diabetes_morning_red' id='morning' />" +
                                            "<input type='text' id='info_0' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_0']) +"'>" ;
                                    }
                                    //noon
                                    if ( 100 > parseInt(ob.rows.item(i)['info_1']) && parseInt(ob.rows.item(i)['info_1']) > 0) {
                                        diabetesNoon = "<img class='diabetes_noon_green' id='noon' />" +
                                            "<input type='text' id='info_1' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_1']) +"'>" ;
                                    } else if ( 200 > parseInt(ob.rows.item(i)['info_1']) && parseInt(ob.rows.item(i)['info_1']) >= 100) {
                                        diabetesNoon = "<img class='diabetes_noon_yellow' id='noon' />" +
                                            "<input type='text' id='info_1' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_1']) +"'>" ;
                                    } else if ( parseInt(ob.rows.item(i)['info_1']) >= 200) {
                                        diabetesNoon = "<img class='diabetes_noon_red' id='noon' />" +
                                            "<input type='text' id='info_1' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_1']) +"'>" ;
                                    }
                                    //night
                                    if ( 100 > parseInt( ob.rows.item(i)['info_2']) && parseInt(ob.rows.item(i)['info_2']) > 0) {
                                        diabetesNight = "<img class='diabetes_night_green' id='night' />" +
                                            "<input type='text' id='info_2' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_2']) +"'>" ;
                                    } else if ( 200 > parseInt( ob.rows.item(i)['info_2']) && parseInt(ob.rows.item(i)['info_2']) >= 100) {
                                        diabetesNight = "<img class='diabetes_night_yellow' id='night' />" +
                                            "<input type='text' id='info_2' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_2']) +"'>" ;
                                    } if ( parseInt(ob.rows.item(i)['info_2']) >= 200) {
                                        diabetesNight = "<img class='diabetes_night_red' id='night' />" +
                                            "<input type='text' id='info_2' maxlength='4' size='4' style='display: inline-block;vertical-align: top;margin-left:10px;'" +
                                            "value='"+ parseInt(ob.rows.item(i)['info_2']) +"'>" ;
                                    }

                                    // extra information
                                    if (parseInt(ob.rows.item(i)['info_3']) == 1) {
                                        info_3 = "checked='true'";
                                    }
                                    if (parseInt(ob.rows.item(i)['info_4']) == 1) {
                                        info_4 = "checked='true'";
                                    }
                                    if (parseInt(ob.rows.item(i)['info_5']) == 1) {
                                        info_5 = "checked='true'";
                                    }
                                    if (parseInt(ob.rows.item(i)['info_6']) == 1) {
                                        info_6 = "checked='true'";
                                    }

                                }

                            }
                        }


                        var introPopUp = "<div id='popup' class='pop_up_layer' style='background:antiquewhite;border-radius: 25px;'>" +
                            "<div><form class='form-group'><div>" +
                            "<table class='table' style='color:"+themeColorDeep+";text-align: center;font-family: nanum-barun-gothic-bold;'>" +
                            "<input type='hidden' id='existed' value='" + existed + "'>" +
                            "<tr style='height: 50px;'><td colspan='2'><span style='font-size: 20px;'>" + pyy + ". " + pmm + ". " + pdd + "." +
                            "<input type='hidden' id='reg_dt' value='" + pyy + sfmm + sfdd + "'></span></td>" +
                            "<td colspan='2'><div class='greenCheck' id='addEntrySubmit'></div></td></tr>" +
                            "<tr  style='height: 50px;font-size: 20px;'><td colspan='2' width='50%'>Morning</td>" +
                            "<td colspan='2' width='50%'>" +
                            diabetesMorning +
                            "</td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Noon</td>" +
                            "<td colspan='2'>" +
                            diabetesNoon +
                            "</td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Night</td>" +
                            "<td colspan='2'>" +
                            diabetesNight +
                            "</td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Exercise</td>" +
                            "<td colspan='2'><input class='diabetes_exerciseCheck' type='checkbox' class='checkbox' id='info_3' " + info_3 + "/><label for='info_3' ></label></td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>The pill</td>" +
                            "<td colspan='2'><input class='diabetes_pillCheck' type='checkbox' class='checkbox' id='info_4' " + info_4 + "/><label for='info_4' ></label></td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Injection</td>" +
                            "<td colspan='2'><input class='diabetes_injectionCheck' type='checkbox' class='checkbox' id='info_5' " + info_5 + "/><label for='info_5' ></label></td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Hospital</td>" +
                            "<td colspan='2'><input class='diabetes_hospitalCheck' type='checkbox' class='checkbox' id='info_6' " + info_6 + "/><label for='info_6' ></label></td></tr>" +
                            "<tr style='display:none;'><td>Body Temperature : </td>" +
                            "<td><input type='hidden' id='info_6' value='' " + info_6 + "/></td></tr>" +
                            "<tr style='display:none;'><td>weight  : </td>" +
                            "<td><input type='hidden' id='info_7' value=''/></td></tr>" +
                            "<tr style='display:none;'><td>Note  : </td>" +
                            "<td><button onclick='pop_up_layer_close();layer_pop_close(); '>작성 하기 가기</button></td></tr>" +
                            "</table></div></form>" +
                            " </div></div>";
                        opacity_bg_layer();
                        pop_up_layer(introPopUp, screenWidth * 5 / 6, 400, screenWidth * 1 / 12, (screenHeight - 400) / 2);
                    }, null);
            },
            null);
    }
}

Diabetes.prototype.infoList = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where kindId = 2 and user_email = ? order by reg_dt asc', [glbSignedUserEmail],
                function (t, ob) {
                    var today = new Date();
                    var contents = "";
                    var diabetesDate = ""; var morning = ""; var noon = ""; var night = ""; var degree = ""; var degreePoint = 0; var totalDays = 0; var evaluation = "";
                    var hospitalDt = ""; var hospitalDueDate = new Date(); var hddFlag = 0; var dDay1 = 0;
                    var avgMorning = 0; var tDays0 = 0; var avgNoon = 0; var tDays1 = 0; var avgNight = 0; var tDays2 = 0;

                    for (var i = 0; i < ob.rows.length; i++) {
                        if (hddFlag == 0 && parseInt(ob.rows.item(i)['info_6']) == 1 ){
                            hddFlag = 1;
                            hospitalDt = ob.rows.item(i)['reg_dt'];
                            hospitalDueDate = new Date(hospitalDt.substring(0, 4), parseInt(hospitalDt.substring(4, 6)) - 1, parseInt(hospitalDt.substring(6, 8)));
                            dDay1 = Math.floor(Math.abs(hospitalDueDate - today) / constMilToAday);
                        }
                        if(parseInt(ob.rows.item(i)['info_0']) > 0 && tDays0 < 7){
                            avgMorning += parseInt(ob.rows.item(i)['info_0']);
                            tDays0++;
                        }

                        if(parseInt(ob.rows.item(i)['info_1']) > 0 && tDays1 < 7){
                            avgNoon += parseInt(ob.rows.item(i)['info_1']);
                            tDays1++;
                        }

                        if(parseInt(ob.rows.item(i)['info_2']) > 0 && tDays2 < 7){
                            avgNight += parseInt(ob.rows.item(i)['info_2']);
                            tDays2++;
                        }

                        if (parseInt(ob.rows.item(i)['info_0']) > 0 || parseInt(ob.rows.item(i)['info_1']) > 0 || parseInt(ob.rows.item(i)['info_2']) > 0  ) {
                            diabetesDate = ob.rows.item(i)['reg_dt'];
                            morning = parseInt(ob.rows.item(i)['info_0']);
                            noon = parseInt(ob.rows.item(i)['info_1']);
                            night = parseInt(ob.rows.item(i)['info_2']);


                            var total = morning + noon + night;
                            if (300 > total && total >= 0) {
                                totalDays++;
                                degreePoint = degreePoint + 1;
                                degree = "Low!"
                            }
                            if (450 > total && total >= 300) {
                                totalDays++;
                                degreePoint = degreePoint + 3;
                                degree = "Normal!"
                            }
                            if (600 > total && total >= 450) {
                                totalDays++;
                                degreePoint = degreePoint + 5;
                                degree = "High!"
                            }
                            if ( total >= 600) {
                                totalDays++;
                                degreePoint = degreePoint + 7;
                                degree = "Dangerous!"
                            }

                            if ( totalDays != 0 ) {
                                if ( 3 > degreePoint/totalDays && degreePoint/totalDays >= 0 ) {
                                    evaluation = "Well-Being!";
                                } else if ( 5 > degreePoint/totalDays && degreePoint/totalDays >= 3 ) {
                                    evaluation = "Good Diet!";
                                } else if ( 7 > degreePoint/totalDays && degreePoint/totalDays >= 5 ) {
                                    evaluation = "Reduce Sugar!";
                                } else if ( degreePoint/totalDays > 7 ) {
                                    evaluation = "Harmful Junkfood!";
                                }
                            }
                            contents = "<tr style='height: "+infoListHeight+"px;' ><td>" + diabetesDate + "</td><td>" + morning + "</td><td>" + noon + "</td><td>" + night + "</td><td>"+ degree +"</td>" + contents;

                        }
                    }
					if(tDays0 == 0) tDays0=1; 
					if(tDays1 == 0) tDays1=1; 
					if(tDays2 == 0) tDays2=1;
                    var content = "<div id='entryTable' style='color:"+themeColorDeep+";line-height: 2;'><table  width='100%' ><tbody>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size: "+infoTitleFontSize+"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div class='think_white_icon' style='height:"+infoTitleFontSize+"px;width:"+infoTitleFontSize+"px;'></div><div style='display: inline-block;'>Check Check !!</div></td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>7 Days Avg. Morning " + "</td><td colspan='2' style='text-align: center;'>" + parseInt(avgMorning/tDays0) + " </td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>7 Days Avg. Noon" + "</td><td colspan='2' style='text-align: center;'>" + parseInt(avgNoon/tDays1) + " </td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>7 Days Avg. Night" + "</td><td colspan='2' style='text-align: center;'>" + parseInt(avgNight/tDays2) + " </td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>Hospital Due Date</td><td colspan='1' style='text-align: center;'>" + hospitalDueDate.getFullYear() + "." + (hospitalDueDate.getMonth() + 1) + "." + hospitalDueDate.getDate() +"</td><td colspan='1' >" + "D - " + dDay1 + "</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>About Your Diet!</td><td colspan='2'  style='text-align: center;'>" + evaluation + "</td></tr>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size: "+infoTitleFontSize+"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div class='history_white_icon' style='height:"+infoTitleFontSize+"px;width:"+infoTitleFontSize+"px;'></div><div style='display: inline-block;'>HISTORY ~</div></td></tr>" +
                        "</tbody></table>";

                    var tmpHeight = parseInt((totalHeight) - (noticHeight + calMenuHeight + mainMenuHeight + infoTitleHeight*2 + infoListHeight*5 + 4)) ;

                    content = content + "<div style='overflow:scroll; width:100%; height:" + tmpHeight + "px;'><table  width='100%' style='text-align: center;'><tbody>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'><td>Date</td><td>Morning</td><td>Noon</td><td>Night</td><td>Degree</td></tr>" + contents + "</tbody></table></div></div>";
                    $('#entryTable').replaceWith(content);
                }, null);
        },
        null);
}