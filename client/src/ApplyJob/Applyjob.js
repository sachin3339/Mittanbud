import React from "react";

const Applyjob = () => {
    return (
        <>

            <main>

                <div class="adjust-header-space bg-common-white"></div>

                <section class="df-contact__area section-spacing-top p-relative fix">
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="container">
                        <div class="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="section__title-wrapper side">
                                    <span class="section__subtitle bg-lighter">Pest Control</span>
                                    <h2 class="section__title">Do you need pest control?</h2>
                                    <p>No matter which pests you have problems with, at Tenders space you will find a pest controller who will help you with pest control.</p>
                                    <ul>
                                        <li>Post the job completely free of charge</li>
                                        <li>Receive non-binding offers from companies</li>
                                        <li>Choose the offer that suits you best</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="section__title-wrapper text-center">
                                    <div class="df-booking2__form">
                                        <form action="#">
                                            <div class="row gx-5">
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <input type="text" id="name" name="name" placeholder="Title of the project" />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-input-field">
                                                        <textarea id="message" name="message" placeholder="Describe what needs to be done..."></textarea>

                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="df-booking2__form-btn mt-0">
                                                        <button type="submit" class="primary-btn">Post Job
                                                            <span class="icon__box">
                                                                <img class="icon__first" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                                <img class="icon__second" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                <div class="section testmon mt-5">
                    <div class="container">
                        <div class="row ">
                            <div class="col-lg-12 col-md-12 ">
                                <div class="df-testimonial2__box">
                                    <div class="testborder">
                                        <hr />
                                    </div>
                                    <div class="df-testimonial2__box-content">


                                        <div class="df-testimonial2__author-meta">
                                            <div className="d-flex gap-5">

                                                <div class="df-testimonial2__author-thumb">
                                                    <img src="https://mittanbud.no/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fschibsted-norge-smb-dev%2Fimage%2Fauthenticated%2Fs--lbeYIwUs--%2Ft_default_small%2Fv1676913857%2Fma1%2Fbedrift%2Flogo%2F2017%2F47%2F870832%2Fproffpaint-as.jpg%3F_a%3DAACnOAI&w=128&q=75" alt="image not found" />
                                                </div>
                                                <div class="df-testimonial2__author-review">
                                                    <h4 class="df-testimonial2__author">Florina Jacky</h4>
                                                    <div class="df-satisfaction__ratings">
                                                        <ul>
                                                            <li><i class="icon-004-star"></i></li>
                                                            <li><i class="icon-004-star"></i></li>
                                                            <li><i class="icon-004-star"></i></li>
                                                            <li><i class="icon-004-star"></i></li>
                                                            <li><i class="icon-004-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>



                                            <button type="submit" class="apply-job-btn">Request an offer from the company

                                            </button>

                                        </div>
                                        <div className="mt-5">
                                            <p>ProffPaint AS has carried out several jobs from Tenders space in Vestby, Nordre Follo, Ås, with 5.0 out of 5 stars from 257 clients. Read experiences or contact ProffPaint AS here!
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </main>


        </>
    );
};

export default Applyjob;
