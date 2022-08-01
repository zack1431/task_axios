import {Link} from "react-router-dom";

function SideBar(){
	return (
		<div>
        	<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            
            <hr className="sidebar-divider my-0" />

           
            <li className="nav-item active">
                <Link to="/">
                    <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                </Link>
            </li>

            {/*<li className="nav-item active">
                <Link to="/adduser">
                    <a className="nav-link" href="index.html">
                    <i className="fas fa-user"></i>
                    <span>Add User</span></a>
                </Link>
            </li>*/}

            
            <hr className="sidebar-divider" />


            {/*mentor*/}
            <li className="nav-item active">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <span>Mentor</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link to="/add-mentor">
                            <a className="collapse-item" href="buttons.html">Add Mentor</a>
                        </Link>
                        <Link to="/list-mentor">
                            <a className="collapse-item" href="cards.html">Mentor List</a>
                        </Link>
                    </div>
                </div>
            </li>

            {/*student*/}
            <li className="nav-item active">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapse3"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-user"></i>
                    <span>Student</span>
                </a>
                <div id="collapse3" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link to="/add-student">
                            <a className="collapse-item" href="buttons.html">Add Student</a>
                        </Link>
                        <Link to="/list-student">
                            <a className="collapse-item" href="cards.html">Student List</a>
                        </Link>
                    </div>
                </div>
            </li>

             
            <li className="nav-item">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

             
            <hr className="sidebar-divider" />

            
            <div className="sidebar-heading">
                Addons
            </div>

              
            <li className="nav-item">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

             
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

             
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

             
            <hr className="sidebar-divider d-none d-md-block"/>

            

             
            

        	</ul>
		</div>
	)
}

export default SideBar;