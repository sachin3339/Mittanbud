// src/Dashboard/DashboardNavbar.js
import React, { useEffect, useState, useRef } from "react";

const DashboardNavbar = ({ sidebarHidden, toggleSidebar }) => {
    const [searchFormVisible, setSearchFormVisible] = useState(false);
    const searchButtonRef = useRef(null);
    const searchFormRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 576) {
                setSearchFormVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSearchForm = (e) => {
        if (window.innerWidth < 576) {
            e.preventDefault();
            setSearchFormVisible(!searchFormVisible);
        }
    };

    return (
        <nav>
            <i className='bx bx-menu' onClick={toggleSidebar}></i>

            <form action="#" ref={searchFormRef}>
                <div className={`form-input ${searchFormVisible ? 'show' : ''}`}>
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn" ref={searchButtonRef} onClick={toggleSearchForm}>
                        <i className={`bx ${searchFormVisible ? 'bx-x' : 'bx-search'}`}></i>
                    </button>
                </div>
            </form>
            <a href="#" className="notification">
                <i className='bx bxs-bell'></i>
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAOVBMVEX///+ZmZmurq6UlJSQkJD19fX8/PyioqLy8vLh4eHt7e2MjIzGxsbq6urR0dG8vLy1tbWoqKjb29ujmB0/AAAFV0lEQVR4nO1c0ZaDKAwVQQQXpfr/H7tiZ7rVKl5C1OlZ79O8TLwNCSQhpChu3Lhx48aNGzdu/AXo1nbOP57wrhtafTWlD1TGulKoEVJKMWH8QyolemdNdTW9X5ghsPxluMBIV5RuMFeTHGF9LzZY/sdW9N5eylK3blRmlOWLrRIumK2+wnS19UJBNJ9QwtvTeYYP2lJg6nxTrCiH8M9n8tVtCS77UrH9uXpt/I4TxRTrm/OIdjWZZ6BadyfxNFk8A1R9yv7aJTvSilpFd7i16gfdQmdc/bE0izZ75V9U67Y4cLsa2IgGqsNhPIuBjeZEVQxHabXjU+gP14O2K3aiI1X3JUSP0eohRCeqzKY6HEN0pMq8A7Qp307k2vLR1EVT4yzrvizLvsYZ14yx1XiEYjxr37XPTLSynQePCVkyWeooxkGflMI179/UjcP0qtj2KotlS36pmjEN8RBXxZS4mh74mKzXv2YRE5A9T7yKrL0c3WLd2hqIKsv6W+RLpdkMNkyJCGBYfw3oREazDWiLq/OZIqdo8IjIToN4ZH4AgChk18oQS8/e/5GP7Hqu6QELynSqCrGx/W90gJQ6r8zqABPb/YQuKoBpnlI1csI8AEFI4CBzmKKOvwvQ/cmhii735QuJ2Be0OD09prKAeFEj8jUSOwjqQaWxEx8xU9BQyT5VQcEFVmDyyPKTNyooLgUVAQXj5DgF0gOnTskFQCwN4rPTETSiDZaUQHsL5vtC0cIUtGoCMQXTVFrsBy6YQioLLbY+4Ja3QIUtGOb8kEON6Cn7VIvWTYBDSsOyKKUfvAC9XwPD62+Uehpehiz3lqxC0tMJJJfCSjyQePxHj0afHFChVbMJ8UTK4JLkIz3yq5DY9Fd+1GU1vPahxJHu/FCu9/rAR/XsjSi6Q00ghFMmQfxz1dbJJlmR2DOkVaZpH5Dl+pFt+pQGkFFOOtMmsVz/vLWfVXoLQieATI9RUpkGv1r0nGkL1E6WQtIPqXSmocmka80PW9N2iQt/JtNQ6+8f3jnnH7v9XhczFVNDH40klWmi73OB4PvJTKVS/yyhkpuqKExTxIfuMje0pprBGBvaKNNMIZ0pfpoGlpHGMh1aU2GyhNMUjVCk9HY3PrUebansq4OiPikemLM22PFPifqw8lmP12egA4sSSSOBunQpVlUBpXhSdgJkfKnpGZD4UTK+vTaJrTvdqMw9CyBl0TuVCUkSutdtR6pMFI/4z6cVu5r4zydVe3ZcilqUjd4dKFoFLVaVzLiQjSmAWJWMVHqJq/RE7Awgioykvzl3nNVmFECunm/eSGRexm+uP7lzZiucohQ6ZnK3gh/6dfTW0Z/b37BxiZ5xG72xo0D3jzFsFX7pbTPrN7wMLUPrsQrtgHpi1fZV/hsys8Y0y0/XLmdkzdDbunb8ywyxq7fRLP1i/HLNp+1ztIutNbbldcysKpWjB/cz+JUu06Y+Ort4+ho/+y/zO3uX7k/KHj/wkflytMsv3JTpEc4y+mHoQFzGKccwZXHTpVPxNDXPhTK96phbP5PQOVOm7uP5+h/BlKujey72AKZ8L3r0+57Cz5Rn3/vB+/5flxx4F8j6UjblhUwqGF/IhPP/sFdHpJpZFMe95OKF/qLXcSntHhcT/aJXnCGr5uV65CPeb3ltHGrKhJvwdaI96z66xPSKjIfosa/iJ3zLpIEiZNa5FjBNbzhlhAfHRIyTZo1kTBmRp04ZCVfhJc0EVHn+RBzaNJxLRiJpm2YDSl4wYeiXa/rUpgvxHZOwnviW6WITXhPbFgPbAss/NLHtheUUPPsHp+DduHHjxo0bN278P/EvTO0+ntsMDZoAAAAASUVORK5CYII=" alt="Profile" />
            </a>
        </nav>
    );
};

export default DashboardNavbar;
