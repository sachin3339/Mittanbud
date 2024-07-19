import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import GLOBELCONSTANT from '../../Const/GlobalConst';

const BsModal = ({ show, setShow, selectedOption, setSelectedOption,
    selectedOptionCategory, setSelectedOptionCategory }) => {
    const allCategory = GLOBELCONSTANT.Services.category;
    // const [selectedOption, setSelectedOption] = useState(null);
    const [filteredSubcategories, setFilteredSubcategories] = useState([]);
    // const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
    const [nextFlag, setNextFlag] = useState(false);
    const [loader, setLoader] = useState(false);

    const category = allCategory.map(category => ({
        "value": category.categoryname,
        "label": category.categoryname
    }));

    const handleClose = () => {
        setShow(false);
        setSelectedOption(null);
        setSelectedOptionCategory(null);
    };

    const handleCloseChanges = () => {
        setShow(false);
    };
    console.log(selectedOption);
    const extractSubcategories = (categoryArray, filterValues) => {
        return categoryArray
            .filter(category => filterValues.includes(category.categoryname))
            .flatMap(category => category.subecategory)
            .map(subcategory => ({
                value: subcategory,
                label: subcategory
            }));
    };

    useEffect(() => {
        if (nextFlag && (selectedOption?.length !== 0 || selectedOption !== null)) {
            setLoader(true);
            const filterValues = selectedOption.map(category => category.value);
            const subcategories = extractSubcategories(allCategory, filterValues);
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
                <Modal.Header closeButton className='py-3'>
                    <Modal.Title className='hero2__subtitle' style={{ marginBottom: "0px", background: "transparent" }}>{nextFlag ? "Choose Sub-Category" : "Choose Category"} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-5'>

                        {
                            nextFlag ?
                                loader ?
                                    <div>Loading</div>
                                    :
                                    <Select
                                        value={selectedOptionCategory}
                                        onChange={setSelectedOptionCategory}
                                        options={filteredSubcategories}
                                        isMulti={true}
                                        isClearable={true}
                                    />
                                :

                                <Select
                                    value={selectedOption}
                                    onChange={setSelectedOption}
                                    options={category}
                                    isMulti={true}
                                    isClearable={true}
                                />
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    {
                        nextFlag &&

                        <button className='section__subtitle bg-lighter p-4 mx-3' style={{ borderRadius: "8px" }} onClick={() => setNextFlag(!nextFlag)}>
                            Previous
                        </button>
                    }
                    <button className='section__subtitle bg-lighter p-4' style={{ borderRadius: "8px" }} disabled={selectedOption?.length === 0 || selectedOption === null} onClick={() => {
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