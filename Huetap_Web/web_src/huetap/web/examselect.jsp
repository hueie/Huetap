<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>

<%
request.setCharacterEncoding("UTF-8");
String bkdownLoadData = request.getParameter("id");
if(bkdownLoadData == null){
	bkdownLoadData = "no data";
}
System.out.println(bkdownLoadData);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%
Connection conn = null;
Statement stmt = null;
String dataBase = "huetap"; //db name
String url = "jdbc:mysql://localhost:3306/" + dataBase +"?autoReconnect=true&useSSL=false";
String id = "root";
String pw = "1234";

try {
	
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	conn = DriverManager.getConnection(url,id,pw);
	stmt = conn.createStatement();
	
	StringBuilder sb = new StringBuilder();
	String sql = sb.append("select * from huetap_calendar where name = '"+bkdownLoadData.toString()+"';").toString();

	ResultSet rs = stmt.executeQuery(sql);
	while(rs.next()){
		int pid = rs.getInt(1);
		String pname = rs.getString(2);
		int pgrade = rs.getInt(3); 
		System.out.println("pid : " + pid);
		System.out.println("pname : " + pname);
		System.out.println("pgrade : " + pgrade);

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
<%
/*
Connection conn = null;
Statement stmt = null;
ResultSet rslt = null;
String dataBase = "huetap"; //db name
String url = "jdbc:mysql://localhost:3306/" + dataBase +"?autoReconnect=true&useSSL=false";
String id = "root";
String pw = "1234";
int userCount = 0;

try {
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	conn = DriverManager.getConnection(url,id,pw);
	stmt = conn.createStatement();
		
	String sql = "SELECT count(*) FROM HUETAP_USER WHERE USER_EMAIL = 'hueieglobal2@gmail.com';";
	rslt = stmt.executeQuery(sql);
	 while(rslt.next()){
		 userCount = rslt.getInt(1);
	 }
	 
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
*/
%>

</body>
</html>