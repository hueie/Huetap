<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
if(session.getAttribute("signedUserEmail") != null){
	session.removeAttribute("signedUserEmail");
	   out.println("<script type=\"text/javascript\">");
		out.println("location='/index.jsp';");
	   out.println("</script>");
}
%>
<!-- 
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" action="topUser/signin.jsp" method="post" >
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" id="email" name="email" type="email" autofocus>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="pwd" name="pwd" type="password" >
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me">Remember Me
                                    </label>
                                </div>
                                <input type="submit" class="btn btn-lg btn-success btn-block" value="Sign In">
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         -->