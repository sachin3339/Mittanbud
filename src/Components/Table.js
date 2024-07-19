import React, { useState } from 'react';
import './Table.css';

const Table = ({ headers, data }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleEdit = (index) => {
        console.log(`Edit action for item at index ${index}`);
        setActiveDropdown(null); // Close dropdown after action
    };

    const handleDelete = (index) => {
        console.log(`Delete action for item at index ${index}`);
        setActiveDropdown(null); // Close dropdown after action
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown visibility
    };

    const handleRowClick = (rowIndex) => {
        console.log(`Clicked on row ${rowIndex}:`, data[rowIndex]);
    };

    const sortDataByColumn = (columnKey) => {
        console.log(`Sorting by column: ${columnKey}`);
        const sortedData = [...data].sort((a, b) => {
            if (a[columnKey] < b[columnKey]) return -1;
            if (a[columnKey] > b[columnKey]) return 1;
            return 0;
        });
        // Update data state with sorted data if needed
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'status-green';
            case 'Pending':
                return 'status-orange';
            case 'Process':
                return 'status-blue';
            default:
                return 'status-default';
        }
    };

    return (
        <div className="order">
            <div className="head">
                <h3>Posted Job</h3>
                <i className='bx bx-search'></i>
                <i className='bx bx-filter'></i>
            </div>
            <table className="custom-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} onClick={() => sortDataByColumn(header.replace(/\s/g, '').toLowerCase())}>{header}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} onClick={() => handleRowClick(rowIndex)}>
                            {Object.keys(row).filter(key => key !== 'id').map((key, cellIndex) => (
                                <td key={cellIndex}>
                                    {key === 'userImage' ? <img src={row[key]} alt="User" /> : key === 'status' ? (
                                        <button className={`status-button ${getStatusColor(row[key])}`}>
                                            {row[key]}
                                        </button>
                                    ) : (
                                        row[key]
                                    )}
                                </td>
                            ))}
                            <td className="action-column">
                                <div className="dropdown-container">
                                    <div className={`dropdown ${activeDropdown === rowIndex ? 'active' : ''}`}>
                                        <div className="dropdown-content">
                                            <button onClick={() => handleEdit(rowIndex)}>Edit</button>
                                            <button onClick={() => handleDelete(rowIndex)}>Delete</button>
                                        </div>
                                    </div>
                                    <i className="bx bx-dots-vertical-rounded" onClick={() => toggleDropdown(rowIndex)}></i>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;