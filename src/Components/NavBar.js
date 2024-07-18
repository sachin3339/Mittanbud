import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COMPANY_LOGO } from "./Icon";
import GLOBELCONSTANT from "../Const/GlobalConst";

const NavBar = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [offsetShow, setOffsetShow] = useState(false);
  const Menu = GLOBELCONSTANT.Services.category
  console.log(Menu)
  const toggleSideInfo = () => {
    setInfoOpen(!infoOpen);
    if (!infoOpen) {
      document.body.classList.add('overlay-open'); // Assuming you have a CSS class for overlay-open
    } else {
      document.body.classList.remove('overlay-open');
    }
  };

  const toggleOffsetContent = () => {
    setOffsetShow(!offsetShow);
  };

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/jobpost");
  }
  return (
    <>
      <div class="mouseCursor cursor-outer"></div>
      <div class="mouseCursor cursor-inner"><span>Drag</span></div>

      <header>
        <div id="header-sticky" class="header__main header__shadow">
          <div class="container header__main-container">
            <div class="row align-items-center">
              <div class="col-xl-12 col-lg-12">
                <div class="header__main-content-wrapper p-relative">
                  <div class="header__main-left">
                    <div class="header__logo">
                      <a href="/" class="logo-dark">{COMPANY_LOGO}</a>
                    </div>
                    <div class="area-separator d-none d-lg-inline-flex"></div>
                    <div class="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>

                          <li class="menu-item-has-children">
                            <a href="#">Menu</a>
                            <ul class="sub-menu">
                              {

                                Menu.map((category) => {
                                  return (

                                    <li class="menu-item-has-children">
                                      <Link to={`/category/${category.categoryname}`} >{category.categoryname}</Link>
                                      <ul class="sub-menu">
                                        {
                                          category.subecategory.map((subcategory) => {
                                            return (

                                              <li><Link to={`/jobapply/${subcategory}`}>{subcategory}</Link></li>


                                            )
                                          })

                                        }
                                      </ul>
                                    </li>



                                  )
                                })
                              }
                            </ul>

                          </li>

                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="header__main-right">
                    <div class="location-search d-none d-lg-inline-flex">
                      <i class="fas fa-user-tie"></i>
                      <a href="/login"><span>Sign In</span></a>
                    </div>
                    <div class="area-separator d-none d-lg-inline-flex"></div>
                    <div class="location-search d-none d-lg-inline-flex">
                      <i class="fas fa-building"></i>
                      <a href="/register"><span>Register Company</span></a>
                    </div>
                    <div class="location-search d-none d-lg-inline-flex">
                      <button type="submit" class="primary-btn" onClick={handleClick}>Post Job
                        <span class="icon__box">
                          <img class="icon__first" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                          <img class="icon__second" src="assets/img/icon/arrow-white.webp" alt="image not found" />
                        </span>
                      </button>
                    </div>
                    <div class="area-separator d-none d-lg-inline-flex"></div>
                    <button className="side-toggle" onClick={toggleSideInfo}>
                      <span className="menu__bar">
                        <span className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className="fix">
        <div className={`side-info ${infoOpen ? 'info-open' : ''}`}>
          <div className="side-info-content">
            <div className="offset__widget offset__header">
              <button className="side-info-close" onClick={toggleSideInfo}>
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="offset__widget offset__support d-none d-sm-block">
              <h3 className="offset__title">Plumbing Solutions for Every Drip and Drop</h3>
            </div>
            <div className="mobile-menu d-xl-none fix"></div>
            <div className="offset__widget offset__support">
              <h6 className="offset__sub-title small fw-400 mb-30">CONTACT US</h6>
              <div className="meta-item mb-20">
                <div className="meta-item__icon-2">
                  <i className="icon-007-telephone"></i>
                </div>
                <div className="meta-item__text-2">
                  <span><a href="tel:+866332-2020">+866 332-2020</a></span>
                </div>
              </div>
              <div className="meta-item mb-20">
                <div className="meta-item__icon-2 style-2">
                  <i className="icon-052-email"></i>
                </div>
                <div className="meta-item__text-2">
                  <span><a href="https://html.bdevs.net/cdn-cgi/l/email-protection#3f4c4a4f4f504d4b7f5b50595647115c5052"><span className="__cf_email__" data-cfemail="71020401011e030531151e1718095f121e1c">info@tendersspace.com</span></a></span>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-item__icon-2 style-3">
                  <i className="icon-030-pin"></i>
                </div>
                <div className="meta-item__text-2">
                  <span><a href="#">800S, Salt Lake City, USA</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offcanvas overlays */}
        <div className="offcanvas-overlay"></div>
        <div className="offcanvas-overlay-white"></div>
      </aside>


    </>
  )
};

export default NavBar;
