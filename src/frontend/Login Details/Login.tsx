// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
import "@/assets/frontend/css/login.css";
import Text from "@/terms & conditions.txt"
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Modal } from "antd";

function App() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  useEffect(() => {
    // Load content from a text file using fetch or axios
    fetch(Text)
      .then(response => response.text())
      .then(text => setModalText(text))
      .catch(error => console.error('Error loading text:', error));
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return (
    // <MDBContainer fluid className="p-4">
    //   <MDBRow>
    //     <MDBCol
    //       md="6"
    //       className="text-center text-md-start d-flex flex-column justify-content-center"
    //     >
    //       <h1 className="my-5 display-3 fw-bold ls-tight px-3">
    //         The best offer <br />
    //         <span className="text-primary">for your business</span>
    //       </h1>

    //       <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
    //         itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
    //         at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
    //         aliquid ipsum atque?
    //       </p>
    //     </MDBCol>

    //     <MDBCol md="6">
    //       <MDBCard className="my-5">
    //         <MDBCardBody className="p-5">
    //           <MDBInput
    //             wrapperClass="mb-4"
    //             label="Email"
    //             id="form1"
    //             type="email"
    //           />
    //           <MDBInput
    //             wrapperClass="mb-2"
    //             label="Password"
    //             id="form1"
    //             type="password"
    //           />
    //           <Link
    //             type="button"
    //             to="/forgot"
    //             className="text-blue-800 text-center font-medium  text-sm py-3 focus:outline-none"
    //           >
    //             Forgot Password
    //           </Link>

    //           <div className="mb-4">
    //             <MDBCheckbox
    //               onClick={showModal}
    //               name="flexCheck"
    //               value=""
    //               id="flexCheckDefault"
    //               label="Subscribe to our newsletter"
    //             />
    //             <Modal
    //               title="Title"
    //               open={open}
    //               onOk={handleOk}
    //               confirmLoading={confirmLoading}
    //               onCancel={handleCancel}
    //             >
    //               <p>{modalText}</p>
    //             </Modal>
    //           </div>
    //           <div className="grid gap-x-8 gap-y-4 grid-cols-2">
    //             <Link
    //               type="button"
    //               to=""
    //               className="text-white w-100 mb-4 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    //             >
    //               Sign in
    //             </Link>
    //             <Link
    //               type="button"
    //               to="/register"
    //               className="text-white w-100 mb-4 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    //             >
    //               Register
    //             </Link>
    //           </div>

    //           <div className="text-center">
    //             <p>or sign in with:</p>
    //             <div className=" container">
    //               <div className="grid gap-x-8 gap-y-4 grid-cols-5 pt-[5%] pl-[34%]">
    //                 <Link type="button" to="">
    //                   <svg
    //                     className="w-6 h-6 text-blue-500 dark:text-white"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 8 19"
    //                   >
    //                     <path
    //                       fill-rule="evenodd"
    //                       d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //                       clip-rule="evenodd"
    //                     />
    //                   </svg>
    //                 </Link>

    //                 <Link type="button" to="">
    //                   <svg
    //                     className="w-6 h-6 text-blue-500 dark:text-white"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 20 17"
    //                   >
    //                     <path
    //                       fill-rule="evenodd"
    //                       d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //                       clip-rule="evenodd"
    //                     />
    //                   </svg>
    //                 </Link>

    //                 <Link type="button" to="">
    //                   <svg
    //                     className="w-6 h-6 text-blue-500 dark:text-white"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="currentColor"
    //                     viewBox="0 0 18 19"
    //                   >
    //                     <path
    //                       fill-rule="evenodd"
    //                       d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
    //                       clip-rule="evenodd"
    //                     />
    //                   </svg>
    //                 </Link>

    //                 <Link type="button" to=""></Link>
    //               </div>
    //             </div>
    //           </div>
    //         </MDBCardBody>
    //       </MDBCard>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
    <></>
  );
}

export default App;
