<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.*" %>
<%@ include file="/dbconf.jsp" %>

<%
request.setCharacterEncoding("UTF-8");
String user_email = request.getParameter("email");
String user_pwd = request.getParameter("pwd");
System.out.println("email : "+ user_email + "; pwd : " + user_pwd);
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
try {
	
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	conn = DriverManager.getConnection(url,id,pw);
	stmt = conn.createStatement();

	DateFormat dateFormat = new SimpleDateFormat("yyyyMMdd HH:mm:ss");
	//get current date time with Date()
	Date date = new Date();
	System.out.println(dateFormat.format(date));

	
	String sql = "";
	sql = "insert into huetap_user values('"+user_email+"','"+user_pwd+"','"+dateFormat.format(date)+"');";
	System.out.println(sql);
	stmt.execute(sql);
	
	
	conn.commit();
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

session.setMaxInactiveInterval(60 * 60); //60분동안 세션 지속
session.setAttribute("signedUserEmail",user_email);
session.getAttribute("signedUserEmail");

//request.getRequestDispatcher("index.jsp").forward(request, response);
response.sendRedirect("index.jsp"); //redirect do not include request set
%>

</body>
</html>