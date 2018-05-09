<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>
<%@ include file="/dbconf.jsp" %>
<%
request.setCharacterEncoding("UTF-8");
String bkUpLoadData = request.getParameter("bkUpLoadData");
if(bkUpLoadData == null){
	bkUpLoadData = "no data";
	return;
}
System.out.println(bkUpLoadData);
%>
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

try {
	
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	conn = DriverManager.getConnection(url,id,pw);
	stmt = conn.createStatement();
	
	String sql = "";
	//기존 데이터 싹 지우고 새 데이터로 백업 뒤에 유저 아이디로 구분해야함
	
	
	String [] dataRow = bkUpLoadData.split("\\|",100);
	for ( int i =0 ; i < dataRow.length-1 ; i++){
	
		StringBuilder sb = new StringBuilder();
		System.out.println(dataRow[i]);
		String [] dataCol = dataRow[i].split("\\/");
		if (dataCol.length < 11  ){
			if(i==0){
				String user_email = dataCol[0];
				sql = "delete from huetap_calendar where user_email = '" + user_email + "';";
				stmt.execute(sql);
			}
			continue;
		}
		//System.out.println(dataCol[0]  );
			
		String sId = ""; String sInfo_0 = ""; String sInfo_1 = ""; String sInfo_2 = "";
		String sInfo_3 = ""; String sInfo_4 = ""; String sInfo_5 = "";
		String sInfo_6 = ""; String sReg_dt = ""; String sKindId = ""; String sUser_email = "";
		
		if( dataCol[0] != null){
			sId = dataCol[0];
		}
		if( dataCol[1] != null){
			sInfo_0 = dataCol[1];
		}
		if( dataCol[2] != null){
			sInfo_1 = dataCol[2];
		}
		if( dataCol[3] != null){
			sInfo_2 = dataCol[3];
		}
		if( dataCol[4] != null){
			sInfo_3 = dataCol[4];
		}
		if( dataCol[5] != null){
			sInfo_4 = dataCol[5];
		}
		if( dataCol[6] != null){
			sInfo_5 = dataCol[6];
		}
		if( dataCol[7] != null){
			sInfo_6 = dataCol[7];
		}
		if( dataCol[8] != null){
			sReg_dt = dataCol[8];
		}
		if( dataCol[9] != null){
			sKindId = dataCol[9];
		}
		if( dataCol[10] != null){
			sUser_email = dataCol[10];
		}
		if( (sReg_dt!=null || sReg_dt!="")&& (sKindId!=null || sKindId!="")&& (sUser_email!=null || sUser_email!="") ) {
			sql = sb.append("insert into huetap_calendar values('" + sId 
					+ "','"+sInfo_0+"','"+sInfo_1+"','"+sInfo_2
					+ "','"+sInfo_3+"','"+sInfo_4+"','"+sInfo_5
					+ "','"+sInfo_6+"','"+sReg_dt+"','"+sKindId+"','"+sUser_email+"' );").toString();
			System.out.println(sql);
			stmt.execute(sql);
		}
	}
	
	
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


%>

</body>
</html>