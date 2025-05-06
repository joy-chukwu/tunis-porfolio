import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Social from "../../components/Social";
import heroimg from "../../assets/img/hero/heroimg.JPG";

const heroContent = {
  heroImage: heroimg,
  heroMobileImage: heroimg,
  heroTitleName: "Joy Chukwu",
  heroDesignation: "Frontend Web Developer",
  heroDescriptions: `Based in Lagos, Nigeria. I love crafting sleek and responsive user-friendly websites with clean code. I am highly attentive to detail, boldly creative and completely in love with what I do. 
  Whether I'm styling pixels or solving problems, I bring passion and personality to every project. Let's build something amazing together. 💻✨`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px'
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start mobile-padding" style={{
          '@media (max-width: 991px)': {
            paddingBottom: '50px'
          }
        }}>
          
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero image"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto',
                display: 'block'
              }}
            />
            <h1>
              I'm {heroContent.heroTitleName}.
              <span className="font-sm" style={{ fontSize: '0.6em', display: 'block' }}>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <div className="contact">
              <ul className="social list-unstyled" style={{ marginTop: -39, marginBottom: -15 }}>
                <Social />
              </ul>
            </div>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
