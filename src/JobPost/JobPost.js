import React, { useState } from 'react';
import DatePicker from '../Components/DatePicker';



const JobPost = () => {
    const handleDateChange = (date) => {
        console.log('Date selected in JobPost component:', date);
    };
    return (
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

                                <form action="#">
                                    <div class="row gx-5">
                                        <div class="col-xl-6">
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
                                                    <input type="text" name="Address" placeholder="Address *" />

                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="df-input-field ">
                                                    <input type="text" name="Postal code" placeholder="Postal code *" />

                                                </div>
                                            </div>
                                            <div className="col-md-12">
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
                                            </div>


                                        </div>
                                        <div class="col-xl-6">
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

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </>
    )
};

export default JobPost;
