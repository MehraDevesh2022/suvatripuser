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
