import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { POST, POST_ICON } from "../Components/Icon";
import { useState } from "react";
import RestService from "../Services/api.service";
import SkeletonLoader from "../Components/SkeletonLoader";

const SubCategory = () => {
    const { type } = useParams();
    const [companyBySubCategory, setCompanyBySubCategory] = useState([]);
    const [jobBySubCategory, setJobBySubCategory] = useState([]);
    const [loaderCompany, setLoaderCompany] = useState(false);
    const [loaderSubCategory, setLoaderSubCategory] = useState(false);

    const navigate=useNavigate()
    const gotojobpost=()=>{
        navigate("/jobpost")
    }


    const services = [
        {
            imgSrc: "https://rarcode.com/tendersspace/assets/img/service/plumbing.webp",
            title: "Plumbing Service",
            description: "Plumbing services are essential for ensuring the proper functioning.",
            detailsLink: "service-details.html"
        },
        {
            imgSrc: "https://rarcode.com/tendersspace/assets/img/service/pipe.webp",
            title: "Pipe Leak",
            description: "Plumbing services are essential for ensuring the proper functioning.",
            detailsLink: "service-details.html"
        },
        {
            imgSrc: "https://rarcode.com/tendersspace/assets/img/service/drain.webp",
            title: "Drain Cleaning",
            description: "Plumbing services are essential for ensuring the proper functioning.",
            detailsLink: "service-details.html"
        },
        {
            imgSrc: "https://rarcode.com/tendersspace/assets/img/service/gasoline.webp",
            title: "Gasoline Service",
            description: "Plumbing services are essential for ensuring the proper functioning.",
            detailsLink: "service-details.html"
        },
        {
            imgSrc: "https://rarcode.com/tendersspace/assets/img/service/bathroom.webp",
            title: "Bathroom Service",
            description: "Plumbing services are essential for ensuring the proper functioning.",
            detailsLink: "service-details.html"
        },
        {
            imgSrc: "https://rarcode.com/tendersspace/assets/img/service/kitchen.webp",
            title: "Kitchen Plumbing",
            description: "Plumbing services are essential for ensuring the proper functioning.",
            detailsLink: "service-details.html"
        }
    ];

    //get Companies By subcategory
    const getCompaniesBySubCategory = () => {
        setLoaderCompany(true);

        RestService.getCompaniesBySubCategory(type).then(
            response => {
                if (response.status === 200) {

                    setCompanyBySubCategory(response.data.company);
                    setTimeout(() => {
                        setLoaderCompany(false);
                    }, 1500);
                }
            }
        ).catch(err => {
            console.error("Error occurred on getCompaniesBySubCategory", err);
        });
    };

    //get Jobs By subcategory
    const getJobsBySubCategory = () => {
        setLoaderSubCategory(true);

        RestService.getJobsBySubCategory(type).then(
            response => {
                if (response.status === 200) {

                    setJobBySubCategory(response.data.job);
                    console.log(response.data.job);
                    setTimeout(() => {
                        setLoaderSubCategory(false);
                    }, 1500);
                }
            }
        ).catch(err => {
            console.error("Error occurred on getJobsBySubCategory", err);
        });
    };

    useEffect(() => {
        getCompaniesBySubCategory();
        getJobsBySubCategory();
    }, []);

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
                                    <span class="section__subtitle bg-lighter">{type}</span>
                                    <h2 class="section__title">Do you need {type}?</h2>
                                    <p style={{ marginTop: "15px" }} >No matter which pests you have problems with, at Tenders space you will find a {type}ler who will help you with {type}.</p>
                                    <ul className="dot" style={{ marginTop: "10px" }}>
                                        <li>Post the job completely free of charge</li>
                                        <li>Receive non-binding offers from companies</li>
                                        <li>Choose the offer that suits you best</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="section__title-wrapper text-center">
                                    <div class="df-booking2__form">
                                       
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
                                                    <div class="df-booking2__form-btn mt-0" onClick={gotojobpost}>
                                                        <button type="submit" class="primary-btn">Post Job
                                                            <span class="icon__box">
                                                                {POST_ICON}
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <section class="df-contact__area section-spacing-top p-relative fix ">
                    <div class="circle-2"></div>
                    <div class="circle-3"></div>
                    <div class="container">
                        <div class="row g-5">
                            <div class="evalu">
                                <b>What does a {type} entail?</b>
                                <p>How much a {type} costs depends on which pest is involved, the size of your home, the extent of the problem and which solution must be used.</p>
                                <p>If you have discovered pests, it would be worthwhile to contact a {type} company as soon as possible, instead of trying to fight the pests yourself. This can often lead to {type} being both more expensive and more challenging and time-consuming than necessary.</p>
                                <p>The price for a {type} is usually around NOK 2,000 and up. Small, simple assignments that do not require follow-up visits usually end up in this price range.</p>
                                <p>If you have grown beards in the house, the price of a treatment for a normal detached house will usually be between NOK 3,000 and 5,000.</p>
                                <p>If you want to get rid of bed bugs, however, it can be much more expensive. If the scale and your house is large, and the bed bugs have been there for a long time, a treatment can cost up to NOK 50,000. If the attack is small, in many cases it will suffice to treat the bed and the surrounding area, which will be significantly cheaper.</p>
                                <p>To avoid a very expensive bill should you suddenly discover pests in the house, it may be a good idea to buy pest insurance. Then you only have to pay a deductible if the accident should occur.</p>

                            </div>

                        </div>
                        <div class="row justify-content-center section-title-spacing mb-40 wow fadeInUp" data-wow-delay=".3s" >
                            <div class="col-xl-8">
                                <div class="section__title-wrapper text-center">
                                    <h2 class="section__title" style={{ marginTop: "25px" }}>Explore the companies doing {type}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 row-cols-xl-3 row-cols-md-2 row-cols-1 wow fadeInUp" data-wow-delay=".3s">
                            {
                                loaderCompany ?
                                    <SkeletonLoader skeletonCount={8} />
                                    :
                                    companyBySubCategory?.length !== 0 ?
                                    companyBySubCategory?.map((service, index) => (
                                            <div className="col" key={index}>
                                                <div className="service__box">
                                                    <div className="service__content" style={{ textAlign: "center" }}>
                                                        <div className="service__img">
                                                            <img src={services[0].imgSrc} alt="image not found" />
                                                        </div>
                                                        <h4 className="service__title">
                                                            {service.name}
                                                        </h4>
                                                        {/* <p className="service__text">{service.description}</p> */}
                                                        <div className="get" style={{ marginTop: "25px" }}>
                                                            <a href="#" className="primary-btn btn-x-small">Get Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        :

                                        <div>
                                            No Data Found
                                        </div>
                            }
                        </div>




                        <div class="row g-5 justify-content-center section-title-spacing mb-40 wow fadeInUp" data-wow-delay=".3s" >
                            <div class="col-xl-8">
                                <div class="section__title-wrapper text-center">
                                    <h2 class="section__title" style={{ marginTop: "25px" }}>Explore the job of being a {type}</h2>
                                </div>
                            </div>
                        </div>


                        <div className="row g-5 row-cols-xl-3 row-cols-md-2 row-cols-1 wow fadeInUp" data-wow-delay=".3s">
                            {
                                loaderSubCategory ?
                                    <SkeletonLoader skeletonCount={8} />
                                    :
                                    jobBySubCategory?.length !== 0 ?
                                    jobBySubCategory?.map((service, index) => (
                                            <div className="col" key={index}>
                                                <div className="service__box">
                                                    <div className="service__content" style={{ textAlign: "center" }}>
                                                        <div className="service__img">
                                                            <img src={services[0].imgSrc} alt="image not found" />
                                                        </div>
                                                        <h4 className="service__title">
                                                            {service.name}
                                                        </h4>
                                                        <p className="service__text">{service.description}</p>
                                                        <div className="get" style={{ marginTop: "25px" }}>
                                                            <a href="#" className="primary-btn btn-x-small">Get Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div>
                                            No Data Found
                                        </div>
                            }
                        </div>

                    </div>


                </section>

            </main>


        </>
    );
};

export default SubCategory;
