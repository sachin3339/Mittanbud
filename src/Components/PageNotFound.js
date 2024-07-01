// PageNotFound.js
import React from 'react';

const PageNotFound = () => {
    return (
        <>
            <main>

                <div class="adjust-header-space bg-common-white"></div>

                <section class="df-specialities__area section-spacing">
                    <div class="container">
                        <div class="row justify-content-center section-title-spacing wow fadeInUp" data-wow-delay=".3s">
                            <div class="col-xl-8">
                                <div class="section__title-wrapper text-center">

                                    <h2 class="section__title">Page Not Found</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center section-title-spacing wow fadeInUp">
                            <div class="col-lg-6 order-lg-0 order-1">
                                <div class="df-service4__thumb-wrapper p-relative">
                                    <div class="df-service4__thumb">
                                        <img src="assets/img/gallery/error-bg.webp" alt="img not found" />
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

export default PageNotFound;
