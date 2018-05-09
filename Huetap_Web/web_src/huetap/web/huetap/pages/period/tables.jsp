<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*"%>
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
<!DOCTYPE html>
<%
	Connection conn = null;
	Statement stmt = null;
	try {
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		conn = DriverManager.getConnection(url, id, pw);
		stmt = conn.createStatement();

		StringBuilder sb = new StringBuilder();
		String sql = sb.append("select * from huetap_calendar where kindId = 1 and user_email = '"+user_email+"';").toString();
		ResultSet rs = stmt.executeQuery(sql);
%>
<div class="row">
	<div class="col-lg-12">
		<h1 class="page-header">Period</h1>
	</div>
	<!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
	<div class="col-lg-12">
		<div class="panel panel-default">
			<div class="panel-heading">Period Time Table</div>
			<!-- /.panel-heading -->
			<div class="panel-body">
				<table width="100%"
					class="table table-striped table-bordered table-hover"
					id="dataTables-example">
					<thead>
						<tr>
							<th>Date</th>
							<th>Love</th>
							<th>Love</th>
							<th>Pills</th>
							<th>Hospital</th>
						</tr>
					</thead>
					<tbody>
<%
int i = 1;
while (rs.next()) {
	String pid = rs.getString(1);
	String pInfo_0 = rs.getString(2);  //start
	String pInfo_1 = rs.getString(3);  //end
	int pInfo_2 = rs.getInt(4);  //L
	int pInfo_3 = rs.getInt(5);  //L
	int pInfo_4 = rs.getInt(6);  //P
	int pInfo_5 = rs.getInt(7);  //H
	String pInfo_6 = rs.getString(8); 
	String pReg_dt = rs.getString(9); 
	String pKindId = rs.getString(10); 
	String pUser_email = rs.getString(11); 			
	
	String pInfo_2Relt = "";
	if(pInfo_2 == 1){
		pInfo_2Relt = "Non-Controled!";
	}
	String pInfo_3Relt = "";
	if(pInfo_3 == 1){
		pInfo_3Relt = "Controled!";
	}
	String pInfo_4Relt = "";
	if(pInfo_4 == 1){
		pInfo_4Relt = "Taking Pills!";
	}
	String pInfo_5Relt = "";
	if(pInfo_5 == 1){
		pInfo_5Relt = "Reserved!";
	}
	
	if (i%2 == 1) {
%>
						<tr class="odd gradeX">
							<td><%=pReg_dt%></td>
							<td class="center"><%=pInfo_2Relt%></td>
							<td class="center"><%=pInfo_3Relt%></td>
							<td class="center"><%=pInfo_4Relt%></td>
							<td class="center"><%=pInfo_5Relt%></td>
						</tr>
						<%
	} else if (i%2 == 0) {
						%>
						<tr class="even gradeC">
							<td><%=pReg_dt%></td>
							<td class="center"><%=pInfo_2%></td>
							<td class="center"><%=pInfo_3%></td>
							<td class="center"><%=pInfo_4Relt%></td>
							<td class="center"><%=pInfo_5Relt%></td>
						</tr>
<%
	}
}
rs.close();
%>	
					</tbody>
				</table>
				<!-- /.table-responsive  -->
				<div class="well">
					<h4>Near Women Hospitals</h4>
					<div id="map_div" style="height: 500px;"></div>
	<script type="text/javascript">
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map_div'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 8
	  });
	}
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBMwDnK_QwgM3ayWgUYXjXr95QGJa1Azg&callback=initMap">
    </script>


					<a class="btn btn-default btn-lg btn-block" target="_blank"
						href="https://datatables.net/">View Women Hospitals List</a>
				</div>
			</div>
			<!-- /.panel-body -->
		</div>
		<!-- /.panel -->
	</div>
	<!-- /.col-lg-12 -->
</div>
<%
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

%>
  </body>
</html>