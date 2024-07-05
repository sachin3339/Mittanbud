import React from "react";
import Table from "../Components/Table";

const NewDashboard = () => {
    const headers = ['Job Name', 'Date', 'Status'];
    const ordersData = [
        {
            userName: "Front end",
            date: "01-10-2021",
            status: "Completed"
        },
        {
            userName: "Back end",
            date: "01-10-2021",
            status: "Pending"
        },
        {
            userName: "Front end",
            date: "01-10-2021",
            status: "Completed"
        },
        {
            userName: "Back end",
            date: "01-10-2021",
            status: "Pending"
        },
        // Additional data entries...
    ];
    return (
        <>
            <main style={{ background: "#fff" }}>
                <div className="head-title">
                    <div className="left">
                        <h1>Dashboard</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <a className="active" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Download PDF</span>
                    </a>
                </div>
                <ul className="box-info">
                    <li>
                        <i className='bx bxs-calendar-check'></i>
                        <span className="text">
                            <h3>1020</h3>
                            <p>Job Applied</p>
                        </span>
                    </li>
                    <li>
                        <i className='bx bxs-group'></i>
                        <span className="text">
                            <h3>2834</h3>
                            <p>Completed Job</p>
                        </span>
                    </li>
                    <li>
                        <i className='bx bxs-dollar-circle'></i>
                        <span className="text">
                            <h3>$2543</h3>
                            <p>Total Payment</p>
                        </span>
                    </li>
                </ul>
                <div className="table-data">

                    <Table headers={headers} data={ordersData} />


                </div>
            </main>

        </>
    );
};

export default NewDashboard;
