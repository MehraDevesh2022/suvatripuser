import React from 'react'
import { FaArrowsAltH } from "react-icons/fa";

function Mobilefilter() {
    return (
        <div>
            <div className='w-full px-1 py-5 z--10'>
                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Select Filters</h3>
                    <div className='px-3'>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Last Minute Deal
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                5 Star
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                North Nepal
                            </label>
                        </div>
                        <div className="form-check  mb-3" >
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                South Nepal
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Couple Friendly
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Price Per Night</h3>
                    <div className='px-3'>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                NPR 0 - 1500
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                NPR 1500 - 2500
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                NPR 2500 - 3500
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                NPR 3500 - 4500
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                NPR 4500+
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Star Rating</h3>
                    <div className='px-3'>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                5 Star
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                4 Star
                            </label>
                        </div>
                        <div className="form-check  mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                3 Star
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                2 Star
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                1 Star
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-2'>Your Budget</h3>
                    <div className='flex flex-row justify-center items-center p-2 mb-3'>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Minimum" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <span className='text-[25px] font-[600] px-1'><FaArrowsAltH className='inline' /></span>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Maximum" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                    </div>
                </div>
                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Property Type</h3>
                    <div className='px-3'>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Hotel
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Apartment
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Villa
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Homestay
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Resort
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Guest house
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Hostel
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Camp
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Tree house
                            </label>
                        </div>
                    </div>
                </div>
                {/* Guest rating */}
                <div>
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
                </div>
                {/* Facilities */}
                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Facilities</h3>
                    <div className='px-3'>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Free Wifi
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                No Smoking Room
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Free Airport pick-up
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Free Airport pick-drop
                            </label>
                        </div>
                    </div>
                </div>
                {/* Facilities-2 */}

                <div>
                    <h3 className='text-[20px] text-slate-700 font-[700] px-3 py-2 mb-3'>Facilities</h3>
                    <div className='px-3'>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="Last Minute Deal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Free Breakfast
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="5 Star" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Free lunch
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                All meals
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value=" North Nepal" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                No meals
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobilefilter
