import React, { useState, useEffect } from "react";
import GuestReview from "./GuestReview";
import ProgressBar from "react-bootstrap/ProgressBar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppContext } from "../../context/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import Starrating from "./Starrating";
function HotelReviews() {

  const inputStyle = {
    backgroundColor: "#f3f5f8",
  };

  const [show, setShow] = useState(false);
  const [review_id , setReview_id] = useState("")

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [editReview, setEditReview] = useState(false);
  const [reviewData, setReviewData] = useState({
    staff_rating: 4,
    facilities_rating: 4,
    cleanliness_rating: 4,
    comfort_rating: 4,
    money_rating: 4,
    location_rating: 4,
    wifi_rating: 4,
    highlight: "",
    review: "",
    images: [],
  });
  const { state, actions } = useAppContext();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (
      JSON.parse(localStorage.getItem("isLoggedIn")) &&
      localStorage.getItem("token") &&
      state.isLoggedIn
    ) {
      setShow(true);
    } else {
      alert("Please login to write a review");
    }
  };
  const handleEditShow = (idReview ) => {
    setEditReview(true);
    setReview_id(idReview)

    if (
      JSON.parse(localStorage.getItem("isLoggedIn")) &&
      localStorage.getItem("token") &&
      state.isLoggedIn
    ) {
      setShow(true);
    } else {
      alert("Please login to write a review");
    }
  };

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
            const fieldName = `reviewImage${index + 1}`;
            formData.append(fieldName, file);
          });
        } else {
          formData.append(key, value);
        }
      });

      formData.append("hotel_id", state?.hotelDetails?._id);
      formData.append("user_id", state.profileData?._id);
      formData.append("username", state.profileData?.username);
      const response = await fetch("http://localhost:8000/review", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success === false) {
        toast.error(data.message);
      }

      if (response.ok) {
        toast.success("Review submitted updated");
        setReviewData({
          staff_rating: 0,
          facilities_rating: 0,
          cleanliness_rating: 0,
          comfort_rating: 0,
          money_rating: 0,
          location_rating: 0,
          wifi_rating: 0,
          review: "",
          highlight: "",
          images: [],
        });
        handleClose();
        setEditReview(false)
      } else {
        toast.error("Failed to update review");
        setEditReview(false)
      }
    } catch (error) {
      toast.error(error.message);
      setEditReview(false)
      console.error("Error:", error);
    }
  };
  const handleEditSubmitReview = async () => {
    try {
      const formData = new FormData();

      Object.entries(reviewData).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file, index) => {
            const fieldName = `reviewImage${index + 1}`;
            formData.append(fieldName, file);
            // console.log(`${fieldName}:`, file);
          });
        } else {
          formData.append(key, value);
          // console.log(`${key}:`, value);
        }
      });

      // formData.forEach((value, key) => {
      //   console.log(`${key}: ${value}`);
      // });

      formData.append("hotel_id", state?.hotelDetails?._id);
      formData.append("user_id", state.profileData?._id);
      formData.append("username", state.profileData?.username);
      const response = await fetch(`http://localhost:8000/review/reviews/${review_id}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success === false) {
        toast.error(data.message);
      }

      if (response.ok) {
        toast.success("Review submitted successfully");
        setReviewData({
          staff_rating: 0,
          facilities_rating: 0,
          cleanliness_rating: 0,
          comfort_rating: 0,
          money_rating: 0,
          location_rating: 0,
          wifi_rating: 0,
          review: "",
          highlight: "",
          images: [],
        });

        handleClose();
      } else {
        toast.error("Failed to submit review");
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error:", error);
    }
  };

  const now = 89;

  // getAll reviews

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:8000/review/${state?.hotelDetails?._id}`
        );
        const data = await response.json();
        if (response.ok) {
          setReviews(data.data);

          toast.success("Reviews fetched successfully");
          setLoading(false);
        } else {
          toast.error("Failed to fetch reviews");
          setReviews([]);
          setLoading(false);
        }
      } catch (error) {
        toast.error(error.message);
        console.error("Error:", error);
        setReviews([]);
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  const maxHighlightLength = 70;

  const handleHighlightChange = (e) => {
    const inputText = e.target.value;

    if (inputText.length <= maxHighlightLength) {
      setReviewData((prevData) => ({
        ...prevData,
        highlight: inputText,
      }));
    }
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="w-full  bg-[#fff] my-3 px-4">
            {/* Review model */}
            <>
              <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                animation={true}
              >
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
                          <Starrating
                            rating={reviewData.staff_rating}
                            onChange={(rating) => {
                              setReviewData((prevData) => ({
                                ...prevData,
                                staff_rating: rating,
                              }));
                            }}
                          />
                          {/* <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="Staff rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value={reviewData.staff_rating}
                      onChange={(e) => {
                        setReviewData((prevData) => ({
                          ...prevData,
                          staff_rating: e.target.value,
                        }));
                      }}
                    /> */}
                        </div>
                      </Col>
                      <Col>
                        <p className="text-xl font-[600] tracking-wider">
                          Rate our facilities
                        </p>
                        <div className="input-group mb-0">
                          <Starrating
                            rating={reviewData.facilities_rating}
                            onChange={(rating) => {
                              setReviewData((prevData) => ({
                                ...prevData,
                                facilities_rating: rating,
                              }));
                            }}
                          />

                          {/* <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="facilities rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value={reviewData.facilities_rating}
                      onChange={(e) => {
                        setReviewData((prevData) => ({
                          ...prevData,
                          facilities_rating: e.target.value,
                        }));
                      }}
                    /> */}
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <p className="text-xl font-[600] tracking-wider">
                          Rate our cleaniness
                        </p>
                        <div className="input-group mb-0">
                          <Starrating
                            rating={reviewData.cleanliness_rating}
                            onChange={(rating) => {
                              setReviewData((prevData) => ({
                                ...prevData,
                                cleanliness_rating: rating,
                              }));
                            }}
                          />

                          {/* <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="cleaniness rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value={reviewData.cleanliness_rating}
                      onChange={(e) => {
                        setReviewData((prevData) => ({
                          ...prevData,
                          cleanliness_rating: e.target.value,
                        }));
                      }}
                    /> */}
                        </div>
                      </Col>
                      <Col>
                        <p className="text-xl font-[600] tracking-wider">
                          Rate our comfort
                        </p>
                        <div className="input-group mb-0">
                          <Starrating
                            rating={reviewData.comfort_rating}
                            onChange={(rating) => {
                              setReviewData((prevData) => ({
                                ...prevData,
                                comfort_rating: rating,
                              }));
                            }}
                          />

                          {/* <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="comfort rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value={reviewData.comfort_rating}
                      onChange={(e) => {
                        setReviewData((prevData) => ({
                          ...prevData,
                          comfort_rating: e.target.value,
                        }));
                      }}
                    /> */}
                          {/* <Starrating /> */}
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <p className="text-xl font-[600] tracking-wider">
                          Value for money
                        </p>
                        <div className="input-group mb-0">
                          {/* <input
                      type="number"
                      style={inputStyle}
                      className="form-control bg-[#f3f5f8]"
                      id="Staff rating"
                      placeholder="Money rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value={reviewData.money_rating}
                      onChange={(e) => {
                        setReviewData((prevData) => ({
                          ...prevData,
                          money_rating: e.target.value,
                        }));
                      }}
                    /> */}

                          <Starrating
                            rating={reviewData.money_rating}
                            onChange={(rating) => {
                              setReviewData((prevData) => ({
                                ...prevData,
                                money_rating: rating,
                              }));
                            }}
                          />
                        </div>
                      </Col>
                      <Col>
                        <p className="text-xl font-[600] tracking-wider">
                          Rate our Location
                        </p>
                        <div className="input-group mb-0">
                          {/* <input
                      type="number"
                      style={inputStyle}
                      className="form-control"
                      id="Staff rating"
                      placeholder="Location rating"
                      aria-label="Staff rating"
                      aria-describedby="basic-addon1"
                      value={reviewData.location_rating}
                      onChange={(e) =>
                        setReviewData((prvData) => {
                          return {
                            ...prvData,
                            location_rating: e.target.value,
                          };
                        })
                      }
                    /> */}

                          <Starrating
                            rating={reviewData.location_rating}
                            onChange={(rating) => {
                              setReviewData((prevData) => ({
                                ...prevData,
                                location_rating: rating,
                              }));
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <p className="text-xl font-[600] tracking-wider">
                        Rate our wifi
                      </p>
                      <div className="input-group mb-0">
                        {/* <input
                    type="number"
                    style={inputStyle}
                    className="form-control"
                    id="Staff rating"
                    placeholder="Wifi rating"
                    aria-label="Staff rating"
                    aria-describedby="basic-addon1"
                    value={reviewData.wifi_rating}
                    onChange={(e) => {
                      setReviewData((prevData) => ({
                        ...prevData,
                        wifi_rating: e.target.value,
                      }));
                    }}
                  /> */}

                        <Starrating
                          rating={reviewData.wifi_rating}
                          onChange={(rating) => {
                            setReviewData((prevData) => ({
                              ...prevData,
                              wifi_rating: rating,
                            }));
                          }}
                        />
                      </div>
                    </Row>
                    <div className="w-full h-[200px] mb-2">
                      <label
                        htmlFor="highlight"
                        className="text-2xl font-[600] mb-2"
                      >
                        Enter Your highlight
                      </label>
                      <div className="w-full h-[150px] border-[1px] border-slate-400 mb-3">
                        <textarea
                          name="highlight"
                          id="highlight"
                          placeholder="Write your highlight here.."
                          className="w-full h-full outline-none border-none bg-[#f3f5f8] p-1 text-sm"
                          value={reviewData.highlight}
                          onChange={handleHighlightChange}
                          maxLength={maxHighlightLength}
                        ></textarea>
                        <div
                          className="text-right text-[12px] text-slate-600"
                          style={{
                            color:
                              maxHighlightLength - reviewData.highlight.length <
                              0
                                ? "red"
                                : "black",
                          }}
                        >
                          {maxHighlightLength - reviewData.highlight.length}{" "}
                          characters remaining
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[200px] mb-2">
                      <label
                        htmlFor="review"
                        className="text-2xl font-[600] mb-2"
                      >
                        Enter Your Review
                      </label>
                      <div className="w-full h-[150px] border-[1px] border-slate-400 mb-3">
                        <textarea
                          name="review"
                          id="review"
                          placeholder="Write your review here.."
                          className="w-full h-full outline-none border-none bg-[#f3f5f8] p-1"
                          value={reviewData.review}
                          onChange={(e) => {
                            setReviewData((prevData) => ({
                              ...prevData,
                              review: e.target.value,
                            }));
                          }}
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
                    onClick={
                      editReview ? handleEditSubmitReview : handleSubmitReview
                    }
                    className="text-[#fff] font-[700] text-xl tracking-wider"
                  >
                    Submit Review
                  </Button>
                </Modal.Footer>
              </Modal>
            </>

            <>
              <div>
                <div className="flex flex-row justify-between items-start border-b-[1px] border-slate-400 py-3">
                  <div className="flex flex-row justify-start items-start">
                    <div className="w-[40px] h-[40px] text-[#fff] bg-[#129035] my-0 font-[700] text-center py-2 rounded-lg">
                      {reviews && reviews?.totalAvgRating}
                    </div>
                    <div className="mx-2 mt-[2px]">
                      <h5 className="mb-0 text-sm font-[700]">
                        {reviews &&
                        reviews?.reviews &&
                        reviews?.reviews?.length > 0
                          ? "Excelent"
                          : "No Review Yet"}
                      </h5>
                      <p className="mb-0 text-[12px] font-[400] leading-3">
                        {reviews?.length > 0
                          ? reviews?.reviews && reviews?.reviews?.length
                          : "0"}{" "}
                        <span>review</span>
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
                {reviews?.length !== 0 && (
                  <>
                    <div className="py-4 border-b-[1px] border-slate-700">
                      <p className="text-[16px] font-[700]">Categories:</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              Staff
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[0]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              facilities
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[1]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              cleaniness
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[2]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              comfort
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[3]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between  mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              Value for money
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[4]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              Location
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[5]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                        <div className="w-auto md:w-[300px]">
                          <div className="flex flex-row justify-between mb-2">
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              Free wifi
                            </p>
                            <p className="mb-0 text-[16px] font-[500] tracking-wider">
                              {reviews && reviews?.averageRatings[6]?.rating}
                            </p>
                          </div>
                          <ProgressBar now={now} striped variant="danger" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="py-3">
                  {reviews?.reviews &&
                    reviews?.reviews?.map((review) => (
                      <GuestReview
                        review={review}
                        key={review._id}
                        handleShow={handleEditShow}
                      />
                    ))}
                </div>
              </div>
            </>
          </div>
        </>
      )}
    </>
  );
}

export default HotelReviews;
