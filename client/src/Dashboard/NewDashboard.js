import React, { useState, useEffect } from "react";
import Table from "../Components/Table";
import RestService from "../Services/api.service";
import SkeletonLoader from "../Components/SkeletonLoader";
import { ToastContainer } from 'react-toastify';
import ToastMessage from "../Store/ToastHook";

const NewDashboard = () => {
    const headers = ['Job Name', 'Date', 'Status'];
    const ordersData = [
        {
            id: "1",
            userName: "Front end",
            date: "01-10-2021",
            status: "Completed"
        },
        {
            "id": 2,
            userName: "Back end",
            date: "01-10-2021",
            status: "Pending"
        },
        {
            "id": 3,
            userName: "Front end",
            date: "01-10-2021",
            status: "Completed"
        },
        {
            "id": 4,
            userName: "Back end",
            date: "01-10-2021",
            status: "Pending"
        },
        // Additional data entries...
    ];
    let user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";
        console.log("user",user.user.type)
    const [allJobs, setAllJobs] = useState([]);
    const [jobsApplied, setjobsApplied] = useState([]);
    // const [jobPosted, setJobPosted] = useState(0);
    const [completedJob, setCompletedJob] = useState(0);
    // const [totalPayment, setTotalPayment] = useState(0);
    const [loader, setLoader] = useState(false);


    //get viewAll Jobs
    const viewAllJobs = () => {
        setLoader(true);

        RestService.viewAllJobs().then(
            response => {
                if (response.status === 200) {
                    const completedJob = response.data.jobs?.filter(job => job?.status === 'completed')?.length;
                    const newJobs = response.data.jobs?.map(job => ({
                        "id": job._id,
                        "userName": job.title,
                        "date": job?.jobStartDate?.substring(0, 10),
                        "status": job?.status === 'completed' ? 'Completed' : job?.status === 'in-progress' ? "In-Progress" : "Open"

                    }))
                    setAllJobs(newJobs);
                    setCompletedJob(completedJob);
                    setTimeout(() => {
                        setLoader(false);
                    }, 1500);
                }
            }
        ).catch(err => {
            console.error("Error occurred on viewAllJobs", err);
        });
    };

 //get All Jobs by candidate
    const viewAllAppliedJobs = () => {
        setLoader(true);

        RestService.getJobAppliedByUsers(user.user._id).then(
            response => {
                if (response.status === 200) {
                    console.log("get jobs by user",response.data)
                    const completedJob = response.data.jobsApplied?.filter(job => job?.status === 'completed')?.length;
                    const newJobs = response.data.jobsApplied?.map(job => ({
                        "id": job._id,
                        "userName": job.title,
                        "date": job?.jobStartDate?.substring(0, 10),
                        "status": job?.status === 'completed' ? 'Completed' : job?.status === 'in-progress' ? "In-Progress" : "Open"

                    }))
                    setAllJobs(newJobs)
                    setjobsApplied(response.data.jobsApplied);
                    setCompletedJob(completedJob);
                    setTimeout(() => {
                        setLoader(false);
                    }, 1500);
                }
            }
        ).catch(err => {
            console.error("Error occurred on viewAllJobs", err);
        });
    };

    //delete a job
    const deleteJob = (jobId) => {
        setLoader(true);

        RestService.deleteJob(jobId).then(
            response => {
                if (response.status === 200) {
                    viewAllJobs();
                }
            }
        ).catch(err => {
            ToastMessage({ type: "error", message: err.response.data.errorMessage, time: 2500 });
            setLoader(false);
            console.error("Error occurred on deleteJob", err);
        });
    }

    useEffect(() => {
        user.user.type === "user"? viewAllAppliedJobs(): viewAllJobs();
   
    }, []);

    return (
        <>
            <ToastContainer />
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
                    {/* {user?.user?.type === 'company' &&
                        <a href="#" className="btn-download">
                            <i className='bx bxs-cloud-download'></i>
                            <span className="text">Download PDF</span>
                        </a>
                    } */}
                </div>
                <ul className="box-info">
                <li>
    <i className='bx bxs-calendar-check'></i>
    <span className="text">
        <h3>
            {loader ? 
                <SkeletonLoader skeletonCount={1.5} /> 
                : 
                (user?.user?.type === 'company' ? allJobs?.length : jobsApplied?.length)
            }
        </h3>
        <p>{user?.user?.type === 'company' ? 'Job Posted' : 'Job Applied'}</p>
    </span>
</li>
                    <li>
                        <i className='bx bxs-group'></i>
                        <span className="text">
                            <h3>{loader ?
                                <SkeletonLoader skeletonCount={1.5} />
                                :
                                completedJob}</h3>
                            <p>Completed Job</p>
                        </span>
                    </li>
                    <li>
                        <i className='bx bxs-dollar-circle'></i>
                        <span className="text">
                            <h3>
                                {loader ?
                                    <SkeletonLoader skeletonCount={1.5} />
                                    :
                                    '$2543'
                                }</h3>
                            <p>Total Payment</p>
                        </span>
                    </li>
                </ul>
                {
                    loader ?
                        <SkeletonLoader skeletonCount={10} />
                        :
                        <div className="table-data">

                            <Table headers={headers} data={allJobs} deleteJob={deleteJob} />
                        </div>
                }
            </main>

        </>
    );
};

export default NewDashboard;
