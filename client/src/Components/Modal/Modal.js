import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import GLOBELCONSTANT from '../../Const/GlobalConst';

const BsModal = ({ show, setShow, selectedOption, setSelectedOption,
    selectedOptionCategory, setSelectedOptionCategory }) => {

    const [filteredSubcategories, setFilteredSubcategories] = useState([]);
    const [nextFlag, setNextFlag] = useState(false);
    const [loader, setLoader] = useState(false);

    const categoryOne = GLOBELCONSTANT.Services.category;

    const handleCheckboxChangeCategory = (categoryname) => {
        setSelectedOption((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(categoryname)) {
                return prevSelectedCategories.filter(name => name !== categoryname);
            } else {
                return [...prevSelectedCategories, categoryname];
            }
        });
    };

    const handleCheckboxChangeSubCategory = (categoryname) => {
        setSelectedOptionCategory((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(categoryname)) {
                return prevSelectedCategories.filter(name => name !== categoryname);
            } else {
                return [...prevSelectedCategories, categoryname];
            }
        });
    };


    const handleClose = () => {
        setShow(false);
        setSelectedOption([]);
        setSelectedOptionCategory([]);
    };

    const handleCloseChanges = () => {
        setShow(false);
    };
    console.log(selectedOption);
    const extractSubcategories = (categoryArray, filterValues) => {
        return categoryArray
            .filter(category => filterValues.includes(category.categoryname))
            .flatMap(category => category.subecategory);
    };

    useEffect(() => {
        if (nextFlag && (selectedOption?.length !== 0)) {
            setLoader(true);
            const filterValues = selectedOption
            const subcategories = extractSubcategories(categoryOne, filterValues);
            setFilteredSubcategories(subcategories);
            console.log(subcategories);
            setTimeout(() => {
                setLoader(false);
            }, 1500);
        }
    }, [nextFlag]);


    console.log("selectedOption ", selectedOption);
    console.log("selectedOptionCategory ", selectedOptionCategory);

    return (
        <>

            <Modal show={show} onHide={handleClose} size='lg' >
                <Modal.Header closeButton className='py-3 sticky-modal-header '>
                    <Modal.Title className='hero2__subtitle' style={{ marginBottom: "0px", background: "transparent" }}>{nextFlag ? "Choose Sub-Category" : "Choose Category"} </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-scrollable">
                    <div className='p-5'>

                        {
                            nextFlag ?
                                loader ?
                                    <div>Loading</div>
                                    :
                                    <div className='row'>
                                        {
                                            filteredSubcategories?.map((subCategory, index) => {
                                                return (
                                                    <div className='col-md-6 col-sm-6' key={index}>
                                                        <div class="df-login align-items-center section__subtitle bg-lighter" style={{ borderRadius: "6px", border: "1px solid" }}>
                                                            <input type="checkbox" name="Choose Category and SubCategory"
                                                                onChange={() => handleCheckboxChangeSubCategory(subCategory)}
                                                                checked={selectedOptionCategory.includes(subCategory)} />
                                                            <div className="p-3 ">{subCategory}</div>
                                                        </div>
                                                    </div>


                                                )

                                            })
                                        }





                                    </div>
                                // <Select
                                //     value={selectedOptionCategory}
                                //     onChange={setSelectedOptionCategory}
                                //     options={filteredSubcategories}
                                //     isMulti={true}
                                //     isClearable={true}
                                // />
                                :

                                <div className='row'>
                                    {
                                        categoryOne.map((category, index) => {
                                            return (
                                                <div className='col-md-6 col-sm-6' key={index}>
                                                    <div class="df-login align-items-center section__subtitle bg-lighter" style={{ borderRadius: "6px", border: "1px solid" }}>
                                                        <input type="checkbox" name="Choose Category and SubCategory"
                                                            onChange={() => handleCheckboxChangeCategory(category.categoryname)}
                                                            checked={selectedOption.includes(category.categoryname)} />
                                                        <div className="p-3 ">{category.categoryname}</div>
                                                    </div>
                                                </div>


                                            )

                                        })
                                    }





                                </div>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer className='sticky-modal-footer'>
                    {
                        nextFlag &&

                        <button className='section__subtitle bg-lighter p-4 mx-3' style={{ borderRadius: "8px" }} onClick={() => setNextFlag(!nextFlag)}>
                            Previous
                        </button>
                    }
                    <button className='section__subtitle bg-lighter p-4' style={{ borderRadius: "8px" }} disabled={selectedOption?.length === 0} onClick={() => {
                        if (nextFlag) {
                            handleCloseChanges();
                        }
                        else {
                            setNextFlag(!nextFlag);
                        }
                    }}>
                        {nextFlag ? "Save Changes" : "Choose Category"}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BsModal;