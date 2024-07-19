import React, { useState } from "react";
import RestService from "../../Services/api.service";
import ToastMessage from "../../Store/ToastHook";
import { ToastContainer } from "react-bootstrap";
import ButtonLoader from "../../Components/ButtonLoader";
import hidePwdImg from '../../Auth/hide-password.svg';
import showPwdImg from "../../Auth/show-password.svg";
import { useNavigate } from "react-router-dom";
import DatePicker from '../../Components/DatePicker';
import Select from 'react-select';
import BsModal from "../../Components/Modal/Modal";
import GLOBELCONSTANT from "../../Const/GlobalConst";

const Register = () => {
    const [isRevealPwdNewPassword, setIsRevealPwdNewPassword] = useState(false);
    const [isRevealPwdConfirmPassword, setIsRevealPwdConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonLoader, setButtonLoader] = useState(false);
    const [chooseCategory, setChooseCategory] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
    const navigate = useNavigate();

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


    const handleasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setPassword(newConfirmPassword);
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


    // on register user
    const registerUser = () => {
        setButtonLoader(true);
        try {
            const payload = {
                "email": email,
                "name": name,
                "password": password,
                "language": "en",
                "platform": "Android",
                "timezone": 0,
                "type": "company",
                "deviceId": `${name.substr(0, 3)}123`,
                "phoneNumber": phoneNumber,
                "address": address,
                "pincode": pincode,
                "category": selectedOption?.map(category => category.label),
                "subcategory": selectedOptionCategory?.map(subcategory => subcategory.label)
            }

            RestService.registerUser(payload).then(
                response => {
                    if (response.status === 200) {
                        // setEmailResponse({
                        //     email: email
                        // });
                        // setShowOtpLogin("OTP");
                        ToastMessage({ type: "success", message: `${response.data?.resultMessage?.en}`, time: 2500 });
                        setTimeout(() => {
                            setButtonLoader(false);
                            navigate("/login");
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
            console.error("Error occured on registerUser page", err)
        }
    }

    console.log(chooseCategory);
    return (
        <>
            <ToastContainer />
            <>
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

                                    <div>
                                        <div class="row gx-5">
                                            <div class="col-xl-12">
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <input type="text" id="name" name="name" placeholder="Name *" value={name}
                                                            onChange={handleChangeName} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <input type="text" id="email" name="email" placeholder="Email *" value={email}
                                                            onChange={handleEmailChange} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <input type="text" id="number" name="number" placeholder="Number *"
                                                            value={phoneNumber} onChange={handleChangePhoneNumber} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <input type="text" name="Address" placeholder="Address *" value={address}
                                                            onChange={handleChangeAddress} />

                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field ">
                                                        <input type="text" name="Postal code" placeholder="Postal code *" value={pincode}
                                                            onChange={handleChangePincode} />

                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field ">
                                                        <input type="password" name="Password" placeholder="Password*" value={password}
                                                            onChange={handleasswordChange} />

                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field ">
                                                        <div>Choose Category and SubCategory</div>
                                                        <input type="checkbox" name="Choose Category and SubCategory" checked={chooseCategory} onChange={(e) => setChooseCategory(e.target.checked)} />

                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-booking2__form-btn mt-15 mb-30">
                                                        <button type="submit" class="primary-btn sign-btn w-100" onClick={registerUser}>
                                                            Post
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12">
                                                    <div className='row gx-5'>
                                                        <div className='col-md-5'>When do you want the job to start?</div>
                                                        <div className="df-input-field mb-0 col-md-7">
                                                            <DatePicker
                                                                initialDate={new Date()}
                                                                onChange={handleDateChange}
                                                                disablePastDates={true}
                                                            />
                                                        </div>

                                                    </div>
                                                </div> */}


                                            </div>
                                            {/* <div class="col-xl-6">
                                                <div class="col-md-12">
                                                    <div class="df-input-field ">
                                                        <input type="text" id="Post job" name="Post a job" placeholder="Post a job *" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field mb-1 ">
                                                        <select name="Choose the main category" id="service" className="drpdwn-select">
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
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <input type="text" id="Job heading" name="Job heading" placeholder="Job heading *" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">

                                                    <div class="df-input-field mb-1">
                                                        <select name="Select sub category" id="subcategory" className="drpdwn-select">
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
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <textarea rows={10} cols={10} type="text" name="Job description" placeholder="Job description *" />

                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="df-booking2__form-btn mt-15 mb-30">
                                                        <button type="submit" class="primary-btn sign-btn w-100">Post
                                                            <span class="icon__box">
                                                                <img class="icon__first" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                                <img class="icon__second" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div> */}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </section>
                </main>
            </>
            {
                chooseCategory &&
                <BsModal {...{
                    show: chooseCategory, setShow: setChooseCategory,
                    selectedOption, setSelectedOption,
                    selectedOptionCategory, setSelectedOptionCategory
                }} />
            }

        </>
    );
};

export default Register;
