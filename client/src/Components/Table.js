import React, { useState } from 'react';
import './Table.css';
import RestService from "../Services/api.service";

const Modal = ({ onClose, children }) => {
    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <button style={modalCloseStyle} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

const Table = ({ headers, data, deleteJob }) => {
    const [loader, setLoader] = useState(false);
    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [tableData, setTableData] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [applicants, setApplicants] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    const handleEdit = (index) => {
        console.log(`Edit action for item at index ${index?.id}`);
        setActiveDropdown(null); // Close dropdown after action
    };

    const handleDelete = (index) => {
        console.log(`Delete action for item at index ${index?.id}`);
        deleteJob(index?.id);
        setActiveDropdown(null); // Close dropdown after action
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown visibility
    };

    // Fetch applicants for a specific job
    const fetchApplicants = async (jobId) => {
        console.log(`Fetching applicants for jobId: ${jobId}`);
        setLoader(true);
        try {
            const response = await RestService.getJobApplicationsById(jobId);
            if (response.status === 200) {
                console.log("Applicants fetched successfully:", response.data.applicants);
                setApplicants(response.data.applicants);
            }
        } catch (err) {
            console.error("Error occurred on viewAllJobs", err);
        } finally {
            setLoader(false);
        }
    };

    const handleJobNameClick = async (job) => {
        if (user?.user?.type === "company") {
            console.log(`Job name clicked for job:`, job.userName);
            setSelectedJob(job.userName);

            // Fetch applicants for the selected job
            await fetchApplicants(job.id);
            setIsModalOpen(true); // Open the modal
        }
    };

    const sortDataByColumn = (columnKey) => {
        console.log(`Sorting by column: ${columnKey}`);
        const sortedData = [...tableData].sort((a, b) => {
            if (a[columnKey] < b[columnKey]) return -1;
            if (a[columnKey] > b[columnKey]) return 1;
            return 0;
        });
        setTableData(sortedData);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'status-green';
            case 'In-Progress':
                return 'status-orange';
            case 'Process':
                return 'status-blue';
            default:
                return 'status-default';
        }
    };

    const handleStatusChange = async(e, rowIndex,row) => {
        console.log(`Status change for row ${rowIndex}, new status: ${e.target.value}, data: ${row}`);
        console.log(row)

        setLoader(true);
        try {
            const updatedData = tableData.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...row,
                        status: e.target.value,
                    };
                }
                return row;
            });
            setTableData(updatedData);
            const response = await RestService.completeJob(row.id);
            if (response.status === 200) {
                console.log("Applicants fetched successfully:", response.data.applicants);
                setApplicants(response.data.applicants);
            }
        } catch (err) {
            console.error("Error occurred on viewAllJobs", err);
        } finally {
            setLoader(false);
        }


   
    };

    const closeModal = () => {
        console.log("Closing modal");
        setIsModalOpen(false);
        setApplicants([]);
    };

    console.log("peeche ka data",data)

    return (
        <div className="order">
            <div className="head">
                <h3>{user?.user?.type === "user" ? 'Applied Job' : 'Posted Job'}</h3>
                <i className='bx bx-search'></i>
                <i className='bx bx-filter'></i>
            </div>
            <table className="custom-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} onClick={() => sortDataByColumn(header.replace(/\s/g, '').toLowerCase())}>{header}</th>
                        ))}
                        {user?.user?.type === "company" && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.keys(row).filter(key => key !== 'id').map((key, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    onClick={() => {
                                        if (key === 'userName' && user?.user?.type === "company") {
                                            console.log(`Title clicked for job: ${row.userName}, at row ${rowIndex}`);
                                            handleJobNameClick(row);
                                        } else {
                                            console.log(`Clicked on ${key} for job: ${row.userName}`);
                                        }
                                    }}
                                    style={{
                                        cursor: key === 'title' && user?.user?.type === "company" ? 'pointer' : 'default',
                                    }}
                                >
                                    {key === 'userImage' ? <img src={row[key]} alt="User" /> : key === 'status' ? user?.user?.type === 'company' ? (
                                        <select
                                            value={row[key]}
                                            onChange={(e) => handleStatusChange(e, rowIndex,row)}
                                            className={`status-select ${getStatusColor(row[key])}`}
                                        >
                                            <option value="Open">Open</option>
                                            <option value="Completed">Completed</option>
                                        </select>
                                    ) :
                                        <button className={`status-button ${getStatusColor(row[key])}`}>
                                            {row[key]}
                                        </button>
                                        :
                                        (
                                            row[key]
                                        )}
                                </td>
                            ))}
                            {user?.user?.type === "company" &&
                                <td className="action-column">
                                    <div className="dropdown-container">
                                        <div className={`dropdown ${activeDropdown === rowIndex ? 'active' : ''}`}>
                                            <div className="dropdown-content">
                                                <button onClick={() => handleEdit(row)}>Edit</button>
                                                <button onClick={() => handleDelete(row)}>Delete</button>
                                            </div>
                                        </div>
                                        <i className="bx bx-dots-vertical-rounded" onClick={() => toggleDropdown(rowIndex)}></i>
                                    </div>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <h2>Applicants for {selectedJob}</h2>
                    <table style={applicantsTableStyle}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Name</th>
                                <th style={tableHeaderStyle}>Email</th>
                                <th style={tableHeaderStyle}>phoneNumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((applicant, index) => (
                                <tr key={index}>
                                    <td style={tableCellStyle}>{applicant.name}</td>
                                    <td style={tableCellStyle}>{applicant.email}</td>
                                    <td style={tableCellStyle}>{applicant.phoneNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal>
            )}
        </div>
    );
};

export default Table;

// Inline styles for Modal
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
};

const modalCloseStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
};

const applicantsTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
};

const tableHeaderStyle = {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
};

const tableCellStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
};
