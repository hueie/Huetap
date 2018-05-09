


var appView;
var notif;
var pFooter =0;
var menuType="hueie";
var themeColorMain = "mediumpurple";
var themeColorHighLight = "purple";
var themeColorDeep = "rebeccapurple";


var appMainMenuLst = [
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: pink;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn1' onclick='menuTypeChange(\"period\");pageLoad(\"calendar.html\")'><div class='period_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: red;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn8' onclick='menuTypeChange(\"diabetes\");pageLoad(\"calendar.html\")'><div class='diabetes_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: hotpink;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn2' onclick='update()'><div class='pregnant_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: navajowhite;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn3' onclick='update()'><div class='baby_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: greenyellow;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn4' onclick='update()'><div class='budding_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: slategray;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn6' onclick='update()'><div class='muscle_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: gold;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn5' onclick='update()'><div class='finance_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: saddlebrown;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn9' onclick='update()'><div class='map_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: black;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn10' onclick='update()'><div class='gentleman_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: sandybrown;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn11' onclick='update()'><div class='wheat_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: lightskyblue;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn11' onclick='update()'><div class='airplane_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>",
    "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: yellowgreen;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn11' onclick='update()'><div class='study_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>"
];
function menuTypeChange(t){
    menuType =t;
    if(menuType == "hueie"){
        themeColorMain = "mediumpurple";
        themeColorHighLight = "purple";
        themeColorDeep = "rebeccapurple";
    } else if(menuType == "period"){
        themeColorMain = "pink";
        themeColorHighLight = "hotpink";
        themeColorDeep = "deeppink";
    } else if(menuType == "diabetes"){
        themeColorMain = "red";
        themeColorHighLight = "darkred";
        themeColorDeep = "crimson";
    }

}

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        /*
        appView = $('#app');
        pageLoad("intro.html");
        var listeningElement = $('#listening2');
        var receivedElement = $('#received2');
        listeningElement.css('display','none');
        receivedElement.css('display','block');

        alert(screenHeight);
        alert(totalScreenHeight);
         */
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var today = new Date();
        setGlobalDateVar(today.getFullYear(), today.getMonth(),today.getDate(), today.getDay());
        notif=1;
        //setGlobalVar(1);

        calendar = new Calendar();

        calendar.setup(startApp);
    },
    receivedEvent: function(id) {
    }
};

function initFooter(){
    var mainMenuCnt =  Math.floor((totalWidth - mainMenuWidth) / mainMenuWidth); // 350 px = 7
    //var MainMenuPageCnt = Math.ceil(appMainMenuLst.length / mainMenuCnt); // 14 / 7 = 2
    pFooter = 0;
    var MainMenuPageIndex = pFooter;
    var contents = "<table id='footerTable' width='100%' style='padding: 0; margin: 0;'><tr style='height: "+mainMenuHeight+"px;'>";
    contents = contents + "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: mediumpurple;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;'   id='addMenuBtn11' onclick='menuTypeChange(\"hueie\");pageLoad(\"calendar.html\")'><div class='main_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>";

    for(var i = MainMenuPageIndex * mainMenuCnt ; i < ( MainMenuPageIndex + 1 ) * mainMenuCnt  ; i ++  ){
        if(i < appMainMenuLst.length){
            contents = contents + appMainMenuLst[i];
        } else{
            contents = contents + "<td width='"+mainMenuWidth+"px' ></td>";
        }
    }
    contents = contents + "</tr></table>";
    $('#footerTable').replaceWith(contents);
}

function initBody(){

    var contents;
    contents = "<input type='hidden' id='signedUserEmail' name='signedUserEmail'> "+
		"<div id='appBody'  class='container-fluid' style='margin-bottom: "+mainMenuHeight+"px;'>" +
        "<div class='top' style='text-align: center;height:"+noticHeight+"px;'><a id='notification' href='#' style='height: "+noticHeight  +"px;'></a></div>" +
        "<div id='app' style='margin-top: "+noticHeight+"px;'></div>"+
        "<div id='footer' class='footer' style='height:"+mainMenuHeight+"px;' ><table id='footerTable' width='100%' style='padding: 0; margin: 0;'><tr style='height:"+mainMenuHeight+"px;' ></tr></table></div>" +
        "</div>";

    $('#appBody').replaceWith(contents);
}
function startApp() {
	initBgImg(); 
	initBody();
    appView = $('#app');
    pageLoad("calendar.html");
    initFooter();
}
function initBgImg(){
    var w = screenWidth;
    var h = screenHeight;
    var layer = "<div class='sign_bg_layer' >"+
		"<div class='sign_bg_star0' ></div>"+
		"<div class='sign_bg_star1' ></div>"+
		"<div class='sign_bg_star2' ></div>"+
		"<div class='sign_bg_star3' ></div>"+
		"<div class='sign_bg_star4' ></div>"+
		"<div class='sign_bg_star5' ></div>"+
		"<div class='sign_bg_star6' ></div>"+
		"<div class='sign_bg_star7' ></div>"+
		"<div class='sign_bg_star8' ></div>"+
		"<div class='sign_bg_star9' ></div>"+
		"<div class='sign_layer_main_icon'></div></div>";
/*

		"<div class='sign_bg_star10' ></div>"+
		"<div class='sign_bg_star11' ></div>"+
		"<div class='sign_bg_star12' ></div>"+
		"<div class='sign_bg_star13' ></div>"+
		"<div class='sign_bg_star14' ></div>"+*/


	//$.fx.off = false;

//	$('.sign_bg_star9').animate( { left:'500px',top:'300px' }, 5 , 'linear' );
//	$('.sign_bg_star9').animate( 'droppingStar8' , 5 , 'linear' );

    $('body').append(layer);
    var oj = $(".sign_bg_layer");
    // 불투명 배경 레이어 크기 설정
    oj.css('width',w);
    oj.css('height',h);
    oj.css('display','block');
	//finish making sign_bg_layer

	var oj3 = $(".sign_layer_main_icon");
    // 불투명 배경 레이어 크기 설정
	oj3.css('top',(h-w*3/4)/2);
    oj3.css('left',w/(4*2));
    oj3.css('width',w*3/4);
    oj3.css('height',w*3/4);
    oj3.css('display','block');
}


function initSignUp(){
    var inputPopUp = "<div id='popup' class='pop_up_layer' "+
		"style='font-family: nanum-barun-gothic-bold;color:white;'>";
    
	inputPopUp = inputPopUp +
		"<input type='hidden' id='signType' value='1'>"+
		"<table width='100%'>"+
		"<tr style='text-align:center;'>"+
        "<td><a onclick='pop_up_layer_close();initSignIn();'>Sign In</a></td>" +
        "<td>Sign Up</td>" +
        "<td><a onclick='removeInitSign();'>Trial</a></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td>Email:</td>" +
        "<td colspan='2'><input type='email' name='user_email' id='user_email' style='width:100%;color:black;'></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td>Password:</td>" +
        "<td  colspan='2'><input type='password' name='user_pw' id='user_pw' style='width:100%;color:black;'></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td>Confirm:</td>" +
        "<td  colspan='2'><input type='password' name='user_pwConfirm' id='user_pwConfirm' style='width:100%;color:black;'></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td></td>" +
        "<td  colspan='2' style='text-align:left;'><input type='submit' id='addUserSubmit'></td>" +
        "</tr>" +
		"</table>";
    
	inputPopUp = inputPopUp + "</div>" ;
	pop_up_layer(inputPopUp, screenWidth*2/3, screenHeight/3, screenWidth/6, screenHeight/3);
}

function initSignIn(){
    var inputPopUp = "<div id='popup' class='pop_up_layer' "+
		"style='font-family: nanum-barun-gothic-bold;color:white;'>";
    
	inputPopUp = inputPopUp +
		"<input type='hidden' id='signType' value='0'>"+
		"<table width='100%'>"+
		"<tr style='text-align:center;'>"+
        "<td>Sign In</td>" +
        "<td><a onclick='pop_up_layer_close();initSignUp();'>Sign Up</a></td>" +
        "<td><a onclick='removeInitSign();'>Trial</a></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td>Email:</td>" +
        "<td colspan='2' ><input type='email' name='user_email' id='user_email' style='width:100%;color:black;'></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td>Password:</td>" +
        "<td colspan='2' ><input type='password' name='user_pw' id='user_pw' style='width:100%;color:black;'></td>" +
        "</tr>" +
		"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
        "<td></td>" +
        "<td colspan='2' style='text-align:left;'><input type='submit' id='addUserSubmit'></td>" +
        "</tr>" +
		"</table>";
    //"<tr style='height:"+screenHeight/(3*6)+"px;'>"+
    //    "<td colspan=2 align=center>Remember me <input type='checkbox' name='status' id='status' style='display:inline-block;'></td>" +
    //    "</tr>" +
	
	inputPopUp = inputPopUp + "</div>" ;
	pop_up_layer(inputPopUp, screenWidth*2/3, screenHeight/3, screenWidth/6, screenHeight/3);
}



$(document).on('tap', '.sign_bg_layer', function() { // sign_bg_layer 를 클릭하면 닫기
    setTimeout(function (){
        if($('#popup').length) { // Delete Sign Layer
			var oj = $('#popup');
			oj.remove();
		} else {
			if($('.sign_white_layer').length) { // delete White layer
				var oj = $('.sign_white_layer');
				oj.remove();
			} else { //make white layer	
				var layer2 = "<div class='sign_white_layer' ></div>";
				$('body').append(layer2);
				var oj2 = $(".sign_white_layer");
				oj2.css('width',screenWidth*4/5);
				oj2.css('height',screenHeight*1/2);
				oj2.css('left', screenWidth/(2*5) );
				oj2.css('top',screenHeight/4);
				oj2.css('display','block');
			}
		}
    }, 200);
});
$(document).on('tap', '.sign_white_layer', function() { // sign_bg_layer 를 클릭하면 닫기
    setTimeout(function (){
        initSignIn();
    }, 200);
});

function removeInitSign(){
	var oj1 = $('#popup');
	oj1.remove();
	var oj2 = $('.sign_white_layer');
	oj2.remove();
	var oj3 = $('.sign_bg_layer');
	oj3.remove();
}

function setGlobalVar(_addEntryBtn1){
    if(_addEntryBtn1 != null){
        addEntryBtn1 = _addEntryBtn1;
    }
}
function setGlobalDateVar(_year, _month, _date, _day){
    if(_year != null){
        pYear = _year;
    }
    if(_month != null){
        pMonth = _month;
    }
    if(_date != null){
        pDate = _date;
    }
    if(_day != null){
        pDay = _day;
    }
}
function setStringDateVar(_year, _month, _date, _day){
    if(_year != null){
        $('#year').text(_year);
    }
    if(_month != null){
        $('#month').text(_month);
    }
    if(_date != null){
        $('#date').text(_date);
    }
    if(_day != null){
        $('#day').text(_day);
    }
}
$(document).on("pageload", "#calendarPage", function(e) {
    setGlobalVar(1);
    setStringDateVar(pYear+".", parseInt(pMonth)+1, "","");
    calendar.changeCalendar(pYear,pMonth,pDate);
});
window.setInterval( function() {
    var content = "";
    switch (notif){
        case 1 :
            content = "<a id='notification'  href='#' onclick='window.open(\"http://www.hueie.com\", \"_system\");' style='height: "+noticHeight  +"px;font-size: " + (noticHeight)/2  +"px;' >Go To Huetap !!!</a>";
            notif=2;
            break;
        case 2 :
            content = "<a id='notification'  href='#' onclick='window.open(\"http://www.hueie.com\", \"_system\");' style='height: "+noticHeight  +"px;font-size: " + (noticHeight)/2  +"px;'>Get Your Plans !!!</a>";
            notif=1;
            break;
    }
    $("#notification").replaceWith(content);
}, 2000 );
$(document).on("pageload", "#introPage", function(e) {
    /*
    var introPopUp = "<div id='popup' class='pop_up_layer' style='background:orange;'>" +
        "Today's Notification" +
        "</div>";
        */
    //opacity_bg_layer();
    //pop_up_layer(introPopUp);
});
$(document).on("pageload", "#magazinPage", function(e) {
});
$(document).on("pageload", "#mapPage", function(e) {
});
$(document).on("pageload", "#notePage", function(e) {
});
$(document).on("pageload", "#settingPage", function(e) {
});
$(document).on("pageload", "#notifPage", function(e) {
});

function update(){
    var contents;
    contents = "<div id='popup' class='pop_up_layer' style='text-align:center;border-radius: 25px;background:lightgoldenrodyellow;font-family: nanum-barun-gothic-bold;font-size: "+updateFontSize+"px;color: "+themeColorHighLight+"'>";
    contents = contents + "<div style='padding-top:"+screenHeight/12+"px; vertical-align:middle; border-radius: 25px;border: 1px;'>It will be updated <br>If leave your comment below link<br>We will apply well. :)<br><br>" +
        "<a href='#' style='text-decoration : none;color:steelblue;' onclick='window.open(\"http://www.hueie.com\", \"_system\");' >Go To Hutap !!!</a>";
    contents = contents + "</div></div>";
    opacity_bg_layer();
    pop_up_layer(contents, screenWidth*2/3, screenHeight/3, screenWidth/6,screenHeight/3);
}

$(document).on("swipeLeft", "#footer", function (e) {
    var mainMenuCnt =  Math.floor((totalWidth-mainMenuWidth) / mainMenuWidth); // 350 px = 7
    var MainMenuPageCnt = Math.ceil(appMainMenuLst.length / mainMenuCnt); // 14 / 7 = 2
    if( pFooter == MainMenuPageCnt-1){
        pFooter = 0;
    } else {
        pFooter= pFooter + 1;
    }
    var MainMenuPageIndex = pFooter;

    var contents = "<table id='footerTable' width='100%' style='padding: 0; margin: 0;'><tr style='height:"+mainMenuHeight+"px;'>";
    contents = contents + "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: mediumpurple;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;'   id='addMenuBtn11' onclick='menuTypeChange(\"hueie\");pageLoad(\"calendar.html\")'><div class='main_icon' style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>";

    for(var i = MainMenuPageIndex * mainMenuCnt ; i < ( MainMenuPageIndex + 1 ) * mainMenuCnt ; i ++  ){
        if(i < appMainMenuLst.length){
            contents = contents + appMainMenuLst[i];
        } else{
            contents = contents + "<td width='"+mainMenuWidth+"px' ></td>";
        }
    }
    contents = contents + "</tr></table>";
    $('#footerTable').replaceWith(contents);

});

$(document).on("swipeRight", "#footer", function (e) {
    var mainMenuCnt =  Math.floor((totalWidth-mainMenuWidth) / mainMenuWidth) ; // 350 px = 7
    var MainMenuPageCnt = Math.ceil(appMainMenuLst.length / mainMenuCnt); // 14 / 7 = 2
    if( pFooter == 0){
        pFooter = MainMenuPageCnt - 1;
    } else {
        pFooter= pFooter - 1;
    }
    var MainMenuPageIndex = pFooter;

    var contents = "<table id='footerTable' width='100%' style='padding: 0; margin: 0;'><tr style='height: "+mainMenuHeight+"px;'>";
    contents = contents + "<td width='"+mainMenuWidth+"px' ><a class='mainMenu' style=' background-color: mediumpurple;height:"+mainMenuHeight+"px;padding-top:"+mainMenuHeight/7 +"px;' id='addMenuBtn11' onclick='menuTypeChange(\"hueie\");pageLoad(\"calendar.html\")'><div class='main_icon'  style='height: "+mainMenuWidth+"px;width: "+mainMenuWidth+"px;'></div></a></td>";

    for(var i = MainMenuPageIndex * mainMenuCnt ; i < ( MainMenuPageIndex + 1 ) * mainMenuCnt ; i ++  ){
        if(i < appMainMenuLst.length){
            contents = contents + appMainMenuLst[i];
        } else{
            contents = contents + "<td width='"+mainMenuWidth+"px' ></td>";
        }
    }
    contents = contents + "</tr></table>";
    $('#footerTable').replaceWith(contents);

});

$(document).on("swipeDown", "#footer", function (e) {
    
});

