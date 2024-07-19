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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{nextFlag ? "Choose SubCategory" : "Choose Category"} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group> */}
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {
                        nextFlag &&

                        <Button variant="secondary" onClick={() => setNextFlag(!nextFlag)}>
                            Previous
                        </Button>
                    }
                    <Button variant="primary" disabled={selectedOption?.length === 0 || selectedOption === null} onClick={() =>{
                        if(nextFlag){
                            handleCloseChanges();
                        }
                        else{
                            setNextFlag(!nextFlag);
                        }
                    } }>
                        {nextFlag ? "Save Changes" : "Choose Category"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BsModal;