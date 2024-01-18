import React, { useState, useEffect } from "react";

import FilterCard from "./FilterCard";

import { FaArrowsAltH } from "react-icons/fa";
import { useAppContext } from "../../context/store";


function Mobilefilter({ checkboxRef }) {
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const { state, actions } = useAppContext();
  const allHotels = state.hotel;
  const [filteredHotels, setFilteredHotels] = useState(allHotels);

  

  const [filters, setFilters] = useState({
    propertyType: [],
    facilities: [],
    starRating: [],
  });

  const applyFilters = () => {
    let updatedHotels = [...allHotels];

    if (filters.starRating.length > 0) {
      updatedHotels = updatedHotels.filter((hotel) =>
        filters.starRating.includes(hotel.rating.toString())
      );
    }

    if (filters.propertyType.length > 0) {
      updatedHotels = updatedHotels.filter((hotel) =>
        filters.propertyType.includes(hotel.propertyType)
      );
    }

    if (filters.facilities.length > 0) {
      updatedHotels = updatedHotels.filter(
        (hotel) =>
          hotel.facilities &&
          filters.facilities.every((facility) =>
            hotel.facilities.some(
              (f) =>
                (f.accommodation && f.accommodation.includes(facility)) ||
                (f.recreation && f.recreation.includes(facility))
            )
          )
      );
    }

    if (minBudget !== "" && maxBudget !== "") {
      updatedHotels = updatedHotels.filter(
        (hotel) =>
          hotel.rooms &&
          hotel.rooms[0] &&
          hotel.rooms[0].weekdayPrice &&
          parseInt(hotel.rooms[0].weekdayPrice) >= parseInt(minBudget) &&
          parseInt(hotel.rooms[0].weekdayPrice) <= parseInt(maxBudget)
      );
    } else if (minBudget !== "") {
      console.log("minBudget", minBudget);
      console.log("maxBudget", maxBudget);
      updatedHotels = updatedHotels.filter(
        (hotel) =>
          hotel.rooms &&
          hotel.rooms[0] &&
          hotel.rooms[0].weekdayPrice &&
          parseInt(hotel.rooms[0].weekdayPrice) >= parseInt(minBudget)
      );
    }

    setFilteredHotels(updatedHotels);
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentFilterType = prevFilters[filterType] || [];

      setMinBudget("");
      setMaxBudget("");

      if (value === "NPR 0 - 1500") {
        setMaxBudget("1500");
      } else if (value === "NPR 1500 - 2500") {
        setMinBudget("1500");
        setMaxBudget("2500");
      } else if (value === "NPR 2500 - 3500") {
        setMinBudget("2500");
        setMaxBudget("3500");
      } else if (value === "NPR 3500 - 4500") {
        setMinBudget("3500");
        setMaxBudget("4500");
      } else if (value === "NPR 4500+") {
        setMinBudget("4500");
        setMaxBudget("");
      }

      return {
        ...prevFilters,
        [filterType]: currentFilterType.includes(value)
          ? currentFilterType.filter((v) => v !== value)
          : [...currentFilterType, value],
      };
    });
  };

  useEffect(() => {
    applyFilters();
    // actions.setFilterData(filteredHotels);
    console.log("filters", filteredHotels);
  }, [filters, minBudget, maxBudget]);

  const handleMinBudgetChange = (e) => {
    setMinBudget(e.target.value);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(e.target.value);
  };



  return (
    <div className="py-4">
      <div className="w-full px-1  z--10">
        <div>
          <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3">
            Price Per Night
          </h3>
          <div className="px-3">
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Last Minute Deal"
                id="flexCheckDefault"
                ref={checkboxRef}
              />
              <label className="form-check-label" for="flexCheckDefault">
                NPR 0 - 1500
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="5 Star"
                id="flexCheckDefault"
                ref={checkboxRef}
                onChange={() =>
                  handleCheckboxChange("priceRange", "NPR 0 - 1500")
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                NPR 1500 - 2500
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefault"
                ref={checkboxRef}
                onChange={() =>
                  handleCheckboxChange("priceRange", "NPR 2500 - 3500")
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                NPR 2500 - 3500
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefault"
                ref={checkboxRef}
                onChange={() =>
                  handleCheckboxChange("priceRange", "NPR 3500 - 4500")
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                NPR 3500 - 4500
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefault"
                ref={checkboxRef}
                onChange={() => handleCheckboxChange("priceRange", "NPR 4500+")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                NPR 4500+
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3">
            Star Rating
          </h3>
          <div className="px-3">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Last Minute Deal"
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange("starRating", "5")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                5 Star
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="5 Star"
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange("starRating", "4")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                4 Star
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange("starRating", "3")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                3 Star
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange("starRating", "2")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                2 Star
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange("starRating", "1")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                1 Star
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-2">
            Your Budget
          </h3>
          <div className="flex flex-row justify-center items-center p-2 mb-3">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Minimum"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={minBudget}
                onChange={handleMinBudgetChange}
              />
            </div>
            <span className="text-[25px] font-[600] px-1">
              <FaArrowsAltH className="inline" />
            </span>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Maximum"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={maxBudget}
                onChange={handleMaxBudgetChange}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3">
            Property Type
          </h3>
          <div className="px-3">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Hotel"
                id="Hotel"
                onChange={() => handleCheckboxChange("propertyType", "Hotel")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Hotel
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="5 Star"
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange("propertyType", "Hotel")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Apartment
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Villa"
                id="Villa"
                onChange={() =>
                  handleCheckboxChange("propertyType", "Apartment")
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                Villa
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" Homestay"
                id="Homestay"
                onChange={() => handleCheckboxChange("propertyType", "Villa")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Homestay
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" Resort"
                id="Resort"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Resort
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value={["Guest house"]}
                id="Guest house"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Guest house
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Hostel"
                id="Hostel"
                onChange={() => handleCheckboxChange("propertyType", "Hostel")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Hostel
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefaultqq"
                onChange={() => handleCheckboxChange("propertyType", "Camp")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Camp
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=" North Nepal"
                id="flexCheckDefaultww"
                onChange={() =>
                  handleCheckboxChange("propertyType", "Tree house")
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                Tree house
              </label>
            </div>
          </div>
        </div>
        {/* Guest rating */}
        {/* <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Guest Rating</h3>
                    <div className='px-3'>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Excellent
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Very Good
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Good
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                No rating
                            </label>
                        </div>
                    </div>
                </div> */}
        {/* Facilities */}
        <div>
          <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3">
            Facilities
          </h3>
          <div className="px-3">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Free Wifi"
                id="flexCheckDefaultee"
                onChange={() => handleCheckboxChange("facilities", "Free Wifi")}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Free Wifi
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefaulttt"
                onChange={() =>
                  handleCheckboxChange("facilities", "No smoking rooms")
                }
              />
              <label className="form-check-label" for="flexCheckDefault">
                No Smoking Room
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="Free parking"
                id="  Free-parking"
                onChange={() =>
                  handleCheckboxChange("facilities", "Free parking")
                }
              />
              <label className="form-check-label" htmlFor="  Free-parking">
                Free parking
              </label>
            </div>
          </div>
        </div>
      
      </div>
      <div className="w-full xl:w-[850px] px-2">
          <FilterCard  filteredHotels ={filteredHotels} />
        </div>
    </div>
  );
}

export default Mobilefilter;
