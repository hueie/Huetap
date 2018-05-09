<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
  
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0;url=pages/index.jsp">
<title>HUETAP</title>
<%
response.sendRedirect("pages/index.jsp"); //같은폴더에 있을때는 파일명만 명시한다.
%>
</head>
<body>
Go to <a href="pages/index.jsp">/pages/index.jsp</a>
</body>
</html>
