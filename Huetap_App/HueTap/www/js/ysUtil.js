
var screenHeight = $(document).height();// returns height of HTML document
var screenWidth = $(document).width(); // returns width of HTML document
var totalHeight = $(window).height(); // returns height of browser viewport
var totalWidth = $(window).width();// returns width of browser viewport
var totalScreenHeight = screen.height; // returns height of screen
var totalScreenWidth = screen.width; //return width of screen

var basisHeight = totalScreenHeight - totalHeight;
if(basisHeight == 0 ){
    basisHeight = totalHeight/24;
}
var noticHeight = basisHeight;
var calMenuHeight = 2*basisHeight;
var mainMenuHeight = 3*basisHeight; //70px
var mainMenuWidth = 3*basisHeight*(5/7) ; //50px

var searchFontSize = basisHeight;

var updateFontSize = basisHeight/2;

var dayHeight = basisHeight;
var dayFontSize = basisHeight/2;

var monthHeight = basisHeight*2/3;
var monthFontSize = basisHeight/2;
var monthDayFontSize = basisHeight/3;

//var monthHeight = basisHeight*2/3;
//var monthFontSize = basisHeight/2;
//var monthDayFontSize = basisHeight/3;

var infoTitleHeight = basisHeight*2;
var infoTitleFontSize = basisHeight;
var infoListHeight = basisHeight;
var infoListFontSize = basisHeight/2;


function pageLoad(u) {
    console.log("load "+u);
    //convert url params into an ob
    var data = {};
    if(u.indexOf("?") >= 0) {
        var qs = u.split("?")[1];
        var parts = qs.split("&");
        for(var i=0, len=parts.length; i<len; i++) {
            var bits = parts[i].split("=");
            data[bits[0]] = bits[1];
        };
    }
    $.get(u,function(res,code) {
        appView.html(res);
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent("pageload",true,true,data);
        var page = $("div", appView);
        page[0].dispatchEvent(evt);
    });
}
$(document).on('tap', '.opacity_bg_layer', function() { // 불투명 배경 레이어를 클릭하면 닫기
    setTimeout(function (){
        pop_up_layer_close();
        layer_pop_close();
    }, 200);
});

/* 불투명 배경 레이어 뛰우기 */
function opacity_bg_layer() {
    // 화면의 가로, 세로 알아내기
    var w = screenWidth;
    var h = screenHeight;
    var layer = "<div class='opacity_bg_layer' ></div>";
    $('body').append(layer);
    var oj = $(".opacity_bg_layer");
    // 불투명 배경 레이어 크기 설정
    oj.css('width',w);
    oj.css('height',h);
    oj.css('display','block');
}
/* 레이어 닫기 */
function layer_pop_close() {
    if($('.opacity_bg_layer').length) { // 불투명 배경 레이어가 실행된 상태에서만 진행
        // 불투명 배경 레이어 삭제(속도:0.5초)
        var oj = $('.opacity_bg_layer');
        oj.remove();
    }
}
function pop_up_layer( content, width, height, left ,top  ) {
    // 화면의 가로, 세로 알아내기
    var w;
    var h
    var t;
    var l;
    if (width == null) {
        w = screenWidth*5/6;
     } else{
        w = width;
    }
    if (height == null) {
        h =screenHeight*5/6;
    } else {
        h = height;
    }
    if (left == null) {
        l = w/(6*2);
    } else{
        l = left;
    }
    if (top == null) {
        t = h/(6*2);
    } else{
        t = top;
    }

    var layer = content;
    $('body').append(layer);
    var oj = $("#popup");
    // 불투명 배경 레이어 크기 설정
    oj.css('width',w);
    oj.css('height',h);
    oj.css('left', l );
    oj.css('top',t);

    oj.css('display','block');
}
/* 레이어 닫기 */
function pop_up_layer_close() {
    if($('#popup').length) { // 불투명 배경 레이어가 실행된 상태에서만 진행
        // 불투명 배경 레이어 삭제(속도:0.5초)
        var oj = $('#popup');
        oj.remove();
    }
}


/*

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
} 
if(mm<10){
    mm='0'+mm
} 
var today = dd+'/'+mm+'/'+yyyy;

*/