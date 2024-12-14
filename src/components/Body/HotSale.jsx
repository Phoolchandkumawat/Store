import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { imagesSale1 } from '../../Img';

export default function HotSale() {
  return (
    <div className="w-full h-[350px]">
      <h3 className='ml-10 mt-5 font-medium'>Hot Sale</h3>
      <div className="w-4/5 m-auto h-[calc(100%-40px)] max-h-[calc(100%-40px)] ">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          
          {
            [1,2].map((items)=>{
              return <SwiperSlide key={items}>
                <div className="w-full h-full bg-gray-950 rounded-md overflow-hidden">
                  <img src={imagesSale1} alt="" className='w-full h-full object-cover' />
                </div>
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  );
}