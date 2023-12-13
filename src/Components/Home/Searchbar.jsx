import React, { useState, useEffect } from 'react'
import { DateRange, DateRangePicker } from 'react-date-range';
import Form from 'react-bootstrap/Form';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { TiPlus, TiMinus } from "react-icons/ti";


function Searchbar() {
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 2,
        room: 1,
        child: 0
    })
    const [showCalender, setShowCalender] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const formatStartDate = format(date[0].startDate, 'dd.MMM');
    const formatEndDate = format(date[0].endDate, "dd.MMM")
    const customStyle = {
        fontSize: '24px', // Adjust the font size as needed
        fontWeight: 'bold',
        // Add other styles as needed
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            const searchBarElement = document.getElementById('searchbar');

            if (searchBarElement && !searchBarElement.contains(event.target)) {
                setShowCalender(false);
                setOpenOptions(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [setShowCalender, setOpenOptions]);

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

    const handleCalender = () => {
        setShowCalender(true)
        setOpenOptions(false)
    }
    const hideCalender = () => {
        setShowCalender(false)
        setOpenOptions(true)
    }



    return (
        <div id='searchbar'>
            <div className='flex flex-col md:flex-row  justify-center md:justify-start items-center p-4'>
                <div className=' bg-[#f2f5f8] w-full md:w-[300px] p-3 cursor-pointer rounded-lg'>
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
                <div className='relative w-full md:w-[360px] my-2 md:my-0 flex flex-row justify-between md:justify-start items-center'>
                    <div className=' bg-[#f2f5f8] w-[180px] p-3 ml-0 md:ml-6 rounded-lg'>
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
                            <div className='absolute top-[150px] md: z-10'>
                                
                                <DateRangePicker
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    months={2}
                                    direction={window.innerWidth < 768 ? 'vertical' : 'horizontal'}
                                    rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']}
                                />
                            </div> : ""
                    }

                </div>

                <div className='relative my-2 md:my-0'>
                    <div className='bg-[#f2f5f8] px-4 w-full md:w-[350px] h-[160px] py-3 ml-0 md:ml-6 cursor-pointer rounded-lg' onClick={hideCalender}>
                        <p className='bg-[#fff] text-[#f62c31] w-[150px] text-center py-[2px] rounded-lg'>Room and Guest</p>
                        <div className='mt-4'>
                            <h3 className='leading-10'><span className='text-[40px] font-[500]'>{options.room}</span> Room <span className='text-[40px] font-[500]'>{options.adult}</span> Adluts</h3>
                        </div>
                        <p>{currentDay}</p>
                    </div>
                    {
                        openOptions ?
                            <div className='absolute bg-[#fff] left-[-20px] md:left-11 rounded-lg z-10'>
                                <div className='border-[2px] flex flex-row justify-between items-center p-1 rounded-tl-lg rounded-tr-lg'>
                                    <div className='w-[150px] text-[20px]'>Room</div>
                                    <div className='border-1 border-slate-400 text-[25px] font-[600] p-1 cursor-pointer rounded-full' onClick={() => { handleOption('room', 'd') }}>
                                        <TiMinus />
                                    </div>
                                    <div className=' text-[30px] px-3'>{options.room}</div>
                                    <div className='border-1 border-slate-400 text-[25px] font-[600] p-1 cursor-pointer rounded-full'
                                        onClick={() => { handleOption('room', 'i') }}>
                                        <TiPlus />
                                    </div>
                                </div>
                                <div className='border-[2px] flex flex-row justify-between items-center p-1'>
                                    <div className='w-[150px] text-[20px]'>Adult <span className='text-slate-400 text-sm font-bold'>16 + Y</span></div>
                                    <div className='border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer'
                                        onClick={() => { handleOption('adult', 'd') }}>
                                        <TiMinus />
                                    </div>
                                    <div className=' text-[30px] px-3'>{options.adult}</div>
                                    <div className='border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer'
                                        onClick={() => { handleOption('adult', 'i') }}>
                                        <TiPlus />
                                    </div>
                                </div>
                                <div className='border-[2px] flex flex-row justify-between items-center p-1 rounded-bl-lg rounded-br-lg'>
                                    <div className='w-[150px] text-[20px]'>Child <span className='text-slate-400 text-sm font-bold'>Below 16Yr</span></div>
                                    <div className='border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer'
                                        onClick={() => { handleOption('child', 'd') }}>
                                        <TiMinus />
                                    </div>
                                    <div className=' text-[30px] px-3'>{options.child}</div>
                                    <div className='border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer'
                                        onClick={() => { handleOption('child', 'i') }}>
                                        <TiPlus />
                                    </div>
                                </div>

                            </div>
                            : ""
                    }
                </div>
            </div>

        </div>
    )
}

export default Searchbar
