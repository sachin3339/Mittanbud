import React from "react";

const Login = () => {
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
                  <span class="section__subtitle bg-lighter">Sign in</span>
                  <h2 class="section__title">Sign in to check your details</h2>
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
                          <input type="text" id="email" name="email" placeholder="Email *" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="df-input-field mb-0">
                          <input type="password" name="password" placeholder="Password *" />
                          <span class="fa fa-eye pass-icon"></span>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="row align-items-center justify-content-between">
                          <div class="sign-meta">
                            <div class="df-login">
                              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
                              {  /*    <label for="rememberMe">Accept</label>*/}
                              <a href="/privacy-policy"> Privacypolicy</a>
                            </div>
                            <div class="edu-lost-password">
                              <a class="btn-read-more" href="#!"><span>Lost your
                                password?</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="df-booking2__form-btn mt-15 mb-30">
                          <button type="submit" class="primary-btn sign-btn w-100">login
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
                            Don’t have an account?
                          </span>
                          <a class="sign-link" href="elements-sign-up.html">Sign Up</a>
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

export default Login;
