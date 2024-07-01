import React, { useState } from 'react';


const SideToggle = () => {
    const [infoOpen, setInfoOpen] = useState(false);
  const [offsetShow, setOffsetShow] = useState(false);

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

  return (
    <div >
      <button className="side-toggle" onClick={toggleSideInfo}>
        <span className="menu__bar">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
      </button>

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
    <div className={`offset-content-wrapper ${offsetShow ? 'offset-show' : ''}`}>
    {/* Content of offset */}
    <button className="offset-content-close" onClick={toggleOffsetContent}>
      Close Offset Content
    </button>
  </div>
    </div>
  );
};

export default SideToggle;
