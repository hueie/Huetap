<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>
<%@ include file="/dbconf.jsp" %>
<%
request.setCharacterEncoding("UTF-8");
String user_email = request.getParameter("email");
String user_pwd = request.getParameter("pwd");
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
int userCount = 0;
try {
	
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	conn = DriverManager.getConnection(url,id,pw);
	stmt = conn.createStatement();
	
	String sql = "";
	sql = "select count(*) from huetap_user where user_email='"+user_email+"' and user_pw = '"+user_pwd+"';";
	System.out.println(sql);

	ResultSet rslt = stmt.executeQuery(sql);
	rslt = stmt.executeQuery(sql);
	 while(rslt.next()){
		 userCount = rslt.getInt(1);
	 }

	rslt.close();
	
	//conn.commit();
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

if(userCount!=0){
	session.setMaxInactiveInterval(60 * 60); //60분동안 세션 지속
	session.setAttribute("signedUserEmail",user_email);
	//session.getAttribute("signedUserEmail");
	
	response.sendRedirect("index.jsp");
	//request.getRequestDispatcher("index.jsp").forward(request, response);
} else {
   out.println("<script type=\"text/javascript\">");
   out.println("alert('User or password incorrect');");
   out.println("location='index.jsp';");
   out.println("</script>");
//	response.sendRedirect("index.jsp"); //redirect do not include request set
}

%>

</body>
</html>