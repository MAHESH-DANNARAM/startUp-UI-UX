export default function Login() {
  return (
    <>
      {/* <div className="container">
        <div className="body d-md-flex align-items-center justify-content-between">
          <div className="box-1 mt-md-0 mt-5">
            <img
              src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className=""
              alt=""
            />
          </div>
          <div className=" box-2 d-flex flex-column h-100">
            <div className="mt-5">
              <p className="mb-1 h-1">Create Account.</p>
              <p className="text-muted mb-2">
                Share your thouhts with the world form today.
              </p>
              <div className="d-flex flex-column ">
                <p className="text-muted mb-2">Continue with...</p>
                <div className="d-flex align-items-center">
                  <a href="#" className="box me-2 selectio">
                    <span className="fab fa-facebook-f mb-2"></span>
                    <p className="mb-0">Facebook</p>
                  </a>
                  <a href="#" className="box me-2">
                    <span className="fab fa-google mb-2"></span>
                    <p className="mb-0">Google</p>
                  </a>
                  <a href="#" className="box">
                    <span className="far fa-envelope mb-2"></span>
                    <p className="mb-0">Email</p>
                  </a>
                </div>
                <div className="mt-3">
                  <p className="mb-0 text-muted">Already have an account?</p>
                  <div className="btn btn-primary">
                    Log in<span className="fas fa-chevron-right ms-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <p className="footer text-muted mb-0 mt-md-0 mt-4">
                By register you agree with our
                <span className="p-color me-1">terms and conditions</span>and
                <span className="p-color ms-1">privacy policy</span>
              </p>
            </div>
          </div>
          <span className="fas fa-times"></span>
        </div>
      </div> */}
      <div className="container">
        <section className="h-screen">
          <div className="container h-full px-6 py-24">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              {/* <!-- Left column container with background--> */}
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt="Phone image"
                />
              </div>

              {/* <!-- Right column container with form --> */}
              <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                <form>
                  {/* <!-- Email input --> */}
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Email address"
                    />
                    <label
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput33"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="exampleFormControlInput33"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>

                  {/* <!-- Remember me checkbox --> */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    {/* <!-- Forgot password link --> */}
                    <a
                      href="#!"
                      className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="bg-blue-500 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign in
                  </button>

                  {/* <!-- Divider --> */}
                  <div>
                    <p className="mx-4 mb-4 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>
                  {/* <!-- Social login buttons --> */}
                  <a
                    className=" bg-blue-900 mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Continue with Facebook
                  </a>
                  <a
                    className=" bg-blue-400 mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {/* <!-- Twitter --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Continue with Twitter
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
