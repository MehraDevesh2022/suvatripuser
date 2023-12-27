import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ViewImg from "../../Assets/img/simple.png";
import config from "../../config";
function Section() {
  const [specialData, setSpecialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialData = async () => {
      try {
        const token = localStorage.getItem("token");

        const headers = {
          Authorization: token ? `Bearer ${token}}` : undefined,
          My_Secret: config.MY_SECRET,
        };

        const response = await axios.get(
          "http://localhost:8000/hotel/get-all-hotels",
          {
            headers,
          }
        );

        if (response.data.isHotelAccess) {
          // while user were not logged in
          setSpecialData(response.data.data);
          setIsLoading(false);
        } else {
          setSpecialData(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching special data:", error);
        // Handle error as needed
      }
    };

    fetchSpecialData();
  }, []);

  const obj = [
    {
      Header: "The Header",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      img: ViewImg,
    },
    {
      Header: "The Header",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      img: ViewImg,
    },
    {
      Header: "The Header",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      img: ViewImg,
    },
  ];

  return (
    <div>
      <div className="w-full md:w-[1050px] bg-[#fff] shadow-md mx-auto p-3 mt-5 rounded-md">
        <section className="flex flex-col md:flex-row items-center p-2">
          <div className="w-full md:w-[300px] bg-[#fff] shadow-md  border-[1px] border-slate-100 p-3 rounded-md">
            <p className="leading-3 bg-slate-700 w-[100px] p-2  rounded-md text-slate-200">
              Introducing
            </p>
            <h2 className="text-[30px] text-[#f62c31] font-[700] tracking-wider uppercase leading-8 ">
              Suva Trip <br /> Special
            </h2>
            <p className="leading-5 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              consectetur mollitia{" "}
            </p>
            <Button>Know more</Button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-[650px] mx-auto  p-0">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              specialData.slice(0, 3).map((data, index) => {
                return (
                  <div
                    key={index}
                    className="w-full md:w-[250px] mx-1 my-1 md:my-0 shadow-md border-[1px] rounded-md"
                  >
                    <div className="w-full md:w-[210px] h-[130px]">
                      <img
                        src={data.img || ViewImg}
                        alt="viewImages"
                        className="w-full h-full rounded-tl-md rounded-tr-md"
                      />
                    </div>
                    <div className="w-full md:w-[210px]  px-1 pt-2 pb-[2px]">
                      <h3 className="leading-7  text-[25px]">
                        {data.Header || "Special Header"}
                      </h3>
                      <p className="text-[14px] leading-5">
                        {data.para || "Special Paragraph"}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section;

