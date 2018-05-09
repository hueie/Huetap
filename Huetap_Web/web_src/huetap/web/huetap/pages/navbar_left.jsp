<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="#" onclick="pageLoad('dashboard/dashboard.jsp');"><img src="../img/main_icon_web.png" width="13px"> HUETAP</a>
                        </li>
                        
                        <li>
                            <a href="#" onclick="pageLoad('period/tables.jsp');"><i class="fa fa-heart-o fa-fw"></i>Period</a>
                        </li>
                        <li>
                            <a href="#" onclick="pageLoad('diabetes/graph.jsp');"><i class="fa fa-tint  fa-fw"></i>Diabetes</a>
                        </li>
                        <!-- 
                        <li>
                            <a href="#" onclick="pageLoad('diabetes/flot.jsp');"><i class="fa fa-table fa-fw"></i>Flots</a>
                        </li>
                         -->
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->