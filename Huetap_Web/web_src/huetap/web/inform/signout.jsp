<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%
session.removeAttribute("signedUserEmail");
response.sendRedirect("index.jsp"); //���������� �������� ���ϸ� ����Ѵ�.
%>
</body>
</html>