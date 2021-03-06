var period = new Period();
function Period() {
}
Period.prototype.getEntries = function (start, callback) {
    console.log('Running getEntries');
    if (arguments.length === 1) callback = arguments[0];
    calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where kindId = 1 and user_email = ? order by reg_dt desc', [glbSignedUserEmail],
                function (t, results) {
				alert(glbSignedUserEmail);
                    callback(calendar.fixResults(results));
                }, calendar.dbErrorHandler);
        }, calendar.dbErrorHandler);
};
Period.prototype.getEntry = function (reg_dt, callBack) {
    calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt = ? and kindId = 1 and user_email = ?', [reg_dt, glbSignedUserEmail],
                function (t, results) {
				alert(glbSignedUserEmail);
                    if (results.rows.length == 0) return;
                    var tt = results.rows.item(0);
                    var result12 = {info_1: tt['info_1']};
                    callBack(results);
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, function () {
        });
};
Period.prototype.insertEntry = function (data, callback) {
    calendar.db.transaction(
        function (t) {
			//alert(glbSignedUserEmail);
                
            t.executeSql(
                'insert into huetap_calendar(id,info_0,info_1,info_2,info_3,info_4,info_5,info_6,reg_dt,kindId,user_email) values(NULL,?, ?, ?, ?, ?, ?, ?, ?,1,?)',
                [data.info_0, data.info_1, data.info_2, data.info_3, data.info_4, data.info_5, data.info_6, data.reg_dt,glbSignedUserEmail],
                function () {
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, callback);
};
Period.prototype.updateEntry = function (data, callback) {
    calendar.db.transaction(
        function (t) {
            t.executeSql(
                'update huetap_calendar set info_0=?,info_1=?,info_2=?,info_3=?,info_4=?,info_5=?,info_6=? where reg_dt = ? and kindId = 1 and user_email = ? ',
                [data.info_0, data.info_1, data.info_2, data.info_3, data.info_4, data.info_5, data.info_6, data.reg_dt, glbSignedUserEmail],
                function (tx, rs) {
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, callback);
};
Period.prototype.checkDateData = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt between ? and ? and kindId = 1 and user_email = ? order by reg_dt asc', [startDate, endDate, glbSignedUserEmail],
                function (t, ob) {
                    var j = 0;
                    var checkPeriod;
                    if (addEntryBtn1 == 1) {
                        checkPeriod = 42;
                    } else if (addEntryBtn1 == 2) {
                        checkPeriod = 365
                    }
                    for (var i = 0; i < checkPeriod; i++) {
                        var target = $('td[name=caldate]').eq(i);//.child();
                        var curDate2 = target.prop('id');
                        if (curDate2 == ob.rows.item(j)['reg_dt']) {
                            if (addEntryBtn1 == 1) {
                                if (parseInt(ob.rows.item(j)['info_0']) == 1) {
                                    target.find('a').append('<div class=\"blood_start_deeppink_icon\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_1']) == 1) {
                                    target.find('a').append('<div class=\"blood_start_pink_icon\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_2']) == 1) {
                                    target.find('a').append('<div class=\"heart_pink_icon\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_3']) == 1) {
                                    target.find('a').append('<div class=\"heartblank_pink_icon\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_4']) == 1) {
                                    target.find('a').append('<div class=\"pill_pink_icon\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_5']) == 1) {
                                    target.find('a').append('<div class=\"hospital_pink_icon\"></div>');
                                }
                                if (parseInt(ob.rows.item(j)['info_6']) == 1) {
                                    target.css('background-color', '#gray');
                                }
                            }
                            if (addEntryBtn1 == 2) {
                                if (parseInt(ob.rows.item(j)['info_0']) == 1) {
                                    target.css('background-color', 'orange');
                                }
                                if (parseInt(ob.rows.item(j)['info_1']) == 1) {
                                    target.css('background-color', 'orange');
                                }
                            }

                            j++;
                        }
                    }
                }, null);
        },
        null);
}
/*
Period.prototype.checkPeriodData2 = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, reg_dt from huetap_calendar order by reg_dt asc', [],
                function (t, ob) {
                    var target = $('td[name=caldate]');
                    var cYear = target.eq(0);
                    cYear = cYear.prop('id');
                    var calcYear = new Date(cYear.substring(0, 4), parseInt(cYear.substring(4, 6)) - 1, cYear.substring(6, 8));
                    var fYear = target.eq(-1);
                    fYear = fYear.prop('id');
                    var calfYear = new Date(fYear.substring(0, 4), parseInt(fYear.substring(4, 6)) - 1, fYear.substring(6, 8));

                    var periodStart = "";
                    var periodEnd = "";
                    var calPeriodStart = "";
                    var calPeriodEnd = "";
                    var calPrePeriodStart = new Date(1900, 1 - 1, 1);

                    var preAblePregnantStart = "";
                    var preAblePregnantEnd = "";
                    var ablePregnantStart = "";
                    var ablePregnantEnd = "";

                    for (var i = 0; i < ob.rows.length; i++) {
                        if (i > 0) {
                            var prePeriod = ob.rows.item(i - 1)['reg_dt'];
                            calPrePeriodStart = new Date(prePeriod.substring(0, 4), parseInt(prePeriod.substring(4, 6)) - 1, prePeriod.substring(6, 8));
                        }
                        if (parseInt(ob.rows.item(i)['info_0']) == 1) {
                            periodStart = ob.rows.item(i)['reg_dt'];
                            //전의 가임기
                            preAblePregnantStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) - 16);
                            preAblePregnantEnd = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) - 10);
                            //후의 가임기
                            ablePregnantStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) + 12);
                            ablePregnantEnd = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) + 18);
                            calPeriodStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, periodStart.substring(6, 8));
                        }
                        if (parseInt(ob.rows.item(i)['info_1']) == 1 && cYear <= ob.rows.item(i)['reg_dt'] && ob.rows.item(i)['reg_dt'] <= fYear) {
                            periodEnd = ob.rows.item(i)['reg_dt'];
                            calPeriodEnd = new Date(periodEnd.substring(0, 4), parseInt(periodEnd.substring(4, 6)) - 1, periodEnd.substring(6, 8));
                        }

                        //생리 시작일로 이전 가임기 색칠
                        if (calPeriodStart != "" && ( Math.abs(calPeriodStart - calPrePeriodStart) / constMilToAday > 60  )) {
                            if ((calcYear <= preAblePregnantStart && preAblePregnantEnd <= calfYear) || ( preAblePregnantStart <= calcYear && calcYear <= preAblePregnantEnd ) || (calfYear <= preAblePregnantEnd && preAblePregnantStart <= calfYear)) {
                                for (var j = Math.abs(preAblePregnantEnd - calcYear) / constMilToAday - 1; j > Math.abs(preAblePregnantEnd - calcYear) / constMilToAday - 7; j--) {
                                    if (0 <= j) {
                                        if (j == Math.abs(preAblePregnantEnd - calcYear) / constMilToAday - 4) {
                                            if (addEntryBtn1 == 1) {
                                                var exist = target.eq(j).find('a').find('div.big_ovum_deeppink_icon');
                                                if (exist.length == 0) {
                                                    target.eq(j).find('a').append('<div class=\"big_ovum_deeppink_icon\"></div>');
                                                }
                                            } else if (addEntryBtn1 == 2) {
                                                target.eq(j).css('background-color', 'pink');
                                            }
                                        } else {
                                            if (addEntryBtn1 == 1) {
                                                var exist = target.eq(j).find('a').find('div.small_ovum_pink_icon');
                                                if (exist.length == 0) {
                                                    target.eq(j).find('a').append('<div class=\"small_ovum_pink_icon\"></div>');
                                                }
                                            } else if (addEntryBtn1 == 2) {
                                                target.eq(j).css('background-color', 'pink');
                                            }
                                        }
                                    }
                                }
                                // 이전 생리 예정일 색칠
                                for (var j = (preAblePregnantEnd - calcYear) / constMilToAday - 8; j > (preAblePregnantEnd - calcYear) / constMilToAday - 14; j--) {
                                    if (0 <= j) {
                                        if (j == (preAblePregnantEnd - calcYear) / constMilToAday - 11) {
                                            if (addEntryBtn1 == 1) {
                                                var exist = target.eq(j).find('a').find('div.blood_start_blue_icon');
                                                if (exist.length == 0) {
                                                    target.eq(j).find('a').append('<div class=\"blood_start_blue_icon\"></div>');
                                                }
                                            } else if (addEntryBtn1 == 2) {
                                                target.eq(j).css('background-color', 'lightcyan');
                                            }
                                        } else {
                                            if (addEntryBtn1 == 1) {
                                                var exist = target.eq(j).find('a').find('div.blood_start_lightcyan_icon');
                                                if (exist.length == 0) {
                                                    target.eq(j).find('a').append('<div class=\"blood_start_lightcyan_icon\"></div>');
                                                }
                                            } else if (addEntryBtn1 == 2) {
                                                target.eq(j).css('background-color', 'lightcyan');
                                            }
                                        }
                                    }
                                }

                                preAblePregnantEnd = "";
                            }
                        }

                        //생리 기간 색칠
                        if (periodStart != "" && periodEnd != "") {
                            if (periodStart <= periodEnd) {
                                if (addEntryBtn1 == 1) {
                                    for (var j = Math.abs(calPeriodStart - calcYear) / constMilToAday + 1; j < Math.abs(calPeriodEnd - calcYear) / constMilToAday; j++) {
                                        var exist = target.eq(j).find('a').find('div.blood_start_pink_icon');
                                        if (exist.length == 0) {
                                            target.eq(j).find('a').append('<div class=\"blood_start_pink_icon\"></div>');
                                        }
                                    }
                                } else if (addEntryBtn1 == 2) {
                                    for (var j = Math.abs(calPeriodStart - calcYear) / constMilToAday + 1; j < Math.abs(calPeriodEnd - calcYear) / constMilToAday; j++) {
                                        target.eq(j).css('background-color', 'orange');
                                    }
                                }
                                periodStart = "";
                                periodEnd = "";
                            } else if (periodStart > periodEnd) {
                                periodEnd = "";
                            }
                        }
                        else if (periodStart == "" && periodEnd != "") {
                            if (parseInt(i) != 0 && ob.rows.item(i - 1)['info_0'] == 1 && ob.rows.item(i - 1)['reg_dt'] < cYear) {
                                var prePeriodStart = ob.rows.item(i - 1)['reg_dt'];
                                if (prePeriodStart != "") {
                                    //처음까지색칠하기
                                    if (addEntryBtn1 == 1) {
                                        //생리기간 색칠
                                        for (var k = 0; k < Math.abs(calPeriodEnd - calcYear) / constMilToAday; k++) {
                                            var exist = target.eq(k).find('a').find('div.blood_start_pink_icon');
                                            if (exist.length == 0) {
                                                target.eq(k).find('a').append('<div class=\"blood_start_pink_icon\"></div>');
                                            }
                                        }
                                    } else if (addEntryBtn1 == 2) {
                                        //생리기간 색칠
                                        for (var k = 0; k < Math.abs(calPeriodEnd - calcYear) / constMilToAday; k++) {
                                            target.eq(k).css('background-color', 'orange');
                                        }
                                    }
                                }
                            }
                            periodEnd = "";
                        }
                        else if (periodStart != "" && periodEnd == "") {
                            if (i != parseInt(ob.rows.length) - 1 && ob.rows.item(i + 1)['info_1'] == 1 && ob.rows.item(i + 1)['reg_dt'] > fYear) {
                                var prePeriodEnd = ob.rows.item(i + 1)['reg_dt'];
                                if (prePeriodEnd != "") {
                                    //끝까지색칠하기
                                    if (addEntryBtn1 == 1) {
                                        //생리기간 색칠
                                        for (var k = Math.abs(calPeriodStart - calcYear) / constMilToAday + 1; k < 42; k++) {
                                            var exist = target.eq(k).find('a').find('div.blood_start_pink_icon');
                                            if (exist.length == 0) {
                                                target.eq(k).find('a').append('<div class=\"blood_start_pink_icon\"></div>');
                                            }
                                        }
                                        //가임기간 색칠
                                    } else if (addEntryBtn1 == 2) {
                                        //생리기간 색칠
                                        for (var k = Math.abs(calPeriodStart - calcYear) / constMilToAday + 1; k < 365; k++) {
                                            target.eq(k).css('background-color', 'orange');
                                        }
                                    }
                                }
                                periodStart = "";
                            }
                        }

                        // 이후 가임기, 생리 예정일 색칠
                        if (ablePregnantStart != "") {
                            // 이후 가임기 색칠
                            for (var j = (ablePregnantStart - calcYear) / constMilToAday; j < (ablePregnantStart - calcYear) / constMilToAday + 6; j++) {
                                if (0 <= j) {
                                    if (j == (ablePregnantStart - calcYear) / constMilToAday + 2) {
                                        if (addEntryBtn1 == 1) {
                                            var exist = target.eq(j).find('a').find('div.big_ovum_deeppink_icon');
                                            if (exist.length == 0) {
                                                target.eq(j).find('a').append('<div class=\"big_ovum_deeppink_icon\"></div>');
                                            }
                                        } else if (addEntryBtn1 == 2) {
                                            target.eq(j).css('background-color', 'pink');
                                        }
                                    } else {
                                        if (addEntryBtn1 == 1) {
                                            var exist = target.eq(j).find('a').find('div.small_ovum_pink_icon');
                                            if (exist.length == 0) {
                                                target.eq(j).find('a').append('<div class=\"small_ovum_pink_icon\"></div>');
                                            }
                                        } else if (addEntryBtn1 == 2) {
                                            target.eq(j).css('background-color', 'pink');
                                        }
                                    }
                                }
                            }
                            // 이후 생리 예정일 색칠

                            for (var j = (ablePregnantStart - calcYear) / constMilToAday + 16; j < (ablePregnantStart - calcYear) / constMilToAday + 21; j++) {
                                if (0 <= j) {
                                    if (j == (ablePregnantStart - calcYear) / constMilToAday + 16) {
                                        if (addEntryBtn1 == 1) {
                                            var exist = target.eq(j).find('a').find('div.blood_start_blue_icon');
                                            if (exist.length == 0) {
                                                target.eq(j).find('a').append('<div class=\"blood_start_blue_icon\"></div>');
                                            }
                                        } else if (addEntryBtn1 == 2) {
                                            target.eq(j).css('background-color', 'lightcyan');
                                        }
                                    } else {
                                        if (addEntryBtn1 == 1) {
                                            var exist = target.eq(j).find('a').find('div.blood_start_lightcyan_icon');
                                            if (exist.length == 0) {
                                                target.eq(j).find('a').append('<div class=\"blood_start_lightcyan_icon\"></div>');
                                            }
                                        } else if (addEntryBtn1 == 2) {
                                            target.eq(j).css('background-color', 'lightcyan');
                                        }
                                    }
                                }
                            }

                            ablePregnantStart = "";
                        }


                    }
                }, null);
        },
        null);
}
*/
//Advanced
Period.prototype.checkPeriodData = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, reg_dt from huetap_calendar where kindId = 1 and user_email = ?  order by reg_dt asc', [glbSignedUserEmail],
                function (t, ob) {
                    var target = $('td[name=caldate]');
                    var cYear = target.eq(0);
                    cYear = cYear.prop('id');
                    var calcYear = new Date(cYear.substring(0, 4), parseInt(cYear.substring(4, 6)) - 1, cYear.substring(6, 8));
                    var fYear = target.eq(-1);
                    fYear = fYear.prop('id');
                    var calfYear = new Date(fYear.substring(0, 4), parseInt(fYear.substring(4, 6)) - 1, fYear.substring(6, 8));

                    var periodStart = "";
                    var periodEnd = "";
                    var calPeriodStart = "";
                    var calPeriodEnd = "";
                    var prePeriodStart = "";
                    var calPrePeriodStart = new Date(1900, 1 - 1, 1);

                    var periodCycle = 0;

                    var maxLength =0;
                    if (addEntryBtn1 == 1) {
                        maxLength = 42;
                    } else if (addEntryBtn1 == 2) {
                        maxLength = 42*12;
                    }

                    for (var i = 0; i < ob.rows.length; i++) {
                        if (parseInt(ob.rows.item(i)['info_0']) == 1) {
                            periodStart = ob.rows.item(i)['reg_dt'];
                            calPeriodStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, periodStart.substring(6, 8));
                        }
                        if (parseInt(ob.rows.item(i)['info_1']) == 1) {
                            periodEnd = ob.rows.item(i)['reg_dt'];
                            calPeriodEnd = new Date(periodEnd.substring(0, 4), parseInt(periodEnd.substring(4, 6)) - 1, periodEnd.substring(6, 8));
                        }

                        //Calculating periodCycle
                        if ((calPeriodStart - calPrePeriodStart) / constMilToAday > 50) {
                            periodCycle = 28;
                        } else {
                            periodCycle = (calPeriodStart - calPrePeriodStart)/ constMilToAday ;
                        }

                        //Before
                        //Coloring chance of pregnant
                        if (calPeriodStart != "" && calPeriodEnd != "" && calPeriodStart <= calPeriodEnd && ( (calPeriodEnd - calPeriodStart) / constMilToAday < 30 )) {
                            if (Math.abs(calPeriodStart - calPrePeriodStart) / constMilToAday > 50) {
                                /*
                                var ablePregnantStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) - periodCycle / 2 - 2);
                                var ablePregnantEnd = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) - periodCycle / 2 + 2);

                                if ((calcYear <= ablePregnantStart && ablePregnantEnd <= calfYear) || ( ablePregnantStart <= calcYear && calcYear <= ablePregnantEnd ) || (calfYear <= ablePregnantEnd && ablePregnantStart <= calfYear)) {
                                    for (var j = (ablePregnantEnd - calcYear) / constMilToAday - 1; j > (ablePregnantEnd - calcYear) / constMilToAday - 7; j--) {
                                        if (0 <= j) {
                                            if (j == Math.abs(ablePregnantEnd - calcYear) / constMilToAday - 4) {
                                                if (addEntryBtn1 == 1) {
                                                    var exist = target.eq(j).find('a').find('div.big_ovum_deeppink_icon');
                                                    if (exist.length == 0) {
                                                        target.eq(j).find('a').append('<div class=\"big_ovum_deeppink_icon\"></div>');
                                                    }
                                                } else if (addEntryBtn1 == 2) {
                                                    target.eq(j).css('background-color', 'pink');
                                                }
                                            } else {
                                                if (addEntryBtn1 == 1) {
                                                    var exist = target.eq(j).find('a').find('div.small_ovum_pink_icon');
                                                    if (exist.length == 0) {
                                                        target.eq(j).find('a').append('<div class=\"small_ovum_pink_icon\"></div>');
                                                    }
                                                } else if (addEntryBtn1 == 2) {
                                                    target.eq(j).css('background-color', 'pink');
                                                }
                                            }
                                        }
                                    }
                                    */
                                    /*
                                     // 이전 생리 예정일 색칠
                                     for (var j = (ablePregnantEnd - calcYear) / constMilToAday - 8; j > (ablePregnantEnd - calcYear) / constMilToAday - 14; j--) {
                                     if (0 <= j) {
                                     if (j == (ablePregnantEnd - calcYear) / constMilToAday - 11) {
                                     if (addEntryBtn1 == 1) {
                                     var exist = target.eq(j).find('a').find('div.blood_start_blue_icon');
                                     if (exist.length == 0) {
                                     target.eq(j).find('a').append('<div class=\"blood_start_blue_icon\"></div>');
                                     }
                                     } else if (addEntryBtn1 == 2) {
                                     target.eq(j).css('background-color', 'lightcyan');
                                     }
                                     } else {
                                     if (addEntryBtn1 == 1) {
                                     var exist = target.eq(j).find('a').find('div.blood_start_lightcyan_icon');
                                     if (exist.length == 0) {
                                     target.eq(j).find('a').append('<div class=\"blood_start_lightcyan_icon\"></div>');
                                     }
                                     } else if (addEntryBtn1 == 2) {
                                     target.eq(j).css('background-color', 'lightcyan');
                                     }
                                     }
                                     }
                                     }
                                     */
                                /*
                                }*/
                            }

                        } else if (calPeriodStart != "" && calPeriodEnd != "" && calPeriodStart <= calPeriodEnd && (calPeriodStart - calPeriodEnd) / constMilToAday > 30 ) {
                            periodStart = "";
                            calPeriodStart = "";

                            periodEnd = "";
                            calPeriodEnd = "";
                            continue;
                        } else if (calPeriodStart != "" && calPeriodEnd != "" && calPeriodStart > calPeriodEnd) {
                            periodEnd = "";
                            calPeriodEnd = "";
                            continue;
                        } else if (calPeriodStart == "" || calPeriodEnd == "") {
                            continue;
                        } else{
                            periodStart = "";
                            calPeriodStart = "";

                            periodEnd = "";
                            calPeriodEnd = "";
                            continue;
                        }

                        //Coloring Period Length
                        for (var j = (calPeriodStart - calcYear) / constMilToAday + 1; j < (calPeriodEnd - calcYear) / constMilToAday; j++) {
                            if (0 <= j && j < maxLength) {
                                if (addEntryBtn1 == 1) {
                                    var exist = target.eq(j).find('a').find('div.blood_start_pink_icon');
                                    if (exist.length == 0) {
                                        target.eq(j).find('a').append('<div class=\"blood_start_pink_icon\"></div>');
                                    }
                                } else if (addEntryBtn1 == 2) {
                                    target.eq(j).css('background-color', 'orange');
                                }
                            }
                        }

                        //After
                        //Coloring Period Due Date
                        for (var j = (calPeriodStart - calcYear) / constMilToAday + periodCycle - 1; j < (calPeriodStart - calcYear) / constMilToAday + periodCycle + 3; j++) {
                            if (0 <= j && j< maxLength) {
                                if (j == (calPeriodStart - calcYear) / constMilToAday + periodCycle) {
                                    if (addEntryBtn1 == 1) {
                                        var exist = target.eq(j).find('a').find('div.blood_start_blue_icon');
                                        if (exist.length == 0) {
                                            target.eq(j).find('a').append('<div class=\"blood_start_blue_icon\"></div>');
                                        }
                                    } else if (addEntryBtn1 == 2) {
                                        target.eq(j).css('background-color', 'lightcyan');
                                    }
                                } else {
                                    if (addEntryBtn1 == 1) {
                                        var exist = target.eq(j).find('a').find('div.blood_start_lightcyan_icon');
                                        if (exist.length == 0) {
                                            target.eq(j).find('a').append('<div class=\"blood_start_lightcyan_icon\"></div>');
                                        }
                                    } else if (addEntryBtn1 == 2) {
                                        target.eq(j).css('background-color', 'lightcyan');
                                    }
                                }
                            }
                        }

                        //Coloring chance of pregnant
                        for (var j = (calPeriodStart - calcYear) / constMilToAday + periodCycle -14 - 4; j < (calPeriodStart - calcYear) / constMilToAday + periodCycle -14 + 2; j++) {
                            if (0 <= j && j< maxLength) {
                                if (j == (calPeriodStart - calcYear) / constMilToAday + periodCycle -14 ) {
                                    if (addEntryBtn1 == 1) {
                                        var exist = target.eq(j).find('a').find('div.big_ovum_deeppink_icon');
                                        if (exist.length == 0) {
                                            target.eq(j).find('a').append('<div class=\"big_ovum_deeppink_icon\"></div>');
                                        }
                                    } else if (addEntryBtn1 == 2) {
                                        target.eq(j).css('background-color', 'pink');
                                    }
                                } else {
                                    if (addEntryBtn1 == 1) {
                                        var exist = target.eq(j).find('a').find('div.small_ovum_pink_icon');
                                        if (exist.length == 0) {
                                            target.eq(j).find('a').append('<div class=\"small_ovum_pink_icon\"></div>');
                                        }
                                    } else if (addEntryBtn1 == 2) {
                                        target.eq(j).css('background-color', 'pink');
                                    }
                                }
                            }

                        }

                        prePeriodStart = periodStart;
                        calPrePeriodStart = calPeriodStart;

                        periodStart = "";
                        calPeriodStart = "";

                        periodEnd = "";
                        calPeriodEnd = "";
                    }
                }, null);
        },
        null);
}


Period.prototype.inputDateData = function (pyy, pmm, pdd) {
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
                //        t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt = ?', [reg_dt],
                t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt between ? and ? and kindId = 1 and user_email = ? ', [startRegDt, endRegDt, glbSignedUserEmail],
                    function (t, ob) {
                        var existed, info_0, info_1, info_2, info_3, info_4, info_5, info_6;

                        var startPeriod = "<input class='startCheck' type='checkbox'  id='info_0' name='info_0'" + info_0 + " /><label for='info_0' ></label>";
                        var endPeriod = "<input class='endCheck' type='checkbox'  id='info_1' name='info_1'" + info_1 + " /><label for='info_1' ></label>";

                        if (ob.rows.length == 0) {
                            startPeriod = "<input class='startCheck' type='checkbox'  id='info_0' name='info_0'" + info_0 + " /><label for='info_0' ></label>";
                            endPeriod = "<input class='endCheck' type='checkbox'  id='info_1' name='info_1'" + info_1 + " /><label for='info_1' ></label>";
                        } else {
                            for (var i = 0; i < ob.rows.length; i++) {
                                if (parseInt(ob.rows.item(i)['reg_dt']) == reg_dt) {
                                    existed = 1;
                                    if (parseInt(ob.rows.item(i)['info_0']) == 1) {
                                        info_0 = "checked='true'";
                                        startPeriod = "<input class='startCheck' type='checkbox'  id='info_0' name='info_0'" + info_0 + " /><label for='info_0' ></label>";
                                    }
                                    if (parseInt(ob.rows.item(i)['info_1']) == 1) {
                                        info_1 = "checked='true'";
                                        endPeriod = "<input class='endCheck' type='checkbox'  id='info_1' name='info_1'" + info_1 + " /><label for='info_1' ></label>";
                                    }
                                    if (parseInt(ob.rows.item(i)['info_2']) == 1) {
                                        info_2 = "checked='true'";
                                    }
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

                                } else {
                                    // 선택한날의 +- 15일 사이에 생리 시작일이 있으면 선택한 날은 시작일은 선택 못함
                                    if (parseInt(ob.rows.item(i)['info_0']) == 1) {
                                        startPeriod = "<div class='start_gray_icon' ></div>";
                                    }
                                    // 선택한날의 +- 15일 사이에 생리 종료일이 있으면 선택한 날은 종료일은 선택 못함
                                    if (parseInt(ob.rows.item(i)['info_1']) == 1) {
                                        endPeriod = "<div class='end_gray_icon' ></div>";
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
                            "<td colspan='2'><div class='greenCheck' id= 'addEntrySubmit'></div></td></tr>" +
                            "<tr  style='height: 50px;font-size: 20px;'><td colspan='2' width='50%'>Period</td>" +
                            "<td colspan='2' width='50%' >" +
                            startPeriod +
                            endPeriod +
                            "</td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Love Day (Control X)</td>" +
                            "<td colspan='2'><input class='heartCheck' type='checkbox' class='checkbox' id='info_2' " + info_2 + "/><label for='info_2' ></label></td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Love Day (Control O)</td>" +
                            "<td colspan='2'><input class='heartblankCheck' type='checkbox' class='checkbox' id='info_3' " + info_3 + "/><label for='info_3' ></label></td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>The pill</td>" +
                            "<td colspan='2'><input class='pillCheck' type='checkbox' class='checkbox' id='info_4' " + info_4 + "/><label for='info_4' ></label></td></tr>" +
                            "<tr style='height: 50px;font-size: 20px;'><td colspan='2'>Hospital</td>" +
                            "<td colspan='2'><input class='hospitalCheck' type='checkbox' class='checkbox' id='info_5' " + info_5 + "/><label for='info_5' ></label></td></tr>" +
                            "<tr style='display:none;'><td>Body Temperature : </td>" +
                            "<td><input type='hidden' id='info_6' value='' " + info_6 + "/></td></tr>" +
                            "<tr style='display:none;'><td>weight  : </td>" +
                            "<td><input type='hidden' id='info_7' value=''/></td></tr>" +
                            "<tr style='display:none;'><td>Note  : </td>" +
                            "<td><button onclick='pop_up_layer_close();layer_pop_close(); '>작성 하기 가기</button></td></tr>" +
                            "</table></div></form>" +
                            " </div></div>";
                        opacity_bg_layer();
                        pop_up_layer(introPopUp, screenWidth * 5 / 6, 300, screenWidth * 1 / 12, (screenHeight - 300) / 2);
                    }, null);
            },
            null);
    }
}

Period.prototype.infoList = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, reg_dt from huetap_calendar where kindId = 1 and user_email = ?  order by reg_dt asc', [glbSignedUserEmail],
                function (t, ob) {
                    var today = new Date();

                    var prePeriodStart = "";
                    var prePeriodEnd = "";
                    var calPrePeriodStart = "";
                    var calPrePeriodEnd = "";

                    var periodStart = "";
                    var periodEnd = "";
                    var calPeriodStart = "";
                    var calPeriodEnd = "";

                    var ablePregnantStart = "";
                    var ablePregnantEnd = "";
                    var ablePregnantDay = "";
                    var nextPeriodStart = "";
                    var dDay1 = 0;
                    var dDay2 = 0;

                    var prePeriodLength = "";
                    var curPeriodLength = "";
                    var avgPeriodLength = 0; //평균 생리 기간
                    var prePeriodCycle = "";
                    var curPeriodCycle = "";
                    var avgPeriodCycle = 0; //평균 주기

                    var cnt = 0;
                    var contents = "";

                    for (var i = 0; i < ob.rows.length; i++) {
                        if (parseInt(ob.rows.item(i)['info_0']) == 1) {
                            periodStart = ob.rows.item(i)['reg_dt'];
                            calPeriodStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)));
                        }
                        if (parseInt(ob.rows.item(i)['info_1']) == 1) {
                            periodEnd = ob.rows.item(i)['reg_dt'];
                            calPeriodEnd = new Date(periodEnd.substring(0, 4), parseInt(periodEnd.substring(4, 6)) - 1, parseInt(periodEnd.substring(6, 8)));
                        }
                        if (periodStart != "" && periodEnd != "" && periodEnd >= periodStart) {
                            prePeriodCycle = curPeriodCycle;
                            curPeriodCycle = Math.floor(Math.abs(calPeriodStart - calPrePeriodStart) / constMilToAday) + 1;
                            prePeriodLength = curPeriodLength;
                            curPeriodLength = Math.floor(Math.abs(calPeriodEnd - calPeriodStart) / constMilToAday);

                            if (cnt == 0) {
                                curPeriodCycle = "Start!";
                            } else if (cnt >= 2) {
                                avgPeriodCycle = (curPeriodCycle + prePeriodCycle) / 2;
                                avgPeriodLength = (curPeriodLength + prePeriodLength) / 2;
                            } else {
                                avgPeriodCycle = curPeriodCycle;
                                avgPeriodLength = curPeriodLength;
                            }
                            cnt++;

                            contents = "<tr style='height: "+infoListHeight+"px;' ><td >" + cnt + "</td><td>" + calPeriodStart.getFullYear() + "." + (calPeriodStart.getMonth() + 1) + "." + calPeriodStart.getDate() + "</td><td>" +
                                calPeriodEnd.getFullYear() + "." + (calPeriodEnd.getMonth() + 1) + "." + calPeriodEnd.getDate() + "</td><td>" + curPeriodCycle + "</td></tr>" + contents;

                            prePeriodStart = periodStart;
                            prePeriodEnd = periodEnd;
                            calPrePeriodStart = new Date(prePeriodStart.substring(0, 4), parseInt(prePeriodStart.substring(4, 6)) - 1, parseInt(prePeriodStart.substring(6, 8)));
                            calPrePeriodEnd = new Date(prePeriodEnd.substring(0, 4), parseInt(prePeriodEnd.substring(4, 6)) - 1, parseInt(prePeriodEnd.substring(6, 8)));

                            //생리,배란 예정일
                            nextPeriodStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) + avgPeriodCycle);
                            ablePregnantDay = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) + avgPeriodCycle - 14);

                            ablePregnantStart = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) + avgPeriodCycle - 18);
                            ablePregnantEnd = new Date(periodStart.substring(0, 4), parseInt(periodStart.substring(4, 6)) - 1, parseInt(periodStart.substring(6, 8)) + avgPeriodCycle - 13);

                            dDay1 = Math.floor(Math.abs(nextPeriodStart - today) / constMilToAday);
                            dDay2 = Math.floor(Math.abs(ablePregnantDay - today) / constMilToAday);

                            periodStart = "";
                            periodEnd = "";
                        } else if (periodStart != "" && periodEnd != "" && periodEnd < periodStart) {
                            periodStart = "";
                        }
                    }

					var nextPeriodStartResult = "";
					if (nextPeriodStart != "") {
						nextPeriodStartResult = nextPeriodStart.getFullYear() + "." + (nextPeriodStart.getMonth() + 1) + "." + nextPeriodStart.getDate();
					}
					var ablePregnantDayResult = "";
					if (ablePregnantDay != "") {
						ablePregnantDayResult = ablePregnantDay.getFullYear() + "." + (ablePregnantDay.getMonth() + 1) + "." + ablePregnantDay.getDate();
					}
					var ablePregnantStartResult = "";
					if (ablePregnantStart != "") {
						ablePregnantStartResult = ablePregnantStart.getFullYear() + "." + (ablePregnantStart.getMonth() + 1) + "." + (ablePregnantStart.getDate()) ;
					}
					var ablePregnantEndResult = "";
					if (ablePregnantEnd != "") {
						ablePregnantEndResult = ablePregnantEnd.getFullYear() + "." + (ablePregnantEnd.getMonth() + 1) + "." + (ablePregnantEnd.getDate()) ;
					}

					var content = "<div id='entryTable' style='color:"+themeColorDeep+";line-height: 2;'><table  width='100%' ><tbody>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size: "+infoTitleFontSize+"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div class='think_white_icon' style='height:"+infoTitleFontSize+"px;width:"+infoTitleFontSize+"px;'></div><div style='display: inline-block;'>Check Check !!</div></td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>Avg. Cycle Length" + "</td><td colspan='2' style='text-align: center;'>" + Math.floor(avgPeriodCycle * 10) / 10 + " Days</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>Avg. Period Length" + "</td><td colspan='2' style='text-align: center;'>" + Math.floor(avgPeriodLength * 10) / 10 + " Days</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>Period Due Date</td><td colspan='1' style='text-align: center;'>" + nextPeriodStartResult + "</td><td colspan='1' >" + "D - " + dDay1 + "</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>Ovulation Due Date</td><td colspan='1' style='text-align: center;'>" + ablePregnantDayResult + "</td><td colspan='1' >" + "D - " + dDay2 + "</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2' style='font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'>Chance of Pregnancy</td><td colspan='2'  style='text-align: center;'>" + ablePregnantStartResult + " ~ " + ablePregnantEndResult + "</td></tr>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size: "+infoTitleFontSize+"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div class='history_white_icon' style='height:"+infoTitleFontSize+"px;width:"+infoTitleFontSize+"px;'></div><div style='display: inline-block;'>HISTORY ~</div></td></tr>" +
                        "</tbody></table>";

                    var tmpHeight = parseInt((totalHeight) - (noticHeight + calMenuHeight + mainMenuHeight + infoTitleHeight*2 + infoListHeight*5  + 4)) ;

                    content = content + "<div style='overflow:scroll; width:100%; height:" + tmpHeight + "px;'><table  width='100%' style='text-align: center;'><tbody>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;font-family: nanum-barun-gothic-bold;background-color: whitesmoke;'><td>Times</td><td>Start</td><td>End</td><td>Cycle</td></tr>" + contents + "</tbody></table></div></div>";
                    
					$('#entryTable').replaceWith(content);
                }, function(e){ alert(e.code);});
        },
        null);
}