import React, { useEffect } from "react";
import Swiper from 'swiper';

const Main = () => {
    useEffect(() => {
        const brandSlider = new Swiper('.brand__slider', {
            loop: false,
            freemode: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
            speed: 1000,
            breakpoints: {
                320: { slidesPerView: 1 },
                540: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
                1400: { slidesPerView: 5 },
            },
        });

        return () => {
            brandSlider.destroy(true, true); // Clean up Swiper instance on unmount
        };
    }, []);
    useEffect(() => {
        const blogSlider = new Swiper('.blog__slider', {
            loop: false,
            freemode: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
            speed: 1000,
            navigation: {
                prevEl: '.blog__slider-button-prev',
                nextEl: '.blog__slider-button-next',
            },
            pagination: {
                el: '.blog__slider-pagination',
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                540: { slidesPerView: 1 },
                600: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 2, spaceBetween: 60 },
                1400: { slidesPerView: 2, spaceBetween: 90 },
            },
        });

        return () => {
            blogSlider.destroy(true, true); // Clean up Swiper instance on unmount
        };
    }, []);
    useEffect(() => {
        const blogSlider2 = new Swiper('.blog3__slider', {
            loop: false,
            freemode: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
            speed: 1000,
            navigation: {
                prevEl: '.blog3__slider-button-prev',
                nextEl: '.blog3__slider-button-next',
            },
            pagination: {
                el: '.services__slider-pagination',
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                540: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
            },
        });

        return () => {
            blogSlider2.destroy(true, true); // Clean up Swiper instance on unmount
        };
    }, []);

    return (

        <>

            <main>

                <div class="adjust-header-space bg-common-white"></div>


                <section class="hero2__area p-relative section-spacing fix">
                    <div class="container container-big">
                        <div class="hero2__content">
                            <p class="hero2__subtitle small fw-600 uppercase wow fadeInUp" data-wow-delay=".3s">Welcome To Tenders Space
                            </p>
                            <h1 class="hero2__title wow fadeInUp" data-wow-delay=".5s">Get the job done!</h1>
                            <p class="hero2__text wow fadeInUp" data-wow-delay=".7s">Describe the job and receive offers from skilled professionals. Free and without obligation.</p>
                            <div class="hero2__button wow fadeInUp" data-wow-delay=".9s">

                                <div class="df-newsletter__form">
                                    <form action="#">
                                        <div class="df-input-field">
                                            <input type="text" id="search" name="search" placeholder="Need service help?" />
                                        </div>
                                        <div class="df-newsletter__form-btn">
                                            <button type="submit" class="primary-btn">Search
                                                <span class="icon__box">
                                                    <img class="icon__first" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                    <img class="icon__second" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="hero2__img">
                        <span class="hero2__img-overlay"></span>
                        <img src="assets/img/ac/img-01.webp" alt="image not found" />
                    </div>
                </section>

                <section class="brand-box-style section-spacing">
                    <div class="container">
                        <div class="row">
                            <div class="container">
                                <div class="brands__wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <div class="swiper brand__slider">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="brand__item">
                                                    <i class="fas fa-tools"></i>&nbsp;&nbsp;&nbsp;Crafts
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="brand__item">
                                                    <i class="fas fa-vacuum"></i>&nbsp;&nbsp;&nbsp;Cleaning
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="brand__item">
                                                    <i class="fas fa-shower"></i>&nbsp;&nbsp;&nbsp;Drainage
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="brand__item">
                                                    <i class="fas fa-tree-alt"></i>&nbsp;&nbsp;&nbsp;Gardening
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="brand__item">
                                                    <i class="fas fa-th-large"></i>&nbsp;&nbsp;&nbsp;Other
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="df-about2__area section-spacing">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6">
                                <div class="df-about2__thumb-wrapper p-relative">
                                    <div class="df-about2__thumb">
                                        <div class="df-thumb__overlay wow"></div>
                                        <img src="assets/img/ac/img-02.webp" alt="image not found" />

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="df-about2__content wow fadeInUp" data-wow-delay=".6s">
                                    <div class="section__title-wrapper">
                                        <span class="section__subtitle bg-lighter"></span>
                                        <h2 class="section__title">This is how Tenders Space works</h2>
                                    </div>
                                    <p class="mt-35 mb-35">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut turpis quis mi imperdiet vestibulum ac a sem. Suspendisse potenti. Pellentesque vestibulum nisi sit amet mattis dapibus. Fusce fermentum facilisis mauris, sit amet laoreet ligula dapibus ac. Integer efficitur nunc ut consequat volutpat.</p>
                                    <div class="df-about2__feature-list mb-40">
                                        <ul>
                                            <li>
                                                <span class="list-icon">
                                                    <i class="fas fa-file-alt"></i>
                                                </span>
                                                <p>Describe the project</p>
                                            </li>
                                            <li>
                                                <span class="list-icon">
                                                    <i class="fas fa-users"></i>
                                                </span>
                                                <p>Connect one to one</p>
                                            </li>

                                            <li>
                                                <span class="list-icon">
                                                    <i class="fas fa-money-check-alt"></i>
                                                </span>
                                                <p>Fix the deal</p>
                                            </li>
                                            <li>
                                                <span class="list-icon">
                                                    <i class="fas fa-thumbs-up"></i>
                                                </span>
                                                <p>Get job done</p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="brand-box-style section-spacing">
                    <div class="container">
                        <div class="row section-spacing-top">
                            <div class="col-12">
                                <div class="section__title-wrapper text-center section-title-spacing">
                                    <h2 class="section__title">Popular projects</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row g-5 wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-wrench"></i>&nbsp;&nbsp;
                                        Plumber
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-plug"></i>&nbsp;&nbsp;
                                        Electrician
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-car"></i>&nbsp;&nbsp;
                                        Car workshop
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-user-hard-hat"></i>&nbsp;&nbsp;
                                        Contractors
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-paint-roller"></i>&nbsp;&nbsp;
                                        Painter
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-truck-moving"></i>&nbsp;&nbsp;
                                        Movers
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-ruler-combined"></i>&nbsp;&nbsp;
                                        Carpenter
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-vacuum"></i>&nbsp;&nbsp;
                                        Cleaning
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-shower"></i>&nbsp;&nbsp;
                                        Bathroom
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-building"></i>&nbsp;&nbsp;
                                        Condominiums
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-pastafarianism"></i>&nbsp;&nbsp;
                                        Pest Control
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="p-3 bg-theme-1">
                                    <div class="brand__item is-white">
                                        <i class="fas fa-th-large"></i>&nbsp;&nbsp;
                                        Other
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <div class="section-spacing-bottom">

                    <footer>
                        <section class="df-footer__area section-spacing-top bg-theme-4">

                            <div class="footer__widgets-area">
                                <div class="container">

                                    <div class="container local">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="section__title-wrapper text-center section-title-spacing">
                                                    <h2 class="section__title">Find a business in your local area</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="df-booking2__form">
                                        <form action="#">
                                            <div class="row gx-5" style={{ textAlign: "center" }}>

                                                <div class="col-md-6">
                                                    <div class="df-input-field ">
                                                        <select name="service" id="service" className="drpdwn-select">
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
                                                <div class="col-md-6">
                                                    <div class="df-input-field ">
                                                        <select name="service" id="service" className="drpdwn-select">
                                                            <option value="Business">Business</option>
                                                            <option value="cleaning">Cleaning</option>
                                                            <option value="plumbing">Plumbing</option>
                                                            <option value="plumbing">Electrician</option>
                                                            <option value="plumbing">Contractor</option>
                                                            <option value="plumbing">Locksmith</option>
                                                            <option value="plumbing">Carpenter</option>
                                                            <option value="plumbing">Packers & Movers</option>
                                                            <option value="plumbing">Car Workshop</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="df-booking2__form-btn mt-0">
                                                        <button type="submit" class="primary-btn">Search
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
                        </section>
                    </footer>
                </div>

                <section class="df-questions__area section-spacing">
                    <div class="container">
                        <div class="df-questions__area-inner wow fadeInUp" data-wow-delay=".3s">
                            <div class="df-questions__content">
                                <div class="section__title-wrapper">
                                    <span class="section__subtitle bg-lighter">QUESTIONS</span>
                                    <h2 class="section__title">Read General Question</h2>
                                </div>
                                <p class="mt-40 mb-40">It seems you're looking for general information or have a general
                                    question about plumbing. Please go ahead and ask your question.</p>
                                <div class="df-testimonial__button">
                                    <a href="/contactus" class="primary-btn">contact us
                                        <span class="icon__box">
                                            <img class="icon__first" src="assets/img/icon/arrow-white.webp"
                                                alt="image not found" />
                                            <img class="icon__second" src="assets/img/icon/arrow-white.webp"
                                                alt="image not found" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q: Why is my AC not cooling effectively?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Several factors can lead to poor cooling, including dirty filters, refrigerant
                                            leaks, or issues with the compressor. Our technicians can diagnose the problem and
                                            provide effective solutions.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Q: How often should I get my AC serviced?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Regular AC servicing is recommended at least once a year to ensure optimal
                                            performance, energy efficiency, and to prevent potential breakdowns.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Q. Can any home have central air?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            This is the first item's accordion body. It is shown by
                                            default, until the collapse plugin adds the appropriate classes that we use to
                                            style each element.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q: What's the typical cost of AC repair?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            The cost varies based on the specific issue. We offer transparent pricing and a
                                            thorough evaluation before proceeding with any repairs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="df-blog__area section-spacing-bottom bg-theme-4 b-bottom-2">
                    <div class="container">
                        <div class="row align-items-end section-title-spacing g-5 wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-lg-8 col-md-8">
                                <div class="section__title-wrapper">
                                    <h2 class="section__title">Our Blogs</h2>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="blog3__navigation d-flex gap-3 justify-content-md-end">
                                    <div class="blog3__slider-button-prev slider__nav-btn"><i class="icon-022-left"></i>
                                    </div>
                                    <div class="blog3__slider-button-next slider__nav-btn"><i class="icon-021-next"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper blog3__slider wow fadeInUp" data-wow-delay=".3s">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="df-blog2__box">
                                        <div class="df-blog2__thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/blog-03.webp" alt="image not found" /></a>
                                        </div>
                                        <div class="df-blog2__content">
                                            <div class="df-blog2__meta">
                                                <a href="blog-classic.html"><span class="tag">AC Repair</span></a>
                                                <span class="blog-date">12 Oct 2023</span>
                                            </div>
                                            <h3 class="df-blog2__title"><a href="blog-details.html">10 Ways to Prevent Solar
                                                Panel Damage</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="df-blog2__box">
                                        <div class="df-blog2__thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/blog-04.webp" alt="image not found" /></a>
                                        </div>
                                        <div class="df-blog2__content">
                                            <div class="df-blog2__meta">
                                                <a href="blog-classic.html"><span class="tag">Panel Repair</span></a>
                                                <span class="blog-date">12 Oct 2023</span>
                                            </div>
                                            <h3 class="df-blog2__title"><a href="blog-details.html">Solar Panel Maintenance and
                                                Repair</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="df-blog2__box">
                                        <div class="df-blog2__thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/blog-05.webp" alt="image not found" /></a>
                                        </div>
                                        <div class="df-blog2__content">
                                            <div class="df-blog2__meta">
                                                <a href="blog-classic.html"><span class="tag">AC Repair</span></a>
                                                <span class="blog-date">12 Oct 2023</span>
                                            </div>
                                            <h3 class="df-blog2__title"><a href="blog-details.html">The Importance of Regular
                                                Solar Panel Inspections</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="df-blog2__box">
                                        <div class="df-blog2__thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/blog-03.webp" alt="image not found" /></a>
                                        </div>
                                        <div class="df-blog2__content">
                                            <div class="df-blog2__meta">
                                                <a href="blog-classic.html"><span class="tag">AC Repair</span></a>
                                                <span class="blog-date">12 Oct 2023</span>
                                            </div>
                                            <h3 class="df-blog2__title"><a href="blog-details.html">10 Ways to Prevent Solar
                                                Panel Damage</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="df-blog2__box">
                                        <div class="df-blog2__thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/blog-04.webp" alt="image not found" /></a>
                                        </div>
                                        <div class="df-blog2__content">
                                            <div class="df-blog2__meta">
                                                <a href="blog-classic.html"><span class="tag">Panel Repair</span></a>
                                                <span class="blog-date">12 Oct 2023</span>
                                            </div>
                                            <h3 class="df-blog2__title"><a href="blog-details.html">Solar Panel Maintenance and
                                                Repair</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="df-blog2__box">
                                        <div class="df-blog2__thumb">
                                            <a href="blog-details.html"><img src="assets/img/blog/blog-05.webp" alt="image not found" /></a>
                                        </div>
                                        <div class="df-blog2__content">
                                            <div class="df-blog2__meta">
                                                <a href="blog-classic.html"><span class="tag">AC Repair</span></a>
                                                <span class="blog-date">12 Oct 2023</span>
                                            </div>
                                            <h3 class="df-blog2__title"><a href="blog-details.html">The Importance of Regular
                                                Solar Panel Inspections</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="df-testimonial__area section-spacing bg-theme-4">
                    <div class="container">
                        <div class="row gx-5 wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-xl-4 col-lg-5 col-md-12">
                                <div class="df-testimonial__content">
                                    <div class="section__title-wrapper">
                                        <span class="section__subtitle bg-lighter">TESTIMONIALS</span>
                                        <h2 class="section__title">Words of Praise & Thanks</h2>
                                    </div>
                                    <p class="mt-40 mb-40">The plumber was prompt, professional, and fixed our issue quickly</p>
                                    <div class="df-testimonial__button">
                                        <a href="/contactus" class="primary-btn">view all
                                            <span class="icon__box">
                                                <img class="icon__first" src="assets/img/icon/arrow-white.webp"
                                                    alt="image not found" />
                                                <img class="icon__second" src="assets/img/icon/arrow-white.webp"
                                                    alt="image not found" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-7 col-md-12">
                                <div class="df-testimonial2__wrapper mt-50">
                                    <div class="swiper testimonial2__slider">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="df-testimonial2__box">
                                                    <div class="df-testimonial2__box-content">
                                                        <div class="df-testimonial2__icon">
                                                            <i class="icon-020-quote"></i>
                                                        </div>
                                                        <div class="df-testimonial2__text">
                                                            <p>Very nice man. Work was carried out to a very high standard.
                                                                Cleaned up
                                                                after as well leaving no mess behind. I will be using his
                                                                services
                                                                again. Thanks for your best plumbing service. We recommended to
                                                                other.
                                                            </p>
                                                        </div>
                                                        <div class="df-testimonial2__author-meta">
                                                            <div class="df-testimonial2__author-thumb">
                                                                <img src="assets/img/clients/client-01.webp" alt="image not found" />
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="df-testimonial2__box">
                                                    <div class="df-testimonial2__box-content">
                                                        <div class="df-testimonial2__icon">
                                                            <i class="icon-020-quote"></i>
                                                        </div>
                                                        <div class="df-testimonial2__text">
                                                            <p>Excellent service! The plumber arrived on time and quickly fixed
                                                                the leak under
                                                                our sink.Very professional.I highly recommend this plumber. They
                                                                were courteous,
                                                                knowledgeable, and their rates were reasonable.
                                                            </p>
                                                        </div>
                                                        <div class="df-testimonial2__author-meta">
                                                            <div class="df-testimonial2__author-thumb">
                                                                <img src="assets/img/clients/client-01.webp" alt="image not found" />
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

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="df-testimonial2__box">
                                                    <div class="df-testimonial2__box-content">
                                                        <div class="df-testimonial2__icon">
                                                            <i class="icon-020-quote"></i>
                                                        </div>
                                                        <div class="df-testimonial2__text">
                                                            <p>Absolutely fantastic service! The plumber was prompt,
                                                                professional, and fixed our
                                                                issue quickly.I'm so glad I called this plumber. They were
                                                                friendly, explained
                                                                the problem clearly, and provided a reasonable quote.
                                                            </p>
                                                        </div>
                                                        <div class="df-testimonial2__author-meta">
                                                            <div class="df-testimonial2__author-thumb">
                                                                <img src="assets/img/clients/client-01.webp" alt="image not found" />
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

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="df-testimonial2__box">
                                                    <div class="df-testimonial2__box-content">
                                                        <div class="df-testimonial2__icon">
                                                            <i class="icon-020-quote"></i>
                                                        </div>
                                                        <div class="df-testimonial2__text">
                                                            <p>The plumber resolved the issue, but there was a slight delay in
                                                                their arrival.
                                                                Average service. The plumber did the job, but there wasn't
                                                                anything exceptional
                                                                about the experience.
                                                            </p>
                                                        </div>
                                                        <div class="df-testimonial2__author-meta">
                                                            <div class="df-testimonial2__author-thumb">
                                                                <img src="assets/img/clients/client-01.webp" alt="image not found" />
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="df-testimonial2__navigation">
                                            <div class="testimonial2__slider-button-prev slider__nav-btn"><i
                                                class="icon-022-left"></i>
                                            </div>
                                            <div class="testimonial2__slider-button-next slider__nav-btn"><i
                                                class="icon-021-next"></i>
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

export default Main;
