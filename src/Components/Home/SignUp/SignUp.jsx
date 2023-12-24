<<<<<<< HEAD
import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Ligin from './Ligin';
import Sign from './Sign';

function SignUp({ show, setShow }) {
    const [handleLoginShow, setHandleLoginShow] = useState(true)
    const [forgotPass, setForgetpass] = useState(true)
    const modalStyle = {
        fontFamily: "'Popins', sans-serif",
        backgroundColor: '#fff',
        borderRadius: '20px',

        // Default width for larger screens

    };
    const mobileModalStyle = {
        width: '100%',  // 100% width on mobile devices
    };

    const modalRef = useRef(null);

    const handleClose = () => setShow(false);

    const handleModalClick = (e) => {
        // Prevent closing modal when clicking on the modal content
        e.stopPropagation();
    };
    const handleBackdropClick = () => {
        // Close the modal when clicking outside the modal
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} onClick={handleBackdropClick} size='lg' centered ref={modalRef}>
                <Modal.Body onClick={handleModalClick} style={{ ...modalStyle, ...(window.innerWidth <= 800 && mobileModalStyle) }}>

                    {
                        handleLoginShow ? <Ligin handleLoginShow={handleLoginShow} setHandleLoginShow={setHandleLoginShow} /> : <Sign handleLoginShow={handleLoginShow} setHandleLoginShow={setHandleLoginShow} />
                    }

                </Modal.Body>
            </Modal>

            {/* SignUp Modal */}




            {/* Login Modal */}


        </div>
    )
}

export default SignUp
=======
import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import Sign from "./Sign";

function SignUp({ show, setShow  , setIsLoggedIn}) {
  const [handleLoginShow, setHandleLoginShow] = useState(true);
  const [forgotPass, setForgetpass] = useState(true);
  const modalStyle = {
    fontFamily: "'Josefin Sans', sans-serif",
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "700px",
    // Default width for larger screens
  };
  const mobileModalStyle = {
    width: "100%", // 100% width on mobile devices
  };

  const modalRef = useRef(null);

  const handleClose = () => setShow(false);

  const handleModalClick = (e) => {
    // Prevent closing modal when clicking on the modal content
    e.stopPropagation();
  };
  const handleBackdropClick = () => {
    // Close the modal when clicking outside the modal
    handleClose();
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        onClick={handleBackdropClick}
        centered
        ref={modalRef}
      >
        <Modal.Body
          onClick={handleModalClick}
          style={{
            ...modalStyle,
            ...(window.innerWidth <= 800 && mobileModalStyle),
          }}
        >
          {handleLoginShow ? (
            <Login
              handleLoginShow={handleLoginShow}
              setHandleLoginShow={setHandleLoginShow}
              handleBackdropClick={handleBackdropClick}
              setIsLoggedIn ={setIsLoggedIn}
            />
          ) : (
            <Sign
            handleBackdropClick={handleBackdropClick}
              handleLoginShow={handleLoginShow}
              setHandleLoginShow={setHandleLoginShow}
              setIsLoggedIn ={setIsLoggedIn}
            />
          )}
        </Modal.Body>
      </Modal>

      {/* SignUp Modal */}

      {/* Login Modal */}
    </div>
  );
}

export default SignUp;
>>>>>>> d17df1aed87dec0d0bf5cc18b40bbfd9f320fb0e
