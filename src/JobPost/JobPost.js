import React, { useEffect, useState } from 'react';
import DatePicker from '../Components/DatePicker';
import { ToastContainer } from 'react-toastify';
import Select from 'react-select';
import GLOBELCONSTANT from '../Const/GlobalConst';
import RestService from '../Services/api.service';
import ToastMessage from '../Store/ToastHook';
import ButtonLoader from '../Components/ButtonLoader';

const JobPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [heading, setHeading] = useState('');
    const [date, setDate] = useState('');
    const [buttonLoader, setButtonLoader] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
    const [subCategoryList, setSubCategoryList] = useState([]);
    const [loader, setLoader] = useState(false);

    const allCategory = GLOBELCONSTANT.Services.category;

    const category = allCategory.map(category => ({
        "value": category.categoryname,
        "label": category.categoryname
    }))


    const handleChangeName = (event) => {
        const newValue = event.target.value;
        if (/^[A-Za-z\s]*$/.test(newValue)) {
            setName(newValue);

            // Check if the length is less than 5 and the string is not empty
            if (newValue.length === 0) {
                setNameError('Please Enter your full Name');
            } else {
                setNameError(''); // Clear error if the input is valid
            }
        } else {
            setNameError('Name should only contain alphabets and spaces.');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Validate email
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        setEmailError(isValidEmail ? '' : 'Invalid email address');
    };


    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangePincode = (e) => {
        setPincode(e.target.value);
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeHeading = (e) => {
        setHeading(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleDateChange = (date) => {
        // const date = e.target.value;
        changeDateFormat(date);
    }
    const changeDateFormat = (dateString) => {
        // Input date string
        // const dateString = 'Fri Jul 19 2024 00:00:00 GMT+0530 (India Standard Time)';

        // Create a Date object from the input string
        const date = new Date(dateString);

        // Format the date to yyyy-mm-dd
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        console.log(formattedDate); // Output: 2024-07-19
        setDate(formattedDate);
    }


    // Job Post
    const createJob = () => {
        setButtonLoader(true);
        try {
            const payload = {
                "name": name,
                "title": title,
                "description": description,
                "email": email,
                "phoneNumber": phoneNumber,
                "address": address,
                "pincode": pincode,
                "jobHeading": heading,
                "category": selectedOption?.value,
                "subcategory": selectedOptionCategory?.map(sub => sub.value),
                "jobStartDate": date

            }


            RestService.createJob(payload).then(
                response => {
                    if (response.status === 200 || response.status === 201) {
                        // setEmailResponse({
                        //     email: email
                        // });
                        // setShowOtpLogin("OTP");
                        ToastMessage({ type: "success", message: `Job Created Successfully`, time: 2500 });
                        setTimeout(() => {
                            setButtonLoader(false);
                            setName('');
                            setEmail('');
                            setAddress('');
                            setPhoneNumber('');
                            setDate('');
                            setHeading('');
                            setTitle('');
                            setDescription('');
                            setSelectedOption(null);
                            setSelectedOptionCategory(null);
                            setPincode('')

                        }, 1500);
                    }
                },
                err => {
                    setButtonLoader(false);
                    if (err.request.status === 0) {

                        ToastMessage({ type: "error", message: 'Please Check Your Network Connection', time: 2500 });
                    }
                    else if (err.response.status === 401) {

                        ToastMessage({ type: "error", message: 'Invalid User Name / Password!', time: 2500 });

                    }
                    else if (err.response.status === 500) {
                        ToastMessage({ type: "error", message: `${err.response.data}`, time: 2500 });

                    }
                    else {

                        ToastMessage({ type: "error", message: 'User with email already exist', time: 2500 });
                    }
                }
            )
        } catch (err) {
            // Toast.error({ message: 'Invalid User Name / Password!' })
            console.error("Error occured on createJob page", err)
        }
    }

    useEffect(() => {
        if (selectedOption !== null) {
            setLoader(true);
            const category = allCategory.find(cat => cat.categoryname === selectedOption?.label);
            const newSub = category ? category.subecategory.map(subcat => ({ label: subcat, value: subcat })) : [];

            console.log(newSub);
            setSubCategoryList(newSub);
            setTimeout(() => {
                setLoader(false);
            }, 1500);

        }
    }, [selectedOption]);
    return (
        <>
            <ToastContainer />
            <main> <div class="adjust-header-space bg-common-white"></div>

                <section class="df-contact__area section-spacing-top p-relative fix">
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="container">
                        <div class="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-xl-8">
                                <div class="section__title-wrapper text-center">
                                    <span class="section__subtitle bg-lighter">Post Job</span>
                                    <h2 class="section__title">Select category to post your job completely free
                                    </h2>
                                </div>
                            </div>
                        </div>


                        <div class="row " style={{ marginBottom: "100px" }}>

                            <div class="df-booking2__form wow fadeInUp" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp" }}>

                                <div >
                                    <div class="row gx-5">
                                        <div class="col-xl-6">
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="name" name="name" placeholder="Name *" value={name} onChange={handleChangeName} />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="email" name="email" placeholder="Email *" value={email} onChange={handleEmailChange} />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="number" name="number" placeholder="Number *" value={phoneNumber} onChange={handleChangePhoneNumber} />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" name="Address" placeholder="Address *" value={address} onChange={handleChangeAddress} />

                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field ">
                                                    <input type="text" name="Postal code" placeholder="Postal code *" value={pincode} onChange={handleChangePincode} />

                                                </div>
                                            </div>
                                            <div className="col-md-12 section__subtitle bg-lighter p-4" style={{ borderRadius: "6px" }}>
                                                <div className='row gx-5 '>
                                                    <div className='col-md-5 '>When do you want the job to start?</div>
                                                    <div className="df-input-field mb-0 col-md-7">
                                                        <DatePicker
                                                            initialDate={new Date()}
                                                            onChange={handleDateChange}
                                                            disablePastDates={true}
                                                        />
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                        <div class="col-xl-6">
                                            <div class="col-md-12">
                                                <div class="df-input-field ">
                                                    <input type="text" id="Post job" name="Post a job" placeholder="Post a job *" value={title} onChange={handleChangeTitle} />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field mb-1 ">
                                                    <Select
                                                        value={selectedOption}
                                                        onChange={setSelectedOption}
                                                        options={category}
                                                        isClearable={false}
                                                        placeholder="Select Category"
                                                    />
                                                    {/* <select name="Choose the main category" id="service" className="drpdwn-select">
                                                        <option disabled selected value> -- Choose the main category -- </option>
                                                        <option value="Area">Area</option>
                                                        <option value="cleaning">Bergen</option>
                                                        <option value="plumbing">Gjøvik</option>
                                                        <option value="plumbing">Lørenskog</option>
                                                        <option value="plumbing">Mould</option>
                                                        <option value="plumbing">Fredrikstad</option>
                                                        <option value="plumbing">Oslo</option>
                                                        <option value="plumbing">Trondheim</option>
                                                        <option value="plumbing">Alta</option>
                                                        <option value="plumbing">Ålesund</option>
                                                        <option value="plumbing">Kristiansand</option>
                                                        <option value="plumbing">Larvik</option>
                                                        <option value="plumbing">Stavanger</option>
                                                        <option value="plumbing">The ski</option>
                                                    </select> */}
                                                </div>
                                            </div>
                                            <div class="col-md-12 mt-3">
                                                <div class="df-input-field">
                                                    <input type="text" id="Job heading" name="Job heading" placeholder="Job heading *" value={heading} onChange={handleChangeHeading} />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                {
                                                    loader ?
                                                        <div> Loading ...</div>
                                                        :
                                                        <div class="df-input-field mb-1">
                                                            <Select
                                                                value={selectedOptionCategory}
                                                                onChange={setSelectedOptionCategory}
                                                                options={subCategoryList}
                                                                isClearable={false}
                                                                isMulti={true}
                                                                placeholder="Select SubCategory"
                                                            />
                                                            {/* <select name="Select sub category" id="subcategory" className="drpdwn-select">
                                                        <option disabled selected value> -- Select sub category -- </option>
                                                        <option value="Area">Area</option>
                                                        <option value="cleaning">Bergen</option>
                                                        <option value="plumbing">Gjøvik</option>
                                                        <option value="plumbing">Lørenskog</option>
                                                        <option value="plumbing">Mould</option>
                                                        <option value="plumbing">Fredrikstad</option>
                                                        <option value="plumbing">Oslo</option>
                                                        <option value="plumbing">Trondheim</option>
                                                        <option value="plumbing">Alta</option>
                                                        <option value="plumbing">Ålesund</option>
                                                        <option value="plumbing">Kristiansand</option>
                                                        <option value="plumbing">Larvik</option>
                                                        <option value="plumbing">Stavanger</option>
                                                        <option value="plumbing">The ski</option>
                                                    </select> */}
                                                        </div>
                                                }

                                            </div>
                                            <div class="col-md-12 mt-3">
                                                <div class="df-input-field">
                                                    <textarea rows={10} cols={10} type="text" name="Job description" placeholder="Job description *" value={description} onChange={handleChangeDescription} />

                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="df-booking2__form-btn mt-15 mb-30">
                                                    <button type="submit" class="primary-btn sign-btn w-100" onClick={createJob}>
                                                        {
                                                            buttonLoader ?
                                                                <ButtonLoader />
                                                                :

                                                                "Post"
                                                        }

                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </>
    )
};

export default JobPost;
