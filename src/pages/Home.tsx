// import { Collapse } from 'flowbite';
import "../components/frontend/assets/css/creative-studio.css";
import "../components/frontend/assets/vendors/themify-icons/css/themify-icons.css";
import Products from './Indexelement/Pages/Demo';
export default function Home() {
//   const collapse = new Collapse($targetEl, $triggerEl, options);
//   // show the target element
// collapse.expand();

// // hide the target element
// collapse.collapse();

// // toggle the visibility of the target element
// collapse.toggle();
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <nav
          className="navbar custom-navbar navbar-expand-lg navbar-dark"
          data-spy="affix"
          data-offset-top="20"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="imgs/logo.png"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>rtree</span>
            </button>

            <div
              className="navbar-collapse visible"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    API
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                {/* <div className="flex items-center md:order-2">
                  <button
                    type="button"
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="user photo"
                    />
                  </button>
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        name@flowbite.com
                      </span>
                    </div>
                  </div>
                </div> */}
              </ul>
            </div>
          </div>
        </nav>

        <header className="header">
          <div className="overlay">
            <h1 className="title">Creative Studio</h1>
            <h1 className="subtitle">Small Team With Big Ideas</h1>
            <div className="buttons text-center">
              <a
                href="#service"
                className="btn btn-primary rounded w-lg btn-lg my-1"
              >
                Our Service
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light rounded w-lg btn-lg my-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </header>

        <div className=" pt-[8.5rem]">
          <div className="box text-center">
            <div className="box-item">
              <i className="ti-vector"></i>
              <h6 className="box-title">UX/UI Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                excepturi, repellat esse laborum explicabo quia.
              </p>
            </div>
            <div className="box-item">
              <i className="ti-filter"></i>
              <h6 className="box-title">Web Development</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                excepturi, repellat esse laborum explicabo quia.
              </p>
            </div>
            <div className="box-item">
              <i className="ti-mobile"></i>
              <h6 className="box-title">App Design</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                excepturi, repellat esse laborum explicabo quia.
              </p>
            </div>
          </div>
        </div>

        <section id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 col-lg-4">
                <img
                  src="imgs/about.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  className="w-100 img-thumbnail mb-3"
                />
              </div>
              <div className="col-md-7 col-lg-8">
                <h6 className="section-subtitle mb-0">We Create</h6>
                <h6 className="section-title mb-3">Awesome Work</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente cupiditate quas, amet harum perferendis minus, cum
                  dolorum obcaecati iste aspernatur voluptatum aut.
                </p>
                <p>
                  Cum laudantium unde nemo doloribus eligendi quodarum ea vitae
                  dicta. Accusantium vero, ea? Alias, atque libero. Id, ut
                  harum.{" "}
                </p>
                <p>
                  consectetur adipisicing elit. Omnis quidem, quos iure a
                  dolorum illum culpa quia nemo soluta, ratione harum beatae
                  minus doloribus consectetur! Similique tempora sunt doloribus
                  molestias.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="has-bg-img py-md">
          <div className="container text-center">
            <h6 className="section-subtitle">We See</h6>
            <h6 className="section-title mb-6">What Other Don't See.</h6>
            <div className="widget mb-4">
              <div className="widget-item">
                <i className="ti-notepad"></i>
                <h4>Planning</h4>
              </div>
              <div className="widget-item">
                <i className="ti-layout"></i>
                <h4>Mockup</h4>
              </div>
              <div className="widget-item">
                <i className="ti-filter"></i>
                <h4>Develope</h4>
              </div>
              <div className="widget-item">
                <i className="ti-thumb-up"></i>
                <h4>Provide</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="service">
          <div className="container">
            <h6 className="section-subtitle text-center">Makes Happen</h6>
            <h5 className="section-title text-center mb-6">Our Service</h5>
            <div className="row">
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-filter text-primary"></i>
                    </h2>
                    <h6 className="card-title">AI Products</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-paint-roller text-primary"></i>
                    </h2>
                    <h6 className="card-title">IOT Based on Chat-GPT</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-ruler-pencil text-primary"></i>
                    </h2>
                    <h6 className="card-title">Virtual Reality</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-layers text-primary"></i>
                    </h2>
                    <h6 className="card-title">Augmented Reality</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-bolt text-primary"></i>
                    </h2>
                    <h6 className="card-title">AI in Pharma</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-palette text-primary"></i>
                    </h2>
                    <h6 className="card-title">Education</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-stats-up text-primary"></i>
                    </h2>
                    <h6 className="card-title">Telecommunication</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-location-arrow text-primary"></i>
                    </h2>
                    <h6 className="card-title">Movies</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-location-arrow text-primary"></i>
                    </h2>
                    <h6 className="card-title">Marketing Chatbots</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Debitis amet saepe et!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container text-center">
            <h6 className="section-subtitle">Our Awesome Works</h6>
            <h6 className="section-title mb-5">Our Portfolio</h6>
            <div className="row">
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img
                    src="imgs/folio-1.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <a href="javascript:void(0)">
                        <i className="ti-zoom-in"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src="imgs/folio-2.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <a href="javascript:void(0)">
                        <i className="ti-zoom-in"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img
                    src="imgs/folio-3.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <a href="javascript:void(0)">
                        <i className="ti-zoom-in"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src="imgs/folio-4.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <a href="javascript:void(0)">
                        <i className="ti-zoom-in"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img
                    src="imgs/folio-5.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <a href="javascript:void(0)">
                        <i className="ti-zoom-in"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src="imgs/folio-6.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <a href="javascript:void(0)">
                        <i className="ti-zoom-in"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container">
            <h6 className="section-subtitle text-center">Meet With</h6>
            <h6 className="section-title mb-5 text-center">Our Angels</h6>
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src="imgs/avatar.jpg" />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      FOUNDER
                    </h6>
                    <h5 className="card-title">Matthew Davis</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <a href="javascript:void(0)">
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-github"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-dropbox"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src="imgs/avatar-1.jpg" />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">CEO</h6>
                    <h5 className="card-title">Barbara Ross</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <a href="javascript:void(0)">
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-github"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-dropbox"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src="imgs/avatar-2.jpg" />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      Designer
                    </h6>
                    <h5 className="card-title">Karen Perry</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <a href="javascript:void(0)">
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-github"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-dropbox"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src="imgs/avatar-3.jpg" />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      App Designer
                    </h6>
                    <h5 className="card-title">Ashley Diaz</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <a href="javascript:void(0)">
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-github"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-dropbox"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src="imgs/avatar-4.jpg" />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      Developer
                    </h6>
                    <h5 className="card-title">Edward Harris</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <a href="javascript:void(0)">
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-github"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-dropbox"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img className="card-img-top inset" src="imgs/avatar-5.jpg" />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      photographer
                    </h6>
                    <h5 className="card-title">Brian Scott</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <a href="javascript:void(0)">
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-github"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-dropbox"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="has-bg-img bg-img-2">
          <div className="container text-center">
            <h6 className="section-subtitle">We Are Awesome</h6>
            <h6 className="section-title mb-6">Some Fun Fucts</h6>
            <div className="widget-2">
              <div className="widget-item">
                <i className="ti-cup"></i>
                <h6 className="title">100+</h6>
                <div className="subtitle">Awards Won</div>
              </div>
              <div className="widget-item">
                <i className="ti-face-smile"></i>
                <h6 className="title">100+</h6>
                <div className="subtitle">Happy Clients</div>
              </div>
              <div className="widget-item">
                <i className="ti-blackboard"></i>
                <h6 className="title">845+</h6>
                <div className="subtitle">Project Completed</div>
              </div>
              <div className="widget-item">
                <i className="ti-comments-smiley"></i>
                <h6 className="title">15K+</h6>
                <div className="subtitle">Comments</div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="container">
            <h6 className="section-subtitle text-center">Testimonial</h6>
            <h6 className="section-title text-center mb-6">
              What Our Clients Says
            </h6>
            <div className="row">
              <div className="col-md-6">
                <div className="testimonial-wrapper">
                  <div className="img-holder">
                    <img
                      src="imgs/avatar-5.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                    />
                  </div>
                  <div className="body">
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eaque doloribus autem aperiam earum nostrum omnis
                      blanditiis corporis perspiciatis adipisci nihil.
                    </p>
                    <h6 className="title">Richard Reb</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-wrapper">
                  <div className="img-holder">
                    <img
                      src="imgs/avatar-6.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                    />
                  </div>
                  <div className="body">
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eaque doloribus autem aperiam earum nostrum omnis
                      blanditiis corporis perspiciatis adipisci nihil.
                    </p>
                    <h6 className="title">John Doe</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="has-bg-img py-lg">
          <div className="container text-center">
            <button
              type="button"
              className="btn btn-outline-primary play-control"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <i className="ti-control-play"></i>
            </button>
            <h6 className="section-title mt-4">See Our Intro Video</h6>
          </div>
        </section>

        <div
          className="modal fade"
          id="exampleModalCenter"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <iframe
                width="100%"
                height="475"
                src="https://www.youtube.com/embed/TP4THzsAa3M"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <section id="blog">
          <div className="container">
            <h6 className="section-subtitle text-center">News Feeds</h6>
            <h6 className="section-title mb-6 text-center">Our Blog</h6>

            <div className="row">
              <div className="col-md-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src="imgs/blog-1.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <a href="javascript:void(0)">
                        <i className="ti-comments"></i> 123
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-eye"></i> 123
                      </a>
                    </div>
                    <h5 className="card-title">Possimus aliquam veniam</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repudiandae laudantium dolor nisi obcaecati, non
                      laboriosam asperiores doloremque tempora repellendus iure!
                    </p>
                    <a href="javascript:void(0)" className="d-block mt-3">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src="imgs/blog-2.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <a href="javascript:void(0)">
                        <i className="ti-comments"></i> 434
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-eye"></i> 987
                      </a>
                    </div>
                    <h5 className="card-title">Repudiandae laudantium</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repudiandae laudantium dolor nisi obcaecati, non
                      laboriosam asperiores doloremque tempora repellendus iure!
                    </p>
                    <a href="javascript:void(0)" className="d-block mt-3">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src="imgs/blog-3.jpg"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <a href="javascript:void(0)">
                        <i className="ti-comments"></i> 164
                      </a>
                      <a href="javascript:void(0)">
                        <i className="ti-eye"></i> 425
                      </a>
                    </div>
                    <h5 className="card-title">Laboriosam asperiores</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repudiandae laudantium dolor nisi obcaecati, non
                      laboriosam asperiores doloremque tempora repellendus iure!
                    </p>
                    <a href="javascript:void(0)" className="d-block mt-3">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="infos">
                <h6 className="section-subtitle">Get Here</h6>
                <h6 className="section-title mb-4">Contact Us</h6>

                <div className="item">
                  <i className="ti-location-pin"></i>
                  <div className="">
                    <h5>Location</h5>
                    <p> 12345 Fake ST NoWhere AB Country</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-mobile"></i>
                  <div>
                    <h5>Phone Number</h5>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-email"></i>
                  <div className="mb-0">
                    <h5>Email Address</h5>
                    <p>info@website.com</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-world"></i>
                  <div className="mb-0">
                    <h5>example.com</h5>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="form">
                <h6 className="section-subtitle">Available 24/7</h6>
                <h6 className="section-title mb-4">Get In Touch</h6>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="contact-message"
                      id=""
                      className="form-control form-control-lg"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg mt-3"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="has-bg-img py-0">
          <div className="container">
            <div className="footer">
              <div className="footer-lists">
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">ABOUT US</h6>
                  </li>
                  <li className="list-body">
                    <a href="#" className="logo">
                      <img
                        src="imgs/logo.png"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                      />
                      <h6>Creative Studio</h6>
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae nobis fugit maxime deleniti minus optio accusamus,
                      quam maiores explicabo sunt.
                    </p>
                    <p className="mt-3">
                      Copyright{" "}
                      <script>document.write(new Date().getFullYear())</script>{" "}
                      &copy;{" "}
                      <a
                        className="d-inline text-primary"
                        href="http://www.devcrud.com"
                      >
                        DevCRUD
                      </a>
                    </p>
                  </li>
                </ul>
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">USEFUL LINKS</h6>
                  </li>
                  <li className="list-body">
                    <div className="row">
                      <div className="col">
                        <a href="#about">About</a>
                        <a href="#service">Service</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#testmonail">Testimonial</a>
                      </div>
                      <div className="col">
                        <a href="#team">Team</a>
                        <a href="#blog">Blog</a>
                        <a href="#">Faq</a>
                        <a href="#">Privacy Policy</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">CONTACT INFO</h6>
                  </li>
                  <li className="list-body">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p>
                      <i className="ti-location-pin"></i> 12345 Fake ST NoWhere
                      AB Country
                    </p>
                    <p>
                      <i className="ti-email"></i> info@website.com
                    </p>
                    <div className="social-links">
                      <a href="javascript:void(0)" className="link">
                        <i className="ti-facebook"></i>
                      </a>
                      <a href="javascript:void(0)" className="link">
                        <i className="ti-twitter-alt"></i>
                      </a>
                      <a href="javascript:void(0)" className="link">
                        <i className="ti-google"></i>
                      </a>
                      <a href="javascript:void(0)" className="link">
                        <i className="ti-pinterest-alt"></i>
                      </a>
                      <a href="javascript:void(0)" className="link">
                        <i className="ti-instagram"></i>
                      </a>
                      <a href="javascript:void(0)" className="link">
                        <i className="ti-rss"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
