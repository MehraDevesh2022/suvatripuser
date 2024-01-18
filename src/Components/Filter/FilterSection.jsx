  import React, { useState, useEffect } from "react";
import FilterHeader from "./FilterHeader";
import FilterCard from "./FilterCard";
import FilterMap from "./FilterMap";
import { FaArrowsAltH } from "react-icons/fa";
import { useAppContext } from "../../context/store";
import { FaStar } from "react-icons/fa6";

function FilterSection() {
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [starColors, setStarColors] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

  const { state, actions } = useAppContext();
  const allHotels = state.hotel;
  const [filteredHotels, setFilteredHotels] = useState(allHotels);

  const [selectedFilters, setSelectedFilters] = useState({
    starRating: [],
    priceRange: [],
    propertyType: [],
    facilities: [],
  });

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
      updatedHotels = updatedHotels.filter((hotel) =>
        hotel.facilities &&
        filters.facilities.every((facility) =>
          hotel.facilities.some((f) =>
            (f.accommodation && f.accommodation.includes(facility)) ||
            (f.recreation && f.recreation.includes(facility))
          )
        )
      );
    }
  
    if (minBudget !== "" && maxBudget !== "") {
      updatedHotels = updatedHotels.filter((hotel) =>
        hotel.rooms &&
        hotel.rooms[0] &&
        hotel.rooms[0].weekdayPrice &&
        parseInt(hotel.rooms[0].weekdayPrice) >= parseInt(minBudget) &&
        parseInt(hotel.rooms[0].weekdayPrice) <= parseInt(maxBudget)
      );
    } else if (minBudget !== "") {
      updatedHotels = updatedHotels.filter((hotel) =>
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
    console.log("filters", filteredHotels);
  }, [filters, minBudget, maxBudget]);

  const handleMinBudgetChange = (e) => {
    setMinBudget(e.target.value);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(e.target.value);
  };

  const handleBudgetFilter = () => {
    applyFilters();
  };

  return (
    <div>
      <FilterHeader />
      <div className="w-full xl:w-[1100px] mx-auto flex flex-row justify-between">
        <div className="hidden xl:block">
          <div>
            <FilterMap />
          </div>
          <div className="w-[250px] h-[900px] bg-[#fff] shadow-md py-2 rounded-lg mt-4 overflow-y-auto scrollbar-custom">
            <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Price Per Night
              </h3>
              <div className="px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Last Minute Deal"
                    id="flexCheckDefault"
                    onChange={() =>
                      handleCheckboxChange("priceRange", "NPR 0 - 1500")
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    NPR 0 - 1500
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="5 Star"
                    id="flexCheckDefault"
                    onChange={() =>
                      handleCheckboxChange("priceRange", "NPR 1500 - 2500")
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    NPR 1500 - 2500
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefault"
                    onChange={() =>
                      handleCheckboxChange("priceRange", "NPR 2500 - 3500")
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    NPR 2500 - 3500
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefault"
                    onChange={() =>
                      handleCheckboxChange("priceRange", "NPR 3500 - 4500")
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    NPR 3500 - 4500
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefault"
                    onChange={() =>
                      handleCheckboxChange("priceRange", "NPR 4500+")
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    NPR 4500+
                  </label>
                </div>
              </div>
            </div>
            <div>
              {/* Star rating */}
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Star Rating
              </h3>
              <div className="px-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={`${rating} Star`}
                      id={`flexCheckDefault${rating}`}
                      onChange={() =>
                        handleCheckboxChange("starRating", `${rating}`)
                      }
                    />
                    <label
                      className="form-check-label flex flex-row items-center"
                      htmlFor={`flexCheckDefault${rating}`}
                    >
                      <span>
                        <FaStar
                          className={`${
                            starColors[rating]
                              ? "text-[#FDCC0D]"
                              : "text-[#ccc]"
                          } font-[700]`}
                        />
                      </span>
                      <span className="ml-2 font-[400] text-slate-800">
                        {rating} Star
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              
            </div>
            <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Your Budget
              </h3>
              <div className="flex flex-row justify-center items-center p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Min"
                    aria-label="Min Budget"
                    aria-describedby="basic-addon1"
                    value={minBudget}
                    onChange={handleMinBudgetChange}
                  />
                </div>
                <span className="text-[20px] font-[600] px-1">
                  <FaArrowsAltH className="inline" />
                </span>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Max"
                    aria-label="Max Budget"
                    aria-describedby="basic-addon1"
                    value={maxBudget}
                    onChange={handleMaxBudgetChange}
                  />
                </div>
                <button
                  onClick={handleBudgetFilter}
                  className="bg-slate-500 p-2 rounded-md ml-2 text-sm text-slate-100"
                >
                  Apply
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Property Type
              </h3>
              <div className="px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hotel"
                    id="flexCheckDefaultHotel"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Hotel")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultHotel"
                  >
                    Hotel
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="5 Star"
                    id="flexCheckDefaulxt"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Apartment")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaulxt"
                  >
                    Apartment
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultz"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Villa")
                    }
                  />
                  <label className="form-check-label" for="flexCheckDefaultz">
                    Villa
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultzz"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Homestay")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultzz"
                  >
                    Homestay
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultzzq"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Resort")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultzzq"
                  >
                    Resort
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultzza"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Guest house")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaulzza"
                  >
                    Guest house
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultxxx"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Hostel")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultxxx"
                  >
                    Hostel
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultqq"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Camp")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultqq"
                  >
                    Camp
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefaultww"
                    onChange={() =>
                      handleCheckboxChange("propertyType", "Tree house")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultww"
                  >
                    Tree house
                  </label>
                </div>
              </div>
            </div>
            {/* Guest rating */}
            {/* <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Guest Rating
              </h3>
              <div className="px-3">
                {["Excellent", "Very Good", "Good", "No Rating"].map(
                  (data, rating) => (
                    <div key={rating} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={data}
                        id={`flexCheckDefault${data}`}
                        onChange={() =>
                          handleCheckboxChange("starRating", data)
                        }
                        checked={gueststarColors[data]}
                      />
                      <label
                        className="form-check-label flex flex-row items-center"
                        htmlFor={`flexCheckDefault${data}`}
                      >
                        <span>
                          <FaStar
                            className={`text-${
                              gueststarColors[data] ? "[#FDCC0D]" : "[#ccc]"
                            } font-[700]`}
                          />
                        </span>
                        <span className="ml-2 font-[400] text-slate-800">
                          {data}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>

       
            </div> */}
            {/* Facilities */}
            <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Facilities
              </h3>
              <div className="px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Free Wifi"
                    id="flexCheckDefaultee"
                    onChange={() =>
                      handleCheckboxChange("facilities", "Free Wifi")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultee"
                  >
                    Free Wifi
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="No Smoking Room"
                    id="flexCheckDefaulttt"
                    onChange={() =>
                      handleCheckboxChange("facilities", "No smoking rooms")
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaulttt"
                  >
                    No Smoking Room
                  </label>
                </div>
                <div className="form-check">
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
            {/* Facilities-2 */}

           
          </div>
        </div>
        <div className="w-full xl:w-[850px] px-2">
          <FilterCard  filteredHotels ={filteredHotels} />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
