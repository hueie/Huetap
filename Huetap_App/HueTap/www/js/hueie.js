var hueie = new Hueie();
function Hueie() { }
Hueie.prototype.deleteData = function () {
	calendar.db.transaction(
        function (t) {
			var txt;
			var r = confirm("Delete All Data?\nEither OK or Cancel.");
			if (r == true) {
				t.executeSql('delete from huetap_calendar where user_email = ?', [glbSignedUserEmail],
                function (t, resultset) {
					//callBack(results);
				}, calendar.dbErrorHandler);
				alert("Delete All Data!");
				txt = "You pressed OK!";
			} else {
				return W;
				txt = "You pressed Cancel!";
			}
		},
        calendar.dbErrorHandler, function () {}
	);  
};

Hueie.prototype.bkupload = function () {
	if(glbSignedUserEmail == ""){
		alert('You Should Sign In!');
		return;
	}

	calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt, kindId, user_email from huetap_calendar where user_email = ?', [glbSignedUserEmail],
                function (t, resultset) {
                    var txt;
					var r = confirm("Upload All Data?\nEither OK or Cancel.");
					if (r == true) {
						alert("Start Backup");
						var sendData = glbSignedUserEmail + "|";
						//additional authorizing process about password

						for (var i = 0; i < resultset.rows.length; i++) {
							var id = resultset.rows.item(i)['id'];
							var info_0 = resultset.rows.item(i)['info_0'];
							var info_1 = resultset.rows.item(i)['info_1'];
							var info_2 = resultset.rows.item(i)['info_2'];
							var info_3 = resultset.rows.item(i)['info_3'];
							var info_4 = resultset.rows.item(i)['info_4'];
							var info_5 = resultset.rows.item(i)['info_5'];
							var info_6 = resultset.rows.item(i)['info_6'];
							var reg_dt = resultset.rows.item(i)['reg_dt'];				
							var kindId = resultset.rows.item(i)['kindId'];				
							var user_email = resultset.rows.item(i)['user_email'];	

							sendData = sendData + id+"/"+info_0+"/"+info_1+"/"+info_2+"/"+info_3+"/"+info_4+"/"+info_5+"/"+info_6+"/"+reg_dt+"/"+kindId+"/"+user_email+"|"; 
							
						}
						
						var bkUpLoadData = 'bkUpLoadData=' + sendData;  // �Է�â���� �Է¹��� �����͸� ���ڿ� �������� ��ȯ�Ѵ�.
						$.post(         // ���ڿ� ������ �����͸� welcome.jsp ���Ϸ� ������.
							 "http://www.hueie.com/bkupload.jsp",      // ������ welcome.jsp ������ ���� �����͸� �λ縻�� ���ٿ��� �����ش�.
							  bkUpLoadData,              //  username=ȫ�浿
							  function (msg) {     // �ݹ��Լ��� �������� ������ �����͸� �Ű������� ���´�.
								//$('#message').html(msg);   // �����κ��� ���� �����͸� id�� message�� ������Ʈ�� �����Ѵ�.
							  }
						);   
						
						alert("End Backup");
						return false;
						//callBack(results);
						txt = "You pressed OK!";
					} else {
						return W;
						txt = "You pressed Cancel!";
					}
					
					
			}, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, function () {}
	);  
};

Hueie.prototype.bkdownload = function () {
	if(glbSignedUserEmail == ""){
		alert('You Should Sign In!');
		return;
	}		

			var txt;
			var r = confirm("Download All Data!\nEither OK or Cancel.");
			if (r == true) {
				alert('Start DownLoad');
				var bkDownLoadData = 'user_email='+glbSignedUserEmail;  // �Է�â���� �Է¹��� �����͸� ���ڿ� �������� ��ȯ�Ѵ�.
				
				$.post(         // ���ڿ� ������ �����͸� welcome.jsp ���Ϸ� ������.
					 "http://www.hueie.com/bkdownload.jsp",      // ������ welcome.jsp ������ ���� �����͸� �λ縻�� ���ٿ��� �����ش�.
					  bkDownLoadData,              //  username=ȫ�浿
					  function (msg) {     // �ݹ��Լ��� �������� ������ �����͸� �Ű������� ���´�.
						//alert(msg);
						var dataRow = msg.split("|");
						//alert("after");
						//alert(dataRow[0]);
						var flag = 0;

						hueie.deleteEntry();

						for ( var i =0 ; i < dataRow.length-1 ; i++){
					
							var dataCol = dataRow[i].split("/");
							if (dataCol.length < 10  ){
								continue;
							}

							var id = dataCol[0]; var info_0 = dataCol[1]; var info_1 = dataCol[2]; 
							var info_2 = dataCol[3];
							var info_3 = dataCol[4]; var info_4 = dataCol[5]; var info_5 = dataCol[6];
							var info_6 = dataCol[7]; var reg_dt = dataCol[8]; var kindId = dataCol[9];
							var user_email = dataCol[10];
							/*
							if(flag == 0){
								alert(id );
								alert(info_0);
								alert(info_1);
								alert(info_2);
								alert(info_3);
								alert(info_4);
								alert(info_5);
								alert(info_6);
								alert(reg_dt);
								alert(kindId);
								
								flag=1;
							}
							*/
							
							hueie.insertEntry({
								info_0: info_0,
								info_1: info_1,
								info_2: info_2,
								info_3: info_3,
								info_4: info_4,
								info_5: info_5,
								info_6: info_6,
								reg_dt: reg_dt,
								kindId: kindId,
								user_email: user_email
							}, function () {
							
							});
							
						}
					}
				);

				txt = "You pressed OK!";
			} else {
				return W;
				txt = "You pressed Cancel!";
			}
		
			   
	alert('End DownLoad');
	return false;      
};

Hueie.prototype.getEntries = function (start, callback) {
    console.log('Running getEntries');
    if (arguments.length === 1) callback = arguments[0];
    calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where user_email = ? order by reg_dt desc', [glbSignedUserEmail],
                function (t, results) {
                    callback(calendar.fixResults(results));
                }, calendar.dbErrorHandler);
        }, calendar.dbErrorHandler);
};
Hueie.prototype.getEntry = function (reg_dt, callBack) {
    calendar.db.transaction(
        function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt = ? and user_email = ? ', [reg_dt, glbSignedUserEmail],
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

Hueie.prototype.deleteEntry = function () {
    calendar.db.transaction(
        function (t) {
            t.executeSql(
                'delete from huetap_calendar', [],
                function (t, ob) {

                }, null);
        },
        null);
};

Hueie.prototype.insertEntry = function (data, callback) {
    calendar.db.transaction(
        function (t) {
            t.executeSql(
                'insert into huetap_calendar(id,info_0,info_1,info_2,info_3,info_4,info_5,info_6,reg_dt,kindId,user_email) values(NULL,?, ?, ?, ?, ?, ?, ?, ? ,?,?)',
                [data.info_0, data.info_1, data.info_2, data.info_3, data.info_4, data.info_5, data.info_6, data.reg_dt, data.kindId, glbSignedUserEmail],
                function () {
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, callback);
};
Hueie.prototype.updateEntry = function (data, callback) {
    calendar.db.transaction(
        function (t) {
            t.executeSql(
                'update huetap_calendar set info_0=?,info_1=?,info_2=?,info_3=?,info_4=?,info_5=?,info_6=? where reg_dt = ? and user_email = ?',
                [data.info_0, data.info_1, data.info_2, data.info_3, data.info_4, data.info_5, data.info_6, data.reg_dt, glbSignedUserEmail],
                function (tx, rs) {
                }, calendar.dbErrorHandler);
        },
        calendar.dbErrorHandler, callback);
};
Hueie.prototype.checkDateData = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt between ? and ? and user_email = ? order by reg_dt asc', [startDate, endDate, glbSignedUserEmail],
                function (t, ob) {

                }, null);
        },
        null);
}

Hueie.prototype.checkHueieData = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, reg_dt from huetap_calendar where user_email = ? order by reg_dt asc', [glbSignedUserEmail],
                function (t, ob) {

                }, null);
        },
        null);
}


Hueie.prototype.inputDateData = function (pyy, pmm, pdd) {
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
                t.executeSql('select id, info_0, info_1, info_2, info_3, info_4, info_5, info_6, reg_dt from huetap_calendar where reg_dt between ? and ? and user_email = ? ', [startRegDt, endRegDt, glbSignedUserEmail],
                    function (t, ob) {

                    }, null);
            },
            null);
    }
}


Hueie.prototype.infoList = function () {
    calendar.db.transaction(function (t) {
            t.executeSql('select id, info_0, info_1, reg_dt from huetap_calendar order by reg_dt asc', [],
                function (t, ob) {
                    var content = "<div id='entryTable' style='color:"+themeColorDeep+";line-height: 2;'><table  width='100%' ><tbody>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size:"+infoTitleFontSize+"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div class='think_white_icon' style='height:"+infoTitleFontSize+"px;width:"+infoTitleFontSize+"px;'></div><div style='display: inline-block;'>Check Check !!</div></td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size:"+infoListFontSize+"px;'><td colspan='4' style='text-align: center;'>If You Want To Have Your Calendars, </td></tr>"+
                        "<tr style='height: "+infoListHeight+"px;font-size:"+infoListFontSize+"px;'><td colspan='4' style='text-align: center;'>Do not Hesitate To Come Our Site </td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size:"+infoListFontSize+"px;'><td colspan='4' style='text-align: center;'>And Tell Me About Your Wish !</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size:"+infoListFontSize+"px;'><td colspan='4' style='text-align: center;'><a  href='#' onclick='window.open(\"http://www.hueie.com\", \"_system\");' >Click It !!!</a></td></tr>" +
                        
						"<tr style='height: "+infoTitleHeight+"px;font-size:"+infoTitleFontSize +"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div style='display: inline-block;'>User Information</div></td></tr>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size:"+infoListFontSize+"px;'>" +
                        "<td colspan='2' style='text-align: left;background-color: whitesmoke;' >ID</td>" +
						"<td style='text-align: left;'>" + glbSignedUserEmail + " <a href='#' onclick='user.signOutUser();'>SignOut</a></td>" +
						"</tr>" +
						"<tr style='height: "+infoTitleHeight+"px;font-size:"+infoTitleFontSize +"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div style='display: inline-block;'>Data Back Up</div></td></tr>" +
                        "<tr style='height: "+infoTitleHeight+"px;font-size:"+infoTitleFontSize+"px;'>" +
                        "<td colspan='2' style='text-align: left;background-color: whitesmoke;' >All</td>" +
                        "<td colspan='2' style='text-align: left;' >" +
						"<a href='#' onclick='hueie.bkupload()'>"+
                            "<div id='bkupload' class='bkupload_mediumpuple' style='height:"+infoTitleHeight+"px;width:"+infoTitleHeight+"px;'></div>" +
						"</a>"+        
						"<a href='#' onclick='hueie.bkdownload()'>"+
                        "<div id='bkdownload' class='bkdownload_mediumpuple' style='height:"+infoTitleHeight+"px;width:"+infoTitleHeight+"px;'></div>" +
                        "</a>"+        
						"<a href='#' onclick='hueie.deleteData()'>"+
                        "<div id='deletedata' class='deletedata_mediumpurple' style='height:"+infoTitleHeight+"px;width:"+infoTitleHeight+"px;'></div>" +
                        "</a>"+       
						"</td>" +
                        "</tr>"+
                        "<tr style='height: "+infoTitleHeight+"px;font-size: "+infoTitleFontSize+"px;'><td colspan='4' style='line-height: 1;font-family: nanum-barun-gothic-bold;border: 1px solid "+themeColorDeep+";text-align: center;background-color:"+themeColorMain+";color: white;'><div class='history_white_icon'></div><div style='display: inline-block; margin-left: 10px;'>Attribution</div></td></tr>" +
                        "</tbody></table>";

                    var contents =
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='Freepik' href='http://www.flaticon.com/authors/freepik'>Freepik</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='Google' href='http://www.flaticon.com/authors/google'>Google</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='Sean McCormick' href='http://www.flaticon.com/authors/sean-mccormick'>Sean McCormick</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='OCHA' href='http://www.flaticon.com/authors/ocha'>OCHA</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='Icon Works' href='http://www.flaticon.com/authors/icon-works'>Icon Works</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='SimpleIcon' href='http://www.flaticon.com/authors/simpleicon'>SimpleIcon</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='EpicCoders' href='http://www.epicpxls.com'>EpicCoders</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>"  +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='Darius Dan' href='http://swifticons.com/'>Darius Dan</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" +
                        "<tr style='height: "+infoListHeight+"px;font-size: "+infoListFontSize+"px;'><td colspan='2'  style='text-align: left;'>Icon made by <a title='Madebyoliver' href='http://www.flaticon.com/authors/madebyoliver'>Madebyoliver</a> from <a title='Flaticon' href='http://www.flaticon.com'>www.flaticon.com</a>&nbsp;</td></tr>" ;


                    var tmpHeight = parseInt((totalHeight) - (noticHeight + calMenuHeight + mainMenuHeight + infoTitleHeight*6 + infoListHeight*5)) ;

                    content = content + "<div style='overflow:scroll; width:100%; height:" + tmpHeight + "px;'><table  width='100%' style='text-align: center;'><tbody>" +
                        ""+ contents + "" +
                        "</tbody></table></div></div>";
                    $('#entryTable').replaceWith(content);

                }, null);
        },
        null);
}