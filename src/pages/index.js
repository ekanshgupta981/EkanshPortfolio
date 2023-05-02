import { TypeAnimation } from "react-type-animation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

export default function Home() {
  const [site, setSite] = useState(1);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1450 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1450, min: 1000 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between px-lg-5 nav">
        <a href="#Home">
          <img
            src="./images/Picsart_23-04-18_13-21-27-327.png"
            alt=""
            className="logo ms-lg-5 ms-2"
          />
        </a>
        <div className="text-white nav-text d-lg-flex d-none justify-content-evenly justify-content-evenly col-lg-7 col-9">
          <div className="fs-5 pointer">
            <a href="#Home">
              <i className="bi bi-house me-1"></i>Home
            </a>
          </div>
          <div className="fs-5 pointer">
            <a href="#About">
              <i className="bi bi-person-check me-lg-2 me-1"></i>About
            </a>
          </div>
          <div className="fs-5 pointer">
            <a href="#skills">
              <i className="bi bi-card-checklist me-1"></i>Skills
            </a>
          </div>
          <div className="fs-5 pointer">
            <a href="#certificates">
              <i className="bi bi-patch-check me-1"></i>Certificates
            </a>
          </div>
          <div className="fs-5 pointer">
            <a href="#projects">
              <i className="bi bi-window-stack me-1"></i> Projects
            </a>
          </div>
          <div className="fs-5 pointer">
            <a href="#contact">
              <i className="bi bi-telephone me-1"></i> Contact
            </a>
          </div>
        </div>

        {/* nav mobie */}
        <button
          className="text-white bg-none border-0 px-3 p-1 mt-3 py-2 me-3 d-lg-none d-flex"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          <h1>
            <i className="bi bi-list"></i>
          </h1>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-end border-start border-1"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header bg-nav-mb p-0">
          <h5 className="offcanvas-title" id="offcanvasTopLabel">
            <img
              src="./images/Picsart_23-04-18_13-21-27-327.png"
              alt=""
              className="logo ms-2"
            />
          </h5>
          <button
            type="button"
            className="btn btn-outline-dark border-0 text-white me-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="offcanvas-body offcanvas-trns p-0 m-0">
          <div className="text-white nav-text">
            <a href="#Home">
              <div className="fs-5 pointer  border-1 border-bottom p-2 ps-4 py-3">
                <i className="bi bi-house me-1"></i>Home
              </div>
            </a>
            <a href="#About">
              <div className="fs-5 pointer  border-1 border-bottom p-2 ps-4 py-3">
                <i className="bi bi-person-check me-2"></i>About
              </div>
            </a>
            <a href="#skills">
              <div className="fs-5 pointer  border-1 border-bottom p-2 ps-4 py-3">
                <i className="bi bi-card-checklist me-1"></i>Skills
              </div>
            </a>
            <a href="#certificates">
              <div className="fs-5 pointer  border-1 border-bottom p-2 ps-4 py-3">
                <i className="bi bi-patch-check me-1"></i>Certificates
              </div>
            </a>
            <a href="#projects">
              <div className="fs-5 pointer  border-1 border-bottom p-2 ps-4 py-3">
                <i className="bi bi-window-stack me-1"></i> Projects
              </div>
            </a>

            <a href="#contact">
              <div className="fs-5 pointer  border-1 border-bottom p-2 ps-4 py-3">
                <i className="bi bi-telephone me-1"></i> Contact
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* nav mobile end */}
      <header className="top  shadow-sm" id="Home">
        <div className="blur ">
          {/* left section */}
          <section className="welcome-section d-flex justify-content-between align-items-center px-lg-3 ps-2">
            <div className="mt-2 col-7">
              <h2 className="text-white display-6">Welcome !!</h2>
              <div className="d-flex  mt-2">
                <h1 className="text-white">I'M</h1>
                <h1 className="ms-lg-3 ms-1 name">Ekansh Gupta</h1>
              </div>
              <h2 className="text-animation mt-lg-3  font-style-poppins">
                <TypeAnimation
                  sequence={[
                    "Full Stack Web Developer.",
                    1000,
                    "Mern Stack Developer.",
                    1000,
                    "I Can Build Ui/Ux.",
                    1000,
                    "I Can Build Responsive websites.",
                    1000,
                  ]}
                  speed={30}
                  repeat={Infinity}
                />
              </h2>
            </div>
            <div className="my-img col-5 d-flex justify-content-end pe-2">
              <img
                src="./images/me2.png"
                alt=""
                className="my-imgs img-fluid rounded-circle p-1"
              />
            </div>
          </section>
        </div>
      </header>

      {/*=========> about-sec <======== */}

      <section className="intro-sec py-5 px-lg-5 px-3" id="About">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className=" font-style-poppins text-white h2 about-me border-bottom border-warning">
            About Me
          </div>
          <div className="d-lg-flex d-flex flex-column flex-lg-row justify-content-between  mt-lg-5 mt-3 align-items-center">
            <h4 className="text-white text-lg-start text-center font-style-new col-lg-6">
              <p>
                As a <span className="text-warning">MERN</span> Stack Developer,
                I specialize in building fast and scalable web applications
                using
                <span className="text-warning mx-2">
                  MongoDB, ExpressJS, ReactJS,
                </span>
                and <span className="text-warning">Node.js</span>.
              </p>
              <p>
                I use my skills and expertise to build high-performance web
                applications, ensuring that they are
                <span className="text-warning mx-2">
                  responsive, user-friendly
                </span>
                , and <span className="text-warning"> easy to maintain</span>.
              </p>
              <p>
                With <span className="text-warning">MERN</span> , I can develop
                a web application from
                <span className="text-warning mx-2">scratch</span> , taking care
                of the entire development process, from the
                <span className="text-warning ms-2">server-side</span> to the
                <span className="text-warning ms-2">client-side</span>.
              </p>
            </h4>
            <div className="col-lg-4 ">
              <img src="./images/giphy.gif" alt="" className="img-fluid gif" />
            </div>
          </div>
        </div>
      </section>

      {/* SKills sections */}
      <section
        className="skills d-flex flex-column align-items-center py-5"
        id="skills"
      >
        <div>
          <h2 className="text-white border-bottom border-warning">Skills</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className=" d-flex justify-content-center flex-wrap col-9">
            <div className="cards border text-white mx-3 mt-5 h">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center flex-column align-items-center">
                <img
                  src="./images/html5-logo-31813.png"
                  alt=""
                  className="skill-icon mt-2"
                />
                <h5 className="mt-3">HTML</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 c">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/css.png"
                  className="skill-icon mt-2"
                  alt=""
                />
                <h5 className="mt-3">CSS</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 j">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/js.png"
                  className="skill-icon mt-2 img-fluid"
                  alt=""
                />
                <h5 className="mt-3">Javascript</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 b">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/bts.png"
                  className="skill-icon mt-2"
                  alt=""
                />
                <h5 className="mt-3">Bootstrap</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 m">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/mdb.png"
                  className="skill-icon mt-2"
                  alt=""
                />
                <h5 className="mt-3">MongoDb</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 n">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/ndj.png"
                  className="skill-icon mt-2"
                  alt=""
                />
                <h5 className="mt-3">NodeJs</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 r">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/react.png"
                  className="skill-icon mt-2"
                  alt=""
                />
                <h5 className="mt-3">ReactJs</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 g">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/git.png"
                  className="skill-icon mt-2"
                  alt=""
                />
                <h5 className="mt-3">Git</h5>
              </div>
            </div>
            <div className="cards border text-white mx-3 mt-5 nx">
              <div className="d-flex justify-content-center pt-3 font-style-poppins flex-column align-items-center">
                <img
                  src="./images/next.png"
                  className="skill-icon mt-2 bg-white rounded"
                  alt=""
                />
                <h5 className="mt-3">NextJs</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====> Certifications <===== */}
      <section className="cert-sec pt-5" id="certificates">
        <div className="d-flex justify-content-center text-white ">
          <h2 className="border-bottom border-warning">My Certificates</h2>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            showDots={true}
            swipeable={true}
            className="py-5
            ps-lg-3 ps-1 col-12 "
          >
            <div className="certificates-img img-fluid">
              <div className="certificates h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec pt-3 d-flex justify-content-evenly ">
                    <a
                      href="./pdf/super intern.pdf"
                      download="./pdf/super intern.pdf"
                    >
                      <button className="btn btn-warning">
                        Download <i className="ms-1 bi bi-download"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/145eabe5036f147968a2b6479427da71"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-4">
                        Verify <i className="ms-1 bi bi-check2-circle"></i>
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-lg-8 col-10  text-center cert-title">
                      Certificate For Making My Own Website From Scratch.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-rct h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec pt-3 d-flex justify-content-evenly">
                    <a
                      href="./pdf/react-certificate.pdf"
                      download="./pdf/react-certificate.pdf"
                    >
                      <button className="btn btn-warning">
                        Download <i className="ms-1 bi bi-download"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/f6aa416636bee60958ec3c15935a641c"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-4">
                        Verify <i className="ms-1 bi bi-check2-circle"></i>
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-lg-8 col-10  text-center cert-title">
                      Certificate For Completing React Project.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-JS h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec pt-3 d-flex justify-content-evenly">
                    <a href="./pdf/js-cert.pdf" download="./pdf/js-cert.pdf">
                      <button className="btn btn-warning ">
                        Download <i className="ms-1 bi bi-download"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/116e1db5cb1f8e4cf051d74db78a63dd"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-4">
                        Verify <i className="ms-1 bi bi-check2-circle"></i>
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-lg-8 col-10  text-center cert-title">
                      Certificate For Completing JavaScript Project.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-mern h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec pt-3 d-flex justify-content-evenly">
                    <a
                      href="./pdf/node,express,mongodb.pdf"
                      download="./pdf/node,express,mongodb.pdf"
                    >
                      <button className="btn btn-warning">
                        Download <i className="ms-1 bi bi-download"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/446e0d78989d6dd9136194b2edbffc6d"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-4">
                        Verify <i className="ms-1 bi bi-check2-circle"></i>
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-lg-8 col-10  text-center cert-title">
                      Certificate For Completing NodeJs, ExpressJs, MongoDb
                      Project.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-html h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec pt-3 d-flex justify-content-evenly">
                    <a
                      href="./pdf/Html,Css,Bootstrap.pdf"
                      download="./pdf/Html,Css,Bootstrap.pdf"
                    >
                      <button className="btn btn-warning">
                        Download <i className="ms-1 bi bi-download"></i>
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/b5b96527a71c8989bb818ad88fa9b1e0"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-4">
                        Verify <i className="ms-1 bi bi-check2-circle"></i>
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-lg-8 col-10  text-center cert-title">
                      Certificate For Making Website Using Only Html, Css,
                      Bootstrap.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          ;
        </div>
      </section>
      <div>
        <div className="star"></div>
      </div>

      {/* Projects */}
      <section className="Projects" id="projects">
        <div className="d-flex justify-content-center pb-5">
          <h2 className="border-bottom border-warning text-white">
            My Projects
          </h2>
        </div>
        <div className="d-flex justify-content-lg-end justify-content-center  me-lg-5 pb-5">
          <div className="d-flex justify-content-center">
            <div
              className={
                site === 1
                  ? "p-lg-2 p-1 px-lg-5 px-3 site-btn-left border-warning-spc site-btn text-white fw-bold set-button"
                  : "p-lg-2 p-1 px-lg-5 px-3 site-btn-left border-warning-spc site-btn text-white fw-bold"
              }
              onClick={() => setSite(1)}
            >
              <i className="me-1 bi bi-laptop"></i> Desktop View
            </div>
            <div
              className={
                site === 0
                  ? "p-lg-2 p-1 px-lg-5 px-3 border-warning-spc site-btn-right site-btn text-white fw-bold set-button"
                  : "p-lg-2 p-1 px-lg-5 px-3 border-warning-spc site-btn-right site-btn text-white fw-bold"
              }
              onClick={() => setSite(0)}
            >
              <i className="me-1 bi bi-phone"></i>Mobile View
            </div>
          </div>
        </div>

        {/* project-content */}

        <div className="d-flex justify-content-center">
          {site === 1 ? (
            <div className="d-flex justify-content-evenly col-12 project-sec flex-wrap">
              <div className="border project-container mt-3 p-1 pb-3 d-flex flex-column align-items-center">
                <img src="./images/cfl.jpg" alt="" className="img-fluid my-3" />
                <div className="d-flex pt-4 justify-content-between col-lg-9 col-10">
                  <a href="https://caffelatte-1.netlify.app" target="_blank">
                    <button className="px-4 fw-bold btn btn-light">
                      Go to site
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/ekanshgupta981/caffeLatte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      GitHub Link <i className="bi bi-github ms-1"></i>
                    </button>
                  </a>
                </div>
                <div classname="">
                  <h5 className="font-style-poppins text-white pt-4 text-center ">
                    This is Desktop view of cafe shop website which is made with
                    Mern technology and have backend and frontend programming.
                  </h5>
                </div>
              </div>

              <div className="border project-container mt-3 p-1 pb-3 d-flex flex-column align-items-center">
                <img src="./images/fkt.jpg" alt="" className="img-fluid my-3" />
                <div className="d-flex pt-4 justify-content-between col-lg-9 col-10">
                  <a
                    href="https://flipkart-clone-1.netlify.app/"
                    target="_blank"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      Go to site
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/ShehrozEdu/e-Commerce-client-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      GitHub Link <i className="bi bi-github ms-1"></i>
                    </button>
                  </a>
                </div>
                <div classname="">
                  <h5 className="font-style-poppins text-white pt-4 text-center ">
                    This is Desktop view of Flipkart group project website which
                    is made with Mern technology and have backend and frontend
                    programming.
                  </h5>
                </div>
              </div>
              <div className="border project-container mt-3 p-1 pb-3 d-flex flex-column align-items-center">
                <img src="./images/zmc.jpg" alt="" className="img-fluid my-3" />
                <div className="d-flex pt-4 justify-content-between col-lg-9 col-10">
                  <a href="https://zomato-clone-2.netlify.app/" target="_blank">
                    <button className="px-4 fw-bold btn btn-light">
                      Go to site
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/ekanshgupta981/zomato-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      GitHub Link <i className="bi bi-github ms-1"></i>
                    </button>
                  </a>
                </div>

                <div classname="">
                  <h5 className="font-style-poppins text-white pt-4 text-center ">
                    This is Desktop view of Zomato project website which is made
                    with Mern technology and have backend and frontend
                    programming And Have filter.
                  </h5>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-evenly col-12 project-sec flex-wrap">
              <div className="border project-container mt-3 p-1 pb-3 d-flex flex-column align-items-center">
                <img
                  src="./images/cfl-m.jpg"
                  alt=""
                  className="img-fluid my-3"
                />
                <div className="d-flex pt-4 justify-content-between col-lg-9 col-10">
                  <a href="https://caffelatte-1.netlify.app" target="_blank">
                    <button className="px-4 fw-bold btn btn-light">
                      Go to site
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/ekanshgupta981/caffeLatte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      GitHub Link <i className="bi bi-github ms-1"></i>
                    </button>
                  </a>
                </div>
                <div classname="">
                  <h5 className="font-style-poppins text-white pt-4 text-center ">
                    This is Mobile view of cafe shop website which is made with
                    Mern technology and have backend and frontend programming.
                  </h5>
                </div>
              </div>
              <div className="border project-container mt-3 p-1 pb-3 d-flex flex-column align-items-center">
                <img
                  src="./images/fkt-m.jpg"
                  alt=""
                  className="img-fluid my-3"
                />
                <div className="d-flex pt-4 justify-content-between col-lg-9 col-10">
                  <a
                    href="https://flipkart-clone-1.netlify.app/"
                    target="_blank"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      Go to site
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/ShehrozEdu/e-Commerce-client-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 fw-bold btn btn-light">
                      GitHub Link <i className="bi bi-github ms-1"></i>
                    </button>
                  </a>
                </div>
                <div classname="">
                  <h5 className="font-style-poppins text-white pt-4 text-center ">
                    This is Mobile view of Flipkart Group project website which
                    is made with Mern technology and have backend and frontend
                    programming.
                  </h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="custom-footer">
        <section className="d-flex justify-content-lg-between justify-content-center border-bottom border-1 border-muted p-4 align-items-center ">
          <div className="text-light fs-5 d-lg-flex d-none">
            Contact Me on Social Network
          </div>

          <div className="d-flex justify-content-around social-media-icons">
            {/* <div>
              <i
                className="fa fa-facebook text-light mx-3 fb"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-twitter text-light mx-3 tweet"
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <i
                className="fa fa-google text-light mx-3 google"
                aria-hidden="true"
              ></i>
            </div> */}
            <a
              href="https://api.whatsapp.com/send?phone=919650910557"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <i className="bi bi-whatsapp text-light mx-3 wp"></i>
              </div>
            </a>

            <div>
              <i
                className="fa fa-linkedin text-light mx-3 linkdin"
                aria-hidden="true"
              ></i>
            </div>
            <a
              href="https://github.com/ekanshgupta981"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <i
                  className="fa fa-github text-light mx-3 git"
                  aria-hidden="true"
                ></i>
              </div>
            </a>
          </div>
        </section>
        {/* mid footer */}
        <section id="contact">
          <section className="text-light small">
            <div className="container text-center text-md-start mt-2">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <div className="d-flex align-items-center">
                      <div className="mx-2">
                        <img
                          src="./images/Picsart_23-04-18_13-21-27-327.png"
                          alt=""
                          className="logo-mini me-1"
                        />
                      </div>
                      <div className="font-style-new mt-1">Ekansh Gupta</div>
                    </div>
                  </h6>
                  <p>
                    "I am a proficient MERN Stack Web Developer, dedicated to
                    crafting top-notch web applications with efficient coding
                    skills and a keen eye for design."
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Technology</h6>
                  <p>
                    <a>MongodB</a>
                  </p>
                  <p>
                    <a>Express Js</a>
                  </p>
                  <p>
                    <a>React</a>
                  </p>
                  <p>
                    <a>Node js</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 ">Contact</h6>
                  <p>
                    <i className="bi bi-geo-alt-fill me-3"></i>
                    <span>India, Delhi</span>
                  </p>
                  <a href="mailto:workwithekansh@gmail.com">
                    <p>
                      <i className="bi bi-envelope-at-fill me-3"></i>
                      <span className="text-warning">
                        workwithekansh@gmail.com
                      </span>
                    </p>
                  </a>

                  <p>
                    <i className="bi bi-telephone-fill me-3"></i>
                    <span>+91 9650910557</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="d-flex justify-content-center border-1 border-top border-muted mt">
          <div>
            <h5 className="text-muted pt-2">
              © 2023 Copyright: Ekansh Gupta Portfolio
            </h5>
          </div>
        </section>
      </footer>
    </>
  );
}
