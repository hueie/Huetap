<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>

<%@ page import="java.sql.*"%>
<%@ page import="javax.json.*"%>
<%@ page import="java.util.*"%>
<%@ include file="/dbconf.jsp"%>

<%
if(session.getAttribute("signedUserEmail") == null){
	   out.println("<script type=\"text/javascript\">");
		out.println("location='/index.jsp';");
	   out.println("</script>");
}
String user_email = (String)session.getAttribute("signedUserEmail");
System.out.println("session : " + user_email);
%>

<%
	Map<String, String> m = new HashMap<String, String>();
	JsonBuilderFactory factory = Json.createBuilderFactory(m);

	JsonObjectBuilder jsonData = factory.createObjectBuilder();
	JsonArrayBuilder dataArray = factory.createArrayBuilder();

	Connection conn = null;
	Statement stmt = null;
	try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		conn = DriverManager.getConnection(url, id, pw);
		stmt = conn.createStatement();

		StringBuilder sb = new StringBuilder();
		String sql = sb.append("select * from huetap_calendar where kindId = 2 and user_email = '"+user_email+"';").toString();

		ResultSet rs = stmt.executeQuery(sql);
		while (rs.next()) {
			Double pInfo_0 = rs.getDouble(2);
			Double pInfo_1 = rs.getDouble(3);
			Double pInfo_2 = rs.getDouble(4);
			Double pSum = pInfo_0 + pInfo_1 + pInfo_2;
			String pReg_dt = rs.getString(9);

			JsonObjectBuilder tmpOb = factory.createObjectBuilder();
			tmpOb.add("period", pReg_dt.substring(0, 4)+"-" +pReg_dt.substring(4, 6)+"-"+pReg_dt.substring(6, 8));
			tmpOb.add("Morning", pInfo_0);
			tmpOb.add("Noon", pInfo_1);
			tmpOb.add("Night", pInfo_2);
			tmpOb.add("Sum", pSum);
			dataArray.add(tmpOb);
		}

		rs.close();
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	} catch (SQLException e) {
		e.printStackTrace();
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		try {
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	jsonData.add("element", "diabetes-data-chart");
	jsonData.add("data", dataArray);
	jsonData.add("xkey", "period");
	jsonData.add("ykeys", Json.createArrayBuilder().add("Morning").add("Noon").add("Night").add("Sum").build() );
	jsonData.add("labels", Json.createArrayBuilder().add("Morning").add("Noon").add("Night").add("Sum").build() );
	jsonData.add("pointSize", "2");
	jsonData.add("hideHover", "auto");
	jsonData.add("resize", "true");
	//jsonData.add("parseTime", "false");
	
	String jsonStr = jsonData.build().toString();
	System.out.println(jsonStr);
%>
<div class="row">
	<div class="col-lg-12">
		<h1 class="page-header">Diabetes</h1>
	</div>
	<!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
	<div class="col-lg-6">
		<div class="panel panel-default">
			<div class="panel-heading">Diabetes Level Line Chart</div>
			<div class="panel-body">
				<div id="diabetes-data-chart"></div>
			</div>
		</div>
	</div>
</div>
<!-- /.row -->


<!-- Morris Charts JavaScript  -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../vendor/morrisjs/morris.min.js"></script>
   <!-- <script src="../data/morris-data.js"></script>  -->


<script type="text/javascript">
	Morris.Line(
	<%=jsonStr%>
	);

	/*
	var result = JSON.parse(jsonStr); 
	 alert(result);

	 $(function() {
	 alert(jsonStr);
	 Morris.Area(jsonStr);
	 });


	 Morris.Area({
	 element: 'diabetes-data-chart"',
	 padding: 10,
	 behaveLikeLine: true,
	 gridEnabled: false,
	 gridLineColor: '#dddddd',
	 axes: true,
	 fillOpacity:.7,
	 data:result ,
	 lineColors:['#ED5D5D','#D6D23A','#32D2C9'],
	 xkey: 'period',
	 ykeys:'level',
	 labels: ['city','total'],

	 pointSize: 0,
	 lineWidth: 0,
	 hideHover: 'auto'
	 });
	 */
</script>