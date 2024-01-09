import React, { useState, useEffect } from "react";
import FilterHeader from "./FilterHeader";
import FilterCard from "./FilterCard";
import FilterMap from "./FilterMap";
import { FaArrowsAltH } from "react-icons/fa";
import { useAppContext } from "../../context/store";

function FilterSection() {
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const { state, actions } = useAppContext();
  const hotels = state.hotel;

  const [selectedFilters, setSelectedFilters] = useState({
    starRating: [],
    priceRange: [],
    propertyType: [],
    facilities: [],
  });

  const fetchFilteredHotels = async (queryParams) => {
    try {
      const response = await fetch(
        `http://localhost:8000/hotel/get/filterd?${new URLSearchParams(queryParams)}`
      );
      const res = await response.json();

        actions.setHotel(res.data);
        console.log('Filtered hotels:', res);
    
    } catch (error) {
      console.error('Error fetching filtered hotels:', error);
    }
  };

  useEffect(() => {
    console.log('Hotels updated:', hotels);
  }, [state.hotel , hotels]);

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = { ...selectedFilters };

    const index = updatedFilters[filterType].indexOf(value);
    if (index === -1) {
      updatedFilters[filterType].push(value);
    } else {
      updatedFilters[filterType].splice(index, 1);
    }

    setSelectedFilters(updatedFilters);

    const queryParams = buildQueryParams(updatedFilters);
    fetchFilteredHotels(queryParams);
  };

  const handleMinBudgetChange = (e) => {
    setMinBudget(e.target.value);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(e.target.value);
  };

  const handleBudgetFilter = () => {
    const queryParams = buildQueryParams(selectedFilters);
    if (minBudget) {
      queryParams['minBudget'] = parseInt(minBudget, 10);
    }
    if (maxBudget) {
      queryParams['maxBudget'] = parseInt(maxBudget, 10);
    }
    fetchFilteredHotels(queryParams);
  };

  const buildQueryParams = (filters) => {
    const queryParams = {};

    if (filters.starRating.length > 0) {
      queryParams.starRating = filters.starRating.join(',');
    }

    if (filters.propertyType.length > 0) {
      queryParams.propertyType = filters.propertyType.join(',');
    }

    if (filters.facilities.length > 0) {
      queryParams.facilities = filters.facilities.join(',');
    }

    if (filters.priceRange.length > 0) {
      queryParams.priceRange = filters.priceRange.join(',');
    }

    // Add other filter types as needed

    return queryParams;
  };

  return (
    <div>
      <FilterHeader />
      <div className="w-full md:w-[1100px] mx-auto flex flex-row justify-between">
        {/* larger screen filter */}
        <div className="hidden md:block">
          <div>
            <FilterMap />
          </div>
          <div className="w-[250px] h-[900px] bg-[#fff] shadow-md py-2 rounded-lg mt-4 overflow-y-auto scrollbar-custom">
            <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Select Filters
              </h3>
              <div className="px-3">
                {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Last Minute Deal
            </label>
          </div> */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="5 Star"
                    id="flexCheckDefault"
                    onChange={() => handleCheckboxChange("starRating", "5")}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    5 Star
                  </label>
                </div>
                {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              North Nepal
            </label>
          </div> */}
                {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              South Nepal
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Couple Friendly
            </label>
          </div> */}
              </div>
            </div>
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
                  <label className="form-check-label" for="flexCheckDefault">
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
                  <label className="form-check-label" for="flexCheckDefault">
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
                      handleCheckboxChange("priceRange", "NPR 0 - 1500")
                    }
                  />
                  <label className="form-check-label" for="flexCheckDefault">
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
                      handleCheckboxChange("priceRange", "NPR 0 - 1500")
                    }
                  />
                  <label className="form-check-label" for="flexCheckDefault">
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
                      handleCheckboxChange("priceRange", "NPR 0 - 1500")
                    }
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    NPR 4500+
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1">
                Star Rating
              </h3>
              <div className="px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="5 Star"
                    id="flexCheckDefault5"
                    onChange={() => handleCheckboxChange("starRating", "5")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault5"
                  >
                    5 Star
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="5 Star"
                    id="flexCheckDefault4"
                    onChange={() => handleCheckboxChange("starRating", "4")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault4"
                  >
                    4 Star
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefault3"
                    onChange={() => handleCheckboxChange("starRating", "3")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault3"
                  >
                    3 Star
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefault2"
                    onChange={() => handleCheckboxChange("starRating", "2")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    2 Star
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=" North Nepal"
                    id="flexCheckDefault1"
                    onChange={() => handleCheckboxChange("starRating", "1")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    1 Star
                  </label>
                </div>
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
                <span className="text-[25px] font-[600] px-1">
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
                <button onClick={handleBudgetFilter}>Apply</button>
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
        <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Guest Rating</h3>
        <div className='px-3'>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="5 Star"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Excellent
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=" North Nepal"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Very Good
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=" North Nepal"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Good
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=" North Nepal"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              No rating
            </label>
          </div>
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
                  <label
                    className="form-check-label"
                    htmlFor="  Free-parking"
                  >
                    Free parking
                  </label>
                </div>
            
            
              </div>
            </div>
            {/* Facilities-2 */}

            {/* <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Facilities</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Free Breakfast
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Free lunch
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        All meals
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        No meals
                                    </label>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="w-full md:w-[850px] px-2">
          <FilterCard />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
