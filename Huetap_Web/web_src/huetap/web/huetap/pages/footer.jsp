<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../vendor/morrisjs/morris.min.js"></script>
    <script src="../data/morris-data.js"></script>
 	

 	
	<!-- Flot Charts JavaScript -->
    <script src="../vendor/flot/excanvas.min.js"></script>
    <script src="../vendor/flot/jquery.flot.js"></script>
    <script src="../vendor/flot/jquery.flot.pie.js"></script>
    <script src="../vendor/flot/jquery.flot.resize.js"></script>
    <script src="../vendor/flot/jquery.flot.time.js"></script>
    <script src="../vendor/flot-tooltip/jquery.flot.tooltip.min.js"></script>
    <script src="../data/flot-data.js"></script>
    
    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>
    
    <script type="text/javascript">
		var appView = $('#page-wrapper');

		function pageLoad(u) {
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
	</script>