// Sidebar.js
import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { FAV_ICON } from './Icon';

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
                    <Link to="/login" className="logout">
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="text">Logout</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Sidebar;
