import React from "react";

const Register = () => {
    return (
        <>

            <main>

                <div class="adjust-header-space bg-common-white"></div>

                <section class="df-contact__area section-spacing-top p-relative fix">
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="container">
                        <div class="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-xl-8">
                                <div class="section__title-wrapper text-center">
                                    <span class="section__subtitle bg-lighter">Register a company</span>
                                    <h2 class="section__title">Get new customers and jobs</h2>
                                    <p>Thousands of new missions every week. Create a free test profile now and see all the jobs near you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center" style={{ marginBottom: "100px" }}>
                            <div class="col-xl-6">
                                <div class="df-booking2__form wow fadeInUp" data-wow-delay=".3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp" }}>
                                    <form action="#">
                                        <div class="row gx-5">
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="name" name="name" placeholder="Name *" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="email" name="email" placeholder="Email *" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="text" id="number" name="number" placeholder="Number *" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field">
                                                    <input type="password" name="password" placeholder="Password *" />
                                                    <span class="fa fa-eye pass-icon"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field mb-0">
                                                    <input type="password" name="password2" placeholder="Confirm Password *" />
                                                    <span class="fa fa-eye pass-icon"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-booking2__form-btn mt-15 mb-30">
                                                    <button type="submit" class="primary-btn sign-btn w-100">Sign Up
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
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>


        </>
    );
};

export default Register;
