import React from "react";

const ContactUs = () => {
    return (
        <> <div class="adjust-header-space bg-common-white"></div>

            <section className="df-contact__area section-spacing-top p-relative fix">
                <div class="circle-2"></div>
                <div class="circle-3"></div>
                <div class="container">
                    <div class="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay=".3s">
                        <div class="col-xl-8">
                            <div class="section__title-wrapper text-center">
                                <span class="section__subtitle bg-lighter">Contact Us</span>
                                <h2 class="section__title">Contact with Us</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5">
                        <div class="col-xxl-4 col-lg-6 col-md-6">
                            <div class="df-contact__box wow fadeInUp" data-wow-delay=".4s">
                                <div class="df-contact__icon mb-20"><i class="icon-051-telephone-1"></i></div>
                                <p class="df-contact__title mb-5">PHONE NUMBER</p>
                                <h4 class="df-contact__content"><a href="tel:+866332-2020">+866 332-2020</a></h4>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6">
                            <div class="df-contact__box wow fadeInUp" data-wow-delay=".5s">
                                <div class="df-contact__icon mb-20"><i class="icon-052-email"></i></div>
                                <p class="df-contact__title mb-5">EMAIL ADDRESS</p>
                                <h4 class="df-contact__content"><a href="https://html.bdevs.net/cdn-cgi/l/email-protection#1764626767786563577378717e6f3974787a"><span class="__cf_email__" data-cfemail="bbc8cecbcbd4c9cffbdfd4ddd2c395d8d4d6">[email&#160;protected]</span></a>
                                </h4>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-md-6">
                            <div class="df-contact__box wow fadeInUp" data-wow-delay=".6s">
                                <div class="df-contact__icon mb-20"><i class="icon-030-pin"></i></div>
                                <p class="df-contact__title mb-5">OUR LOCATION</p>
                                <h4 class="df-contact__content"><a href="#">80S, Salt Lake City, USA</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="df-booking2__form-wrapper section-spacing-top">
                        <div class="df-booking__video">
                            <img src="assets/img/gallery/img-01.webp" alt="image not found" />
                            <div class="df-video__play-btn pos-center">
                                <a href="https://www.youtube.com/watch?v=0pZBJ7aJNy0" class="play-btn popup-video" target="blank"><i
                                    class="icon-008-play-button"></i></a>
                            </div>
                        </div>
                        <div class="df-booking2__form">
                            <form action="#">
                                <div class="row gx-5">
                                    <div class="col-md-6">
                                        <div class="df-input-field">
                                            <input type="text" id="name" name="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="df-input-field">
                                            <input type="text" id="email" name="email" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="df-input-field">
                                            <input type="text" id="number" name="number" placeholder="Your Phone" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="df-input-field">
                                            <select name="service" id="service" className="drpdwn-select">
                                                <option value="subject">Subject</option>
                                                <option value="cleaning">Cleaning</option>
                                                <option value="plumbing">Plumbing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="df-input-field">
                                            <input type="text" id="address" name="address" placeholder="House Address" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="df-input-field">
                                            <textarea id="message" name="message" placeholder="Write Message Here..."></textarea>

                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="df-booking2__form-btn mt-0">
                                            <button type="submit" class="primary-btn">send now
                                                <span class="icon__box">
                                                    <img class="icon__first" src="assets/img/icon/arrow-white.webp"
                                                        alt="image not found" />
                                                    <img class="icon__second" src="assets/img/icon/arrow-white.webp"
                                                        alt="image not found" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div class="df__map p-relative section-spacing-top">
        <div class="df__google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12797.802464900029!2d-83.13319788146339!3d36.68770817009452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885b172234e50f17%3A0x89b2bd832c241ea9!2sJonesville%2C%20VA%2024263%2C%20USA!5e0!3m2!1sen!2sbd!4v1692792416975!5m2!1sen!2sbd" width="1920" height="580" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>*/}
            </section>
        </>
    );
};

export default ContactUs;
