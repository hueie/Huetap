<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>
<%@ include file="/dbconf.jsp" %>
<%--@ page import="java.io.*" --%>
<%
request.setCharacterEncoding("UTF-8");
String user_email = request.getParameter("user_email");
if(user_email == null){
	user_email = "no data";
	return;
}
//System.out.println(bkdownLoadData);
%>
<%
Connection conn = null;
Statement stmt = null;

try {
	
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	conn = DriverManager.getConnection(url,id,pw);
	stmt = conn.createStatement();
	
	StringBuilder sb = new StringBuilder();
	String sql = sb.append("select * from huetap_calendar where user_email = '" + user_email + "' ;").toString();

	ResultSet rs = stmt.executeQuery(sql);

	response.setContentType("application/json");
	response.setHeader("Content-Disposition", "inline");
	
	while(rs.next()){
		String pid = rs.getString(1);
		String pInfo_0 = rs.getString(2);
		String pInfo_1 = rs.getString(3); 
		String pInfo_2 = rs.getString(4); 
		String pInfo_3 = rs.getString(5); 
		String pInfo_4 = rs.getString(6); 
		String pInfo_5 = rs.getString(7); 
		String pInfo_6 = rs.getString(8); 
		String pReg_dt = rs.getString(9); 
		String pKindId = rs.getString(10); 
		String pUser_email = rs.getString(11); 
		String tmpStr = pid+"/"+pInfo_0+"/"+pInfo_1+"/"+pInfo_2+"/"+pInfo_3
				+"/"+pInfo_4+"/"+pInfo_5+"/"+pInfo_6+"/"+pReg_dt+"/"+pKindId+"/"+pUser_email+"|";
		System.out.println(tmpStr);
		out.print(tmpStr);
			
	}
	rs.close();
	
	
	
	
} catch (ClassNotFoundException e){
	e.printStackTrace();
} catch (SQLException e){
	e.printStackTrace();
} finally {
	try{
		if(conn != null && !conn.isClosed())
			conn.close();
	} catch (SQLException e){
		e.printStackTrace();
	}
}


%>
