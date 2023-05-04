import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import '../static/navbar.css'
import { BASE_URL } from '../utils/consts';

function Sidebar() {
  const { user, logOut } = useAuthContext();
  const [ dropdownState, setDropdownState ] = useState(false);
//   const navigate = Navigate();
  return (
    <div className="header">
        <div className='containerForNavbar'>
            <div className="header_left" style={{display: 'flex', alignItems: 'center'}}>
                <h1 className='logo'>Edgen</h1>
                <div className="search_box">
                    <i className="bi bi-search"></i>
                    <input type="text" className="search_input" placeholder='Search' />
                </div>
            </div>
            <div className="header_right">
                <div className="nav_link ">
                    <div className="nav_icon">
                        <i className="bi bi-house-door-fill" style={{fontSize: "1.3rem  !important"}}></i></div>
                    <div className="nav_text">Home</div>
                </div>

                <div className="nav_link network">
                    <div className="nav_icon">
                        <i className="bi bi-people-fill" style={{fontSize: "1.3rem  !important"}}></i>
                    </div>
                    <div className="nav_text">My Network</div>
                </div>

                <div className="nav_link jobs">
                    <div className="nav_icon"><i className="bi bi-bag-fill" style={{fontSize: "1.3rem  !important"}}></i></div>
                    <div className="nav_text">Jobs</div>
                </div>

                <div className="nav_link">
                    <div className="nav_icon">
                        {/* <div className="info">3</div> */}
                        <i className="bi bi-chat-dots-fill" style={{fontSize: "1.3rem  !important"}}></i>
                    </div>
                    <div className="nav_text">Messaging</div>
                </div>

                <div className="nav_link">
                    <div className="nav_icon">
                        {/* <div className="info">3</div> */}
                        <i className="bi bi-bell-fill" style={{fontSize: "1.3rem  !important"}}></i>
                    </div>
                    <div className="nav_text">Notifications</div>
                </div>

                <div className="header_right_2" style={{borderLeft: "1px solid grey"}}>
                    <div className="nav_link">
                        <div className="nav_icon" onClick={() => {
                                setDropdownState(!dropdownState);
                            }}>
                                <img src={`${BASE_URL}/${user?.profile?.avatar}`} alt="non" style={{height:"30px",objectFit: "contain",borderRadius:"50px"}} />
                            <div className="nav_text dropdown drop" style={dropdownState == true ? { display: 'block' } : { display: 'none' }}>
                            
                                    <i className="bi bi-caret-down-fill dropdown" style={{fontSize: "1rem  !important", float: "center"}}></i>
                                    <div className="dropdown-content" style={dropdownState == true ? { display: 'block' } : { display: 'none' }}>
                                        <div className="dropdown_profile">
                                            <img src={`${BASE_URL}/${user?.profile?.avatar}`} style={{height:"30px",objectFit: "contain",borderRadius:"50px"}} alt="noimage" />
                                            <div className="dropdown_profile_info" style={{paddingLeft:"10px"}}>
                                                <div className="act_title">
                                                    { user?.username }
                                                </div>
                                                <div className="acoount_name">
                                                    Student at Jss tu science and technology ,Mysuru
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile_view_button">
                                            View profile
                                        </div>

                                        <div className="bdr_bottom"></div>
                                        <div className="title" style={{color:"black"}}>Accounts</div>
                                        <div className="list">Settings & Privacy</div>
                                        <div className="list">Help</div>
                                        <div className="list bdr_bottom">Language</div>

                                        <div className="title" style={{color:"black"}}>Manage</div>
                                        <div className="list">Post & Activity</div>
                                        <div className="list bdr_bottom">Job Postion Account</div>
                                        <div className="list" onClick={() => {
                                            logOut()
                                        }}><Link style={{ color: 'red' }} to={'/auth'}>Sign out</Link></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* <div className="right_nav_text ">
                        Try Premium Free for 1 Month
                    </div> */}
                    <div className="small_screen">
                        <i className="bi bi-three-dots"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar