import React, { useState } from 'react'
import FilterHeader from './FilterHeader'
import FilterCard from './FilterCard'
import FilterMap from './FilterMap'
import { FaArrowsAltH } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import Mobilefilter from './Mobilefilter';
import { IoChevronBackSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { useAppContext } from '../../context/store';




function FilterSection() {
    const [showFilter, setShowFilter] = useState(false)
    const { state } = useAppContext();
    const hotels = state.hotel;
    const openMobileFliter = () => {
        setShowFilter(true)
    }
    const closeMobileFilter = () => {
        setShowFilter(false)
    }
    return (
        <div>
            <FilterHeader />
            <div className='w-full md:w-[1100px] mx-auto flex flex-row justify-between'>
                {/* larger screen filter */}
                <div className='hidden md:block'>
                    <div>
                        <FilterMap />
                    </div>
                    <div className='w-[250px] h-[900px] bg-[#fff] shadow-md py-2 rounded-lg mt-4 overflow-y-auto scrollbar-custom'>
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Select Filters</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Last Minute Deal
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        5 Star
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        North Nepal
                                    </label>
                                </div>
                                <div className="form-check">
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
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Price Per Night</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        NPR 0 - 1500
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        NPR 1500 - 2500
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        NPR 2500 - 3500
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        NPR 3500 - 4500
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        NPR 4500+
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Star Rating</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        5 Star
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        4 Star
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        3 Star
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        2 Star
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        1 Star
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Your Budget</h3>
                            <div className='flex flex-row justify-center items-center p-2'>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Min" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <span className='text-[25px] font-[600] px-1'><FaArrowsAltH className='inline' /></span>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Max" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                            </div>
                        </div>
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Property Type</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Hotel
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Apartment
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Villa
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Homestay
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Resort
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Guest house
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Hostel
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Camp
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Tree house
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Guest rating */}
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Guest Rating</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Excellent
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Very Good
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Good
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        No rating
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Facilities */}
                        <div>
                            <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-1'>Facilities</h3>
                            <div className='px-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Free Wifi
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        No Smoking Room
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Free Airport pick-up
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Free Airport pick-drop
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Facilities-2 */}

                        <div>
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
                        </div>



                    </div>
                </div>
                <div className='w-full md:w-[850px] px-2'>
                    <FilterCard />
                </div>
            </div>
        </div>
    )
}

export default FilterSection
