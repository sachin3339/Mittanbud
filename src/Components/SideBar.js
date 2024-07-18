// Sidebar.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FAV_ICON } from './Icon';
import RestService from '../Services/api.service';

const Sidebar = ({
    activeMenu,

    sidebarHidden,
    toggleSidebar,
    toggleSearchForm,
    searchFormVisible,
    handleSwitchMode
}) => {
    const menus = [{ "name": 'Dashboard', "route": '/dashboard' }, { "name": 'My Post', "route": '/mypost' }];

    const location = useLocation();
    const navigate = useNavigate();
    let user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";

    //logout the user
    const logoutUser = async () => {

        try {

            const userId = user?.user?._id;
            const payload = {
                "user_id": userId
            }
            const response = await RestService.logoutUser(payload);
            console.log(response);

            // Navigate to the dashboard
            if (response.status === 200) {
                localStorage.clear();
                navigate('/login');
            }
        } catch (err) {
            if (err.response.status === 401) {
                localStorage.clear();
                navigate('/login');
            }
            console.error("Error occurred on logoutUser page", err);
        }
    };

    return (
        <section id="sidebar" className={sidebarHidden ? 'hide' : ''}>
            <Link to="/" className="brand non-clickable">
                <div className='brand bx pb-0'>{FAV_ICON} </div>
                <span className="text">Tenders Space</span>
            </Link>
            <ul className="side-menu top">
                {menus.map((menu, index) => (
                    <li key={index} className={menu.route === location.pathname ? 'active' : ''}>
                        <Link to={menu.name.toLowerCase().replace(/\s/g, '')}>
                            <i className={`bx ${menu.name === 'Dashboard' ? 'bxs-dashboard' :
                                menu.name === 'My Store' ? 'bxs-shopping-bag-alt' :
                                    menu.name === 'Analytics' ? 'bxs-doughnut-chart' :
                                        menu.name === 'Message' ? 'bxs-message-dots' :
                                            'bxs-group'}`}></i>
                            <span className="text">{menu.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="side-menu">
                <li>
                    <Link to="/settings">
                        <i className='bx bxs-cog'></i>
                        <span className="text">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="logout">
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="text" onClick={() => logoutUser()}>Logout</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;
