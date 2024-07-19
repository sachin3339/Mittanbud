import React, { useState } from "react";
import RestService from "../Services/api.service";
import ToastMessage from "../Store/ToastHook";
import { ToastContainer } from "react-bootstrap";
import ButtonLoader from "../Components/ButtonLoader";
import hidePwdImg from '../Auth/hide-password.svg';
import showPwdImg from "../Auth/show-password.svg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [isRevealPwdNewPassword, setIsRevealPwdNewPassword] = useState(false);
    const [isRevealPwdConfirmPassword, setIsRevealPwdConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [buttonLoader, setButtonLoader] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setNewPassword(newPassword);
        validatePasswords(newPassword, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        validatePasswords(newPassword, newConfirmPassword);
    };


    const validatePasswords = (pwd, confirmPwd) => {
        if (pwd !== confirmPwd) {
            setPasswordError('Passwords do not match');
        } else if (pwd.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
        } else {
            setPasswordError('');
        }
    };


    // on register user
    const registerUser = () => {
        setButtonLoader(true);
        try {
            const payload = {
                "email": email,
                "name": name,
                "password": newPassword,
                "language": "en",
                "platform": "Android",
                "timezone": 0,
                "deviceId": `${name.substr(0, 3)}123`
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
            console.error("Error occured on signupCandidate page", err)
        }
    }

    return (
        <>
            <ToastContainer />
            <main>

                <div class="adjust-header-space bg-common-white"></div>

                <section class="df-contact__area section-spacing-top p-relative fix">
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="container">
                        <div class="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-xl-8">
                                <div class="section__title-wrapper text-center">
                                    <span class="section__subtitle bg-lighter">Sign up</span>
                                    <h2 class="section__title">Get new customers and jobs</h2>
                                    <p>Thousands of new missions every week. Create a free test profile now and see all the jobs near you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center" style={{ marginBottom: "100px" }}>
                            <div class="col-xl-6">
                                <div class="df-booking2__form wow fadeInUp" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp" }}>
                                    <div>
                                        <div class="row gx-5">
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="name" name="name" placeholder="Name *" value={name}
                                                        onChange={handleChangeName} />
                                                </div>
                                                {nameError && <div className="error-message text-danger">{nameError}</div>}
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="email" name="email" placeholder="Email *" value={email}
                                                        onChange={handleEmailChange} />
                                                </div>
                                                {emailError && <div className="error-message text-danger">{emailError}</div>}
                                            </div>
                                            {/* <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="number" name="number" placeholder="Number *" />
                                                </div>
                                            </div> */}
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="password" name="password" placeholder="Password *" value={newPassword}
                                                        onChange={handlePasswordChange} />
                                                    {/* <img
                                                        title={isRevealPwdNewPassword ? "Hide password" : "Show password"}
                                                        src={isRevealPwdNewPassword ? hidePwdImg : showPwdImg}
                                                        onClick={() => setIsRevealPwdNewPassword(prevState => !prevState)}
                                                        alt='icon' /> */}
                                                    <span class="fa fa-eye pass-icon"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field mb-0">
                                                    <input type="password" name="password2" placeholder="Confirm Password *" value={confirmPassword}
                                                        onChange={handleConfirmPasswordChange} />
                                                    {/* <img
                                                        title={isRevealPwdConfirmPassword ? "Hide password" : "Show password"}
                                                        src={isRevealPwdConfirmPassword ? hidePwdImg : showPwdImg}
                                                        onClick={() => setIsRevealPwdConfirmPassword(prevState => !prevState)}
                                                        alt='icon' /> */}
                                                    <span class="fa fa-eye pass-icon"></span>
                                                </div>
                                                {passwordError && <p className="text-danger">{passwordError}</p>}
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-booking2__form-btn mt-15 mb-30">
                                                    <button type="submit" class="primary-btn sign-btn w-100" disabled={name.length <= 5 ||
                                                        email.length === 0 || newPassword.length === 0 || passwordError?.length !== 0
                                                        || confirmPassword.length === 0

                                                    }
                                                        onClick={() => {

                                                            registerUser();

                                                        }
                                                        }>{
                                                            buttonLoader ?
                                                                <ButtonLoader />
                                                                :

                                                                'SignUp'
                                                        }
                                                        <span class="icon__box">
                                                            <img class="icon__first" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                            <img class="icon__second" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="sing-up-text text-center">
                                                    <span class="sign-title">
                                                        Do you have an account?
                                                    </span>
                                                    <a class="sign-link" href="/login">Sign In</a>
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
    );
};

export default Signup;
