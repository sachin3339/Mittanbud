import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Dashboard.css';

import Sidebar from '../Components/SideBar';

import NewDashboard from './NewDashboard';
import DashboardNavbar from './DashboardNavbar';
import MyPost from './MyPost';
import PageNotFound from '../Components/PageNotFound';
import JobPost from '../JobPost/JobPost';


const Dashboard = () => {

    const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
    const [searchFormVisible, setSearchFormVisible] = useState(false);
    const searchButtonRef = useRef(null);
    const searchFormRef = useRef(null);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarHidden(true);
            } else {
                setSidebarHidden(false);
            }
            if (window.innerWidth > 576) {
                setSearchFormVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const toggleSidebar = () => {
        setSidebarHidden(!sidebarHidden);
    };

    const toggleSearchForm = (e) => {
        if (window.innerWidth < 576) {
            e.preventDefault();
            setSearchFormVisible(!searchFormVisible);
        }
    };

    const handleSwitchMode = (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };



    return (
        <>
            <Sidebar


                sidebarHidden={sidebarHidden}
                toggleSidebar={toggleSidebar}
                toggleSearchForm={toggleSearchForm}
                searchFormVisible={searchFormVisible}
                handleSwitchMode={handleSwitchMode}
            />

            <section id="content">
                <DashboardNavbar
                    sidebarHidden={sidebarHidden}
                    toggleSidebar={toggleSidebar}
                />
                <Routes>
                    <Route path="/dashboard" element={<NewDashboard />} />
                    <Route path="/jobpost" element={<JobPost />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </section>
        </>
    );
};

export default Dashboard;