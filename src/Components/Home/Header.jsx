import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

function Header() {
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adlut: 2,
        room: 1
    })
    const [showCalender, setShowCalender] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const handleCalender = () => {
        setShowCalender(true)
        setOpenOptions(false)
    }
    const hideCalender = () => {
        setShowCalender(false)
        setOpenOptions(true)
    }
    const completeOff = () => {
        setShowCalender(false)
        setOpenOptions(false)
    }
    const formatStartDate = format(date[0].startDate, 'dd.MMM');
    const formatEndDate = format(date[0].endDate, "dd.MMM")
    const customStyle = {
        fontSize: '30px', // Adjust the font size as needed
        fontWeight: 'bold',
        // Add other styles as needed
    };

    const formatDateWithDayName = (dateObject) => {
        const options = { weekday: 'long' };
        return dateObject.toLocaleDateString('en-US', options);
    };
    const currentDay = formatDateWithDayName(date[0].startDate)
    const lastDay = formatDateWithDayName(date[0].endDate)

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === 'i' ? prev[name] + 1 : Math.max(0, prev[name] - 1),
        }));
    };

    return (
        <div className='pt-5 bg-[#feefef]'>
            <div className='w-full md:w-[700px] mx-auto text-center'>
                <h4 className='uppercase font-[700] tracking-wide'><span className='text-[30px]'>Fetching the best</span> <br /> <span className='text-[55px] tracking-wide text-[#e3292d]'>offfer for you</span></h4>
            </div>
            <div className='hidden md:w-[1100px] md:block  mx-auto bg-[#fff] py-4 px-2 rounded-[15px] border-l-2 border-r-2 border-b-[10px] border-[#129035] relative'>
                <>
                    <div>
                        <div className='flex flex-row justify-start items-center p-4'>
                            <div className=' bg-[#f2f5f8] w-[300px] p-3 cursor-pointer rounded-lg' onClick={completeOff}>
                                <Form>
                                    <p className='bg-[#fff]  text-[#f62c31] w-[150px] text-center py-[2px] rounded-lg'>City, Area, Hotel</p>
                                    <input
                                        type="email"
                                        className="form-control w-full bg-transparent font-weight-bold text-xl"
                                        id="floatingInputValue"
                                        style={customStyle}
                                        placeholder='Durban'
                                    />
                                </Form>
                                <p className='mt-1 ml-[1px]'>South Africa</p>
                            </div>
                            <div className='relative flex flex-row justify-start items-center'>
                                <div className=' bg-[#f2f5f8] w-[180px] p-3 ml-6 rounded-lg'>
                                    <p className='bg-[#fff] w-[100px] text-[#f62c31] text-center py-[2px] rounded-lg'>Check-In</p>
                                    <Form onClick={handleCalender}>
                                        <input type="text" style={customStyle} className="form-control bg-transparent" id="floatingInputValue" placeholder="check-In" value={formatStartDate} />
                                        <p className='mt-1 ml-[1px]'>{currentDay}</p>
                                    </Form>
                                </div>
                                <div className='bg-[#f2f5f8] w-[180px] p-3 mx-1 rounded-lg'>
                                    <p className='bg-[#fff] w-[100px] text-[#f62c31] text-center py-[2px] rounded-lg'>Check-Out</p>
                                    <Form onClick={handleCalender}>
                                        <input type="text" style={customStyle} className="form-control bg-transparent" id="floatingInputValue" placeholder="check-out" value={formatEndDate} />
                                        <p className='mt-1 ml-[1px]'>{lastDay}</p>
                                    </Form>
                                </div>
                                {
                                    showCalender ?
                                        <div className='absolute top-[150px] left-9 z-10'>
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={item => setDate([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}

                                            />
                                        </div> : ""
                                }

                            </div>

                            <div className='relative'>
                                <div className='bg-[#f2f5f8] px-4 w-[350px] h-[180px] py-3 ml-6 cursor-pointer rounded-lg' onClick={hideCalender}>
                                    <p className='bg-[#fff] text-[#f62c31] w-[150px] text-center py-[2px] rounded-lg'>Room and Guest</p>
                                    <div className='mt-4'>
                                        <h3 className='leading-10'><span className='text-[50px] font-[500]'>{options.room}</span> Room <span className='text-[50px] font-[500]'>{options.adlut}</span> Adluts</h3>
                                    </div>
                                    <p>{currentDay}</p>
                                </div>
                                {
                                    openOptions ?
                                        <div className='absolute bg-[#f2f5f8]  left-11'>
                                            <div className='border-[2px] flex flex-row justify-between items-center p-1'>
                                                <div className='w-[150px] text-[20px]'>Room</div>
                                                <div className='border-1 text-[30px] font-[600] px-3 cursor-pointer' onClick={() => { handleOption('room', 'd') }}>-</div>
                                                <div className=' text-[30px] px-3'>{options.room}</div>
                                                <div className='border-1 text-[30px] font-[600] px-3 cursor-pointer'
                                                    onClick={() => { handleOption('room', 'i') }}>+</div>
                                            </div>
                                            <div className='border-[2px] flex flex-row justify-between items-center p-1'>
                                                <div className='w-[150px] text-[20px]'>Adlut</div>
                                                <div className='border-1 text-[30px] font-[600] px-3 cursor-pointer'
                                                    onClick={() => { handleOption('adlut', 'd') }}>-</div>
                                                <div className=' text-[30px] px-3'>{options.adlut}</div>
                                                <div className='border-1 text-[30px] font-[600] px-3 cursor-pointer'
                                                    onClick={() => { handleOption('adlut', 'i') }}>+</div>
                                            </div>

                                        </div>
                                        : ""
                                }
                            </div>
                        </div>
                    </div>

                </>
                <div className='w-[150px] absolute bottom-[-24px] left-[450px]'>
                    <button className='bg-[#129035] w-full py-2 font-[600] text-[20px] text-slate-100 rounded-[20px] z-0'>Search</button>
                </div>
            </div>


        </div >
    )
}

export default Header
