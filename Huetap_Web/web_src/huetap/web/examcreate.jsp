<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<input type="button" value="Back Up Data Confirm">
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
	String sql = sb.append("create table if not exists student(")
			.append("id int,")
			.append("name varchar(20),")
			.append("grade int")
			.append(");").toString();
	stmt.execute(sql);
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
</body>
</html>