<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*"%>
<%@ include file="/dbconf.jsp"%>
<%
	request.setCharacterEncoding("UTF-8");
	String user_email = request.getParameter("email");
	String user_pwd = request.getParameter("pwd");

	Connection conn = null;
	Statement stmt = null;
	int userCount = 0;
	try {

		Class.forName("com.mysql.jdbc.Driver").newInstance();
		conn = DriverManager.getConnection(url, id, pw);
		stmt = conn.createStatement();

		String sql = "";
		sql = "select count(*) from huetap_user where user_email='" + user_email + "' and user_pw = '"
				+ user_pwd + "';";
		System.out.println(sql);

		ResultSet rslt = stmt.executeQuery(sql);
		rslt = stmt.executeQuery(sql);
		while (rslt.next()) {
			userCount = rslt.getInt(1);
		}

		rslt.close();

	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		try {
			if (conn != null && !conn.isClosed())
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	if (userCount != 0) {
		session.setMaxInactiveInterval(60 * 60); //60분동안 세션 지속
		session.setAttribute("signedUserEmail", user_email);
		session.getAttribute("signedUserEmail");
		response.sendRedirect("../index.jsp");
	} else {
		out.println("<script type=\"text/javascript\">");
		out.println("alert('User or password incorrect');");
		out.println("location='../index.jsp';");
		out.println("</script>");
	}
%>