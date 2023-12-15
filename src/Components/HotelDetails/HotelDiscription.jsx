import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";



function HotelDiscription() {
    const starArray = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className='w-full h-auto bg-white my-3 rounded-lg'>
                <div className='p-4'>
                    <h3 className='text-[30px] font-[700] mb-0'>Description</h3>
                    <div>
                        <span><FaMapMarkerAlt className='inline mr-1' /></span>
                        <span className='text-[18px] text-slate-400'>Kathmandu</span>

                        {
                            starArray.map((item, index) => {
                                return (
                                    <FaStar key={index} className='inline ml-2 text-[#FFD250] font-[900]' />
                                )
                            })
                        }
                    </div>


                    <div className='py-2'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ratione, facilis eligendi porro, corporis aspernatur quae deserunt voluptas consectetur facere numquam veritatis temporibus! Vero tenetur quia voluptatum et quidem accusantium sit numquam odit sequi harum. Cum minima quis expedita, recusandae veritatis modi doloribus qui, ipsum voluptatibus illum ullam architecto molestias nulla maxime delectus quae culpa asperiores fuga praesentium corrupti? Quibusdam dolores facilis quisquam illum voluptatum repellat quod alias nulla a mollitia, incidunt in sapiente ut inventore, tempore nihil praesentium impedit quasi voluptatem. Perspiciatis ut vero quibusdam fuga in, delectus cumque! Excepturi expedita eligendi perspiciatis voluptate nesciunt quis natus distinctio iste. Eligendi laudantium ullam illo odit ratione non dolorem blanditiis suscipit deserunt unde, temporibus pariatur maxime excepturi, molestiae mollitia quibusdam. Consequatur quae, officia temporibus, voluptatum commodi, soluta dolore minima odit animi ut dicta dolorem accusantium necessitatibus illum sit asperiores nemo quis beatae voluptatibus. Explicabo eos ducimus ad, accusamus amet, incidunt hic vitae voluptas ab, natus odio suscipit quia excepturi tempora maiores modi itaque facilis. Odit recusandae temporibus quis commodi rerum molestias velit rem nobis soluta vero est facilis sapiente deleniti qui voluptas quisquam ab cum, quos modi aliquid magnam, non doloribus! Magni, blanditiis laboriosam! Impedit blanditiis ex omnis deleniti harum quibusdam? Nam sed odio veniam officia, numquam suscipit nobis laborum! Cupiditate laudantium amet dolorum laborum consectetur, facilis a obcaecati voluptates deleniti voluptatum inventore beatae. Fugiat dolore fuga dolorum fugit molestiae voluptatem quam enim non, suscipit cumque perspiciatis modi iure nihil dignissimos repellat esse maxime magni dolor tempora illo ex beatae eum commodi accusantium? Labore soluta odit doloremque maiores repellat provident corrupti, officiis eligendi veritatis consectetur earum tempora est aut delectus molestias deleniti animi. Consequuntur voluptatum blanditiis, impedit autem doloremque iusto id esse laborum aspernatur reiciendis suscipit iste soluta laboriosam, quod sit. Voluptate placeat excepturi quaerat velit commodi. Accusantium, cumque. Eaque, consequuntur.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HotelDiscription
