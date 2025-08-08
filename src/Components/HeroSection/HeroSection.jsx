import React from 'react';
import slide1 from '../../assets/Hero/Tabpanel.png';
import Categories from './Categories';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SecondaryNavbar from '../Navbar/SecondaryNavbar';

const HeroSection = () => {
  return (
    <section className=" w-full">
      <div className="container w-full mx-auto flex flex-col lg:flex-row">

        {/* Sidebar */}
        <div className="lg:w-1/4">
          <Categories />
        </div>

        {/* Hero Banner */}
        <div className="w-full lg:w-3/4 rounded-sm">
        {/* secondary navbar */}
          <div>
            <SecondaryNavbar></SecondaryNavbar>
          </div>
          <div className='w-full h-[200]'>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" srcset="" /></SwiperSlide>
      </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
