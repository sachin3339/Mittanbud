import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../Components/ButtonLoader";
import RestService from "../Services/api.service";
import AxiosService from "../Services/axios.service";
import { TokenService } from "../Services/storage.service";
import ToastMessage from "../Store/ToastHook";
import hidePwdImg from './hide-password.svg';
import showPwdImg from "./show-password.svg";
import { ToastContainer } from "react-toastify";


const Login = () => {
  const [buttonLoader, setButtonLoader] = useState(false);
  const [isRevealPwdLogin, setIsRevealPwdLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(null);

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/dashboard")
    setButtonLoader(true)
  }

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    setIsValid(emailRegex.test(input));
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Show validation message only when the user starts typing
    if (inputValue.length > 0) {
      validateEmail(inputValue);
    } else {
      setIsValid(null); // Reset validation when the input is empty
    }
  };

  //login the user
  const loginUser = async () => {

    try {
      setButtonLoader(true);
      const payload = {
        "email": email,
        "password": password
      }
      const response = await RestService.loginUser(payload);

      let data = response.data;
      localStorage.setItem('user', JSON.stringify(data));
      AxiosService.init('', response.data?.accessToken);
      TokenService.saveToken(response.data?.accessToken);

      // Navigate to the dashboard
      if (data?.user?.type === 'user' || data?.user?.type === 'company') {
        navigate('/dashboard');
      }
      // else if (data?.role === 'PROCTOR') {
      //   navigate('/proctor-assessment');
      // }
      // else {
      //   navigate('/assessments');
      // }
    } catch (err) {
      setButtonLoader(false)
      if (err.request && err.request.status === 0) {
        // Network connection error
        ToastMessage({ type: 'warning', message: 'Please Check Your Network Connection' });
      } else if (err.response && err.response.status === 500) {
        ToastMessage({ type: 'error', message: err.response.data.resultMessage.en });
      } else if (err.response && err.response.status === 401) {
        // Other errors
        ToastMessage({ type: 'error', message: err.response.data.resultMessage.en });
      }
      else{
        ToastMessage({ type: 'error', message: err.response.data.resultMessage.en });
      }

      console.error("Error occurred on loginUser page", err);
    }
  };

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
                  <span class="section__subtitle bg-lighter">Sign in</span>
                  <h2 class="section__title">Sign in to check your details</h2>
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
                          <input type="text" id="email" name="email" placeholder="Email *" value={email} onChange={handleChange} />
                        </div>
                        {isValid === false && (
                          <p style={{ color: 'red', marginRight: "250px" }}>Email is not valid</p>
                        )}
                      </div>
                      <div class="col-md-12">
                        <div class="df-input-field mb-0">
                          <input type="password" name="password" placeholder="Password *" onChange={(e) => setPassword(e.target.value)} />
                          {/* <img
                            title={isRevealPwdLogin ? "Hide password" : "Show password"}
                            src={isRevealPwdLogin ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwdLogin(prevState => !prevState)}
                            alt='icon' /> */}
                          <span class="fa fa-eye pass-icon"></span>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="row align-items-center justify-content-between">
                          <div class="sign-meta">
                            <div class="df-login">
                              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                              {  /*    <label for="rememberMe">Accept</label>*/}
                              <a href="/privacy-policy"> Privacypolicy</a>
                            </div>
                            <div class="edu-lost-password">
                              <a class="btn-read-more" href="#!"><span>Lost your
                                password?</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="df-booking2__form-btn mt-15 mb-30">
                          <button type="submit" class="primary-btn sign-btn w-100"
                            disabled={!isValid || password.length === 0}
                            onClick={() => loginUser()}>
                            {
                              buttonLoader ?
                                <ButtonLoader loadingMessage="wait..." style={{ border: '1px solid #fff' }} />
                                :

                                'Login'
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
                            Don’t have an account?
                          </span>
                          <a class="sign-link" href="/signup">Sign Up</a>
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

export default Login;
