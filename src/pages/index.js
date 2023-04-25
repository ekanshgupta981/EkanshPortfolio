import { TypeAnimation } from "react-type-animation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between px-5 nav">
        <img
          src="./images/Picsart_23-04-18_13-21-27-327.png"
          alt=""
          className="logo ms-5"
        />
        <div className="text-white nav-text d-flex justify-content-evenly justify-content-evenly col-lg-7 col-9">
          <div className="fs-5 pointer">
            <a href="#Home">
              <i className="bi bi-house me-1"></i>Home
            </a>
          </div>
          <div className="fs-5 pointer">
            <a href="#About">
              <i className="bi bi-person-check me-2"></i>About
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
            <i className="bi bi-window-stack me-1"></i> Projects
          </div>
          <div className="fs-5 pointer">
            <i className="bi bi-telephone me-1"></i> Contact
          </div>
        </div>
      </div>
      <header className="top shadow-sm" id="Home">
        <div className="blur">
          {/* left section */}
          <section className="welcome-section d-lg-flex justify-content-between">
            <div className="mt-4">
              <h2 className="text-white display-6">Welcome !!</h2>
              <div className="d-flex mt-4">
                <h1 className="text-white">I'M</h1>
                <h1 className="ms-3 name">Ekansh Gupta</h1>
              </div>
              <h2 className="text-animation font-style-poppins">
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
            <div className="my-img position-relative">
              <img
                src="./images/me2.png"
                alt=""
                className="my-imgs img-fluid position-absolute rounded-circle p-1"
              />
            </div>
          </section>
        </div>
      </header>

      {/*=========> intro-sec <======== */}

      <section className="intro-sec py-5 px-lg-5 px-3" id="About">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className=" font-style-poppins text-white h2 about-me border-bottom border-warning">
            About Me
          </div>
          <div className="d-lg-flex d-flex flex-column flex-lg-row justify-content-between mt-5 align-items-center">
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
              <img src="./images/giphy.gif" alt="" className="gif img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* SKills sections */}
      <section
        className="skills d-flex flex-column align-items-center  py-5"
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
                <img src="./images/js.png" className="skill-icon mt-2" alt="" />
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
            ps-lg-3 ps-1 col-12"
          >
            <div className="certificates-img py-2">
              <div className="certificates h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec">
                    <a
                      href="./pdf/super intern.pdf"
                      download="./pdf/super intern.pdf"
                    >
                      <button className="btn btn-warning px-4 py-2 mx-3 mt-4">
                        Download
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/145eabe5036f147968a2b6479427da71"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-5 py-2 mx-5 mt-4">
                        Verify
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-7 text-center cert-title">
                      Certificate For Making My Own Website From Scratch.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-rct h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec">
                    <a
                      href="./pdf/react-certificate.pdf"
                      download="./pdf/react-certificate.pdf"
                    >
                      <button className="btn btn-warning px-4 py-2 mx-3 mt-4">
                        Download
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/f6aa416636bee60958ec3c15935a641c"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-5 py-2 mx-5 mt-4">
                        Verify
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-7 text-center cert-title">
                      Certificate For Completing React Project.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-JS h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec">
                    <a href="./pdf/js-cert.pdf" download="./pdf/js-cert.pdf">
                      <button className="btn btn-warning  px-4 py-2 mx-3 mt-4">
                        Download
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/116e1db5cb1f8e4cf051d74db78a63dd"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-5 py-2 mx-5 mt-4">
                        Verify
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-7 text-center cert-title">
                      Certificate For Completing JavaScript Project.
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="certificates-img img-fluid ">
              <div className="certificates-mern h-100 position-relative">
                <div className="position-absolute cert-btn w-100">
                  <div className="card-sec">
                    <a
                      href="./pdf/node,express,mongodb.pdf"
                      download="./pdf/node,express,mongodb.pdf"
                    >
                      <button className="btn btn-warning px-4 py-2 mx-3 mt-4">
                        Download
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/446e0d78989d6dd9136194b2edbffc6d"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-5 py-2 mx-5 mt-4">
                        Verify
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-7 text-center cert-title">
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
                  <div className="card-sec">
                    <a
                      href="./pdf/Html,Css,Bootstrap.pdf"
                      download="./pdf/Html,Css,Bootstrap.pdf"
                    >
                      <button className="btn btn-warning px-4 py-2 mx-3 mt-4">
                        Download
                      </button>
                    </a>

                    <a
                      href="https://www.edureka.co/lms/certificate/b5b96527a71c8989bb818ad88fa9b1e0"
                      target="_blank"
                    >
                      <button className="btn btn-primary px-5 py-2 mx-5 mt-4">
                        Verify
                      </button>
                    </a>
                  </div>
                  <div className="d-flex justify-content-center pt-3 ">
                    <h6 className="text-white col-7 text-center cert-title">
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
      <section className="Projects">
        <div className="d-flex justify-content-center">
          <h2 className="border-bottom border-warning text-white">
            My Projects
          </h2>
        </div>
      </section>
    </>
  );
}
