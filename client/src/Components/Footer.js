import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <section class="df-footer__area section-spacing-top bg-theme-1">

                    <div class="footer__widgets-area">
                        <div class="container">
                            <div class="footer__widgets-wrapper widgets-5">
                                <div class="footer__widget">
                                    <div class="df-footer__logo mb-30">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="image not found" /></a>
                                    </div>
                                    <p class="df-footer-text is-white max-225">It can help to identify areas for
                                        improvement</p>
                                </div>
                                <div class="footer__widget">
                                    <h4 class="footer__widget-title text-white">Services</h4>
                                    <div class="footer__links underline is-white">
                                        <ul>
                                            <li><a href="service-details.html">Drain Cleaning</a></li>
                                            <li><a href="service-details.html">Gasoline Service</a></li>
                                            <li><a href="service-details.html">Kitchen Plumbing</a></li>
                                            <li><a href="service-details.html">Pipe Leaking</a></li>
                                            <li><a href="service-details.html">Bathroom</a></li>
                                            <li><a href="/other-services">Other Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="footer__widget">
                                    <h4 class="footer__widget-title text-white">Useful Links</h4>
                                    <div class="footer__links underline is-white">
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="team.html">Our Team</a></li>
                                            <li><a href="elements-testimonial.html">Clients Feedback</a></li>
                                            <li><Link to="/contactus">Contact</Link></li>
                                            <li><a href="#">Coming Soon</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="footer__widget">
                                    <h4 class="footer__widget-title text-white">Contact Info</h4>
                                    <div class="footer-meta mb-15 is-white">
                                        <i class="icon-030-pin"></i>
                                        <p>2784 Ivah Fields, <br /> Jonesville, Virginia, USA.</p>
                                    </div>
                                    <div class="footer-meta is-white">
                                        <i class="icon-timelapse"></i>
                                        <p>Work time: <br />
                                            Sun - Fri 09am - 8pm</p>
                                    </div>
                                </div>
                                <div class="footer__widget">
                                    <h4 class="footer__widget-title text-white">Social Links</h4>
                                    <div class="social-links is-white">
                                        <ul>
                                            <li><a href="https://www.facebook.com/"><i class="icon-023-facebook-app-symbol"></i></a>
                                            </li>
                                            <li><a href="https://www.instagram.com/"><i class="icon-025-instagram"></i></a>
                                            </li>
                                            <li><a href="https://www.pinterest.com/"><i class="icon-029-pinterest"></i></a>
                                            </li>
                                            <li><a href="https://twitter.com/"><i class="icon-twitter-x"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="bg-theme-1">
                    <div class="container">
                        <div class="hr1 is-white"></div>
                    </div>
                </div>


                <div class="copyright-area p-relative bg-theme-1">
                    <div class="container">
                        <div class="copyright-content__wrapper">
                            <div class="copyright__text is-white">
                                <p>© All Rights Reserved by <a href="/" target="_blank">Tenders Space</a>
                                </p>
                            </div>

                            <div class="copyright__nav is-white">
                                <ul>
                                    <li> <p>Designed & Developed By <a href="https://learnlytica.com/" target="_blank">Learnlytica</a>
                                    </p>

                                        { /*<!-- <a href="terms.html" target="_blank">Designed & Developed By</a> -->*/}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
