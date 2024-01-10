import React, { useState } from "react";
import GuestReview from "./GuestReview";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HotelReviews() {
  const inputStyle = {
    backgroundColor: "#f3f5f8",
  };

  const [show, setShow] = useState(false);
  const [reviewData, setReviewData] = useState({
    staff_rating: 0,
    facilities_rating: 0,
    cleaniness_rating: 0,
    comfort_rating: 0,
    money_rating: 0,
    location_rating: 0,
    wifi_rating: 0,
    review: "",
    images: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setReviewData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };

  const handleSubmitReview = async () => {
    try {
      const formData = new FormData();
      Object.entries(reviewData).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file, index) => {
            formData.append(`image${index + 1}`, file);
          });
        } else {
          formData.append(key, value);
        }
      });

      const response = await fetch("http://localhost:8000/review", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Review submitted successfully");
        setReviewData({
          staff_rating: 0,
          facilities_rating: 0,
          cleaniness_rating: 0,
          comfort_rating: 0,
          money_rating: 0,
          location_rating: 0,
          wifi_rating: 0,
          review: "",
          images: [],
        });
        handleClose();
      } else {
        console.error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const now = 89;

  return (
    <div className="w-full  bg-[#fff] my-3 px-4">
      {/* Review model */}
      <>
        <Modal show={show} size="lg" onHide={handleClose} animation={true}>
          <Modal.Header>
            <h3>Please review our hotel</h3>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Row>
                <Col>
                  <p className="text-xl font-[600] tracking-wider">
                    Rate our staff
                  </p>
                  <div className="input-group mb-0">
                    <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="Staff rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                        value={reviewData.staff_rating}
                     onChange={(e) => { setReviewData((prevData) => ({...prevData, staff_rating: e.target.value}))}}
                    />
                  </div>
                </Col>
                <Col>
                  <p className="text-xl font-[600] tracking-wider">
                    Rate our facilities
                  </p>
                  <div className="input-group mb-0">
                    <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="facilities rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                        value={reviewData.facilities_rating}
                        onChange={(e) => { setReviewData((prevData) => ({...prevData, facilities_rating: e.target.value}))}}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p className="text-xl font-[600] tracking-wider">
                    Rate our cleaniness
                  </p>
                  <div className="input-group mb-0">
                    <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="cleaniness rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                        value={reviewData.cleaniness_rating}
                        onChange={(e) => { setReviewData((prevData) => ({...prevData, cleaniness_rating: e.target.value}))}}
                    />
                  </div>
                </Col>
                <Col>
                  <p className="text-xl font-[600] tracking-wider">
                    Rate our comfort
                  </p>
                  <div className="input-group mb-0">
                    <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="comfort rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                        value={reviewData.comfort_rating}
                        onChange={(e) => { setReviewData((prevData) => ({...prevData, comfort_rating: e.target.value}))}}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <p className="text-xl font-[600] tracking-wider">
                    Value for money
                  </p>
                  <div className="input-group mb-0">
                    <input
                      type="number"
                      style={inputStyle}
                      className="form-control bg-[#f3f5f8]"
                      id="Staff rating"
                      placeholder="Money rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                        value={reviewData.money_rating}
                        onChange={(e) => { setReviewData((prevData) => ({...prevData, money_rating: e.target.value}))}}
                    />
                  </div>
                </Col>
                <Col>
                  <p className="text-xl font-[600] tracking-wider">
                    Rate our Location
                  </p>
                  <div className="input-group mb-0">
                    <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="Location rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value =  {reviewData.location_rating}
                      onChange={(e) => setReviewData((prvData) => {
                        return {...prvData , location_rating: e.target.value }
                      })}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <p className="text-xl font-[600] tracking-wider">
                  Rate our wifi
                </p>
                <div className="input-group mb-0">
                  <input
                    type="number"
                    style={inputStyle}
                    className="form-control"
                    id="Staff rating"
                    placeholder="Wifi rating"
                    aria-label="Staff rating"
                    aria-describedby="basic-addon1"
                    value={reviewData.wifi_rating}
                    onChange={(e) => { setReviewData((prevData) => ({...prevData, wifi_rating: e.target.value}))}}
                  />
                </div>
              </Row>
              <div className="w-full h-[200px] mb-2">
                <label htmlFor="review" className="text-2xl font-[600] mb-2">
                  Enter Your Review
                </label>
                <div className="w-full h-[150px] border-[1px] border-slate-400 mb-3">
                  <textarea
                    name="review"
                    id="review"
                    placeholder="Write your review here.."
                    className="w-full h-full outline-none border-none bg-[#f3f5f8] p-1"
                    value={reviewData.review}
                    onChange={(e) => { setReviewData((prevData) => ({...prevData, review: e.target.value}))}}
                  ></textarea>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">
                  Multiple files input
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              className="text-[#fff] font-[700] text-xl tracking-wider"
            >
              Close
            </Button>
            <Button
              onClick={handleSubmitReview}
              className="text-[#fff] font-[700] text-xl tracking-wider"
            >
              Submit Review
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div className="flex flex-row justify-between items-start border-b-[1px] border-slate-400 py-3">
        <div className="flex flex-row justify-start items-start">
          <div className="w-[40px] h-[40px] text-[#fff] bg-[#129035] my-0 font-[700] text-center py-2 rounded-lg">
            8.7
          </div>
          <div className="mx-2 mt-[2px]">
            <h5 className="mb-0 text-sm font-[700]">Excellent</h5>
            <p className="mb-0 text-[12px] font-[400] leading-3">
              2,566 <span>review</span>
            </p>
          </div>
          <div className="my-2 text-sm mx-4 text-[#129035] hidden md:block">
            We aim for 100% real review
          </div>
        </div>
        <div>
          <button
            className="w-[120px] h-[40px]  bg-transparent text-sm font-[600]  text-[#129035] border-[1px] border-[#129035] rounded-sm"
            onClick={handleShow}
          >
            Write a review
          </button>
        </div>
      </div>
      <div className="py-4 border-b-[1px] border-slate-700">
        <p className="text-[16px] font-[700]">Categories:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                Staff
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                facilities
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                cleaniness
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                comfort
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between  mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                Value for money
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                Location
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
          <div className="w-auto md:w-[300px]">
            <div className="flex flex-row justify-between mb-2">
              <p className="mb-0 text-[16px] font-[500] tracking-wider">
                Free wifi
              </p>
              <p className="mb-0 text-[16px] font-[500] tracking-wider">8.9</p>
            </div>
            <ProgressBar now={now} striped variant="danger" />
          </div>
        </div>
      </div>
      <div className="py-3">
        <GuestReview />
      </div>
    </div>
  );
}

export default HotelReviews;
