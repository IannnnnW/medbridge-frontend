import { NavLink, useNavigate } from 'react-router-dom'
import './SideBar.css'
import logo from '../../assets/logo-main.png'
import smalllogo from '../../assets/favicon.png'
import { FaBitcoin } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from '../../Services/authprovider'
import { useContext } from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { BsCalendar2Week } from "react-icons/bs";


function SideBar(){
    const { setAuthUser, setAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()
    function handleLogout(){
        setAuthUser(null)
        setAuthenticated(null)
        navigate('/login')
    }
    return (
        <div className="SideBar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2">
                <span className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src={logo} alt='minddbridge' style={{height:'40px', width:'180px'}} className='logo'/>
                    <img src={smalllogo} alt='minddbridge' style={{height:'55px', width:'55px'}} className='brain'/>
                </span>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className='sidebarlink'><NavLink className={({ isActive }) =>
                            isActive
                            ? "text-active"
                            : ""
                        } to={'/dashboard'} style={{ textDecoration: 'none' }}><RxDashboard className='sidebaricon'/> <span className="ms-1 d-none d-sm-inline">Dashboard</span></NavLink>
                    </li>
                    <li className='sidebarlink'>
                        <div className="dropdown dropright">
                            <a className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <BsCalendar2Week className='sidebaricon'/> <span className="ms-1 d-none d-sm-inline">Appointments</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <ul>
                                    <li>
                                        <NavLink className={({ isActive }) =>
                                            isActive
                                            ? ""
                                            : ""
                                        } to={'/appointments/selected'} style={{ textDecoration: 'none' }}><i className="bi bi-file-earmark-text"></i> Appointments</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive }) =>
                                            isActive
                                            ? ""
                                            : ""
                                        } to={'/appointments/chosen'} style={{ textDecoration: 'none' }}><i className="bi bi-file-earmark-text"></i> Available Times</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='sidebarlink'><NavLink className={({ isActive }) =>
                            isActive
                            ? "text-active"
                            : ""
                        } to={'/history'} style={{ textDecoration: 'none' }}><IoFileTrayStackedOutline className='sidebaricon'/> <span className="ms-1 d-none d-sm-inline">History</span></NavLink>
                    </li>
                    <li className='sidebarlink'><NavLink className={({ isActive }) =>
                            isActive
                            ? "text-active"
                            : ""
                        } to={'/earnings'} style={{ textDecoration: 'none' }}><FaBitcoin className='sidebaricon'/> <span className="ms-1 d-none d-sm-inline">Earnings</span></NavLink>
                    </li>
                    <button onClick={handleLogout} className='btn logoutbtn'><IoIosLogOut className='sidebaricon' /> <span className="ms-1 d-none d-sm-inline">Logout</span></button>
                </ul>
            </div>
    )
}

export default SideBar