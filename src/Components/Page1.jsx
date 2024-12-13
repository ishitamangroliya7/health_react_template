import React from 'react';
import vector from '../assets/vector.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import logo6 from '../assets/logo6.svg';
import logo7 from '../assets/logo7.svg';
import logo8 from '../assets/logo8.svg';
import logo9 from '../assets/logo9.svg';
import logo10 from '../assets/logo10.svg';
import '../assets/css/style.css';
const Page1 = () => {

    const logos = [logo10, logo9, logo8, logo7, logo6, logo5];
    const logos2 = [logo5, logo4, logo3, logo2, logo1, logo10];

    return (
        <>
            <div className='container-fluid' id='page1'>
                <div className='container p-0 pb-5' style={{ borderBottom: ' 1px solid #FCFCF429' }}>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className='card-box text-center'>
                                            <div className='mb-4'><img src={vector} alt='vector' /></div>
                                            <h6 className='mb-3' style={{ fontSize: '14px', color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget neque rhoncus, gravida
                                                massa eu, sagittis diam. Donec finibus eros vel tellus tristique euismod. Nunc accumsan
                                                bibendum hendrerit.</h6>
                                            <small className='mb-3' style={{ fontSize: '14px', color: '#FFFFFFA1', letterSpacing: 'normal' }}>Wanda Frost</small><br />
                                            <small style={{ fontSize: '12px', color: '#FFFFFFA1', letterSpacing: 'normal' }}>Customer</small>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='card-box text-center'>
                                            <div className='mb-4'><img src={vector} alt='vector' /></div>
                                            <h6 className='mb-3' style={{ fontSize: '14px', color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget neque rhoncus, gravida
                                                massa eu, sagittis diam. Donec finibus eros vel tellus tristique euismod. Nunc accumsan
                                                bibendum hendrerit.</h6>
                                            <small className='mb-3' style={{ fontSize: '14px', color: '#FFFFFFA1', letterSpacing: 'normal' }}>Wanda Frost</small><br />
                                            <small style={{ fontSize: '12px', color: '#FFFFFFA1', letterSpacing: 'normal' }}>Customer</small>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='card-box text-center'>
                                            <div className='mb-4'><img src={vector} alt='vector' /></div>
                                            <h6 className='mb-3' style={{ fontSize: '14px', color: '#FFFFFF' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget neque rhoncus, gravida
                                                massa eu, sagittis diam. Donec finibus eros vel tellus tristique euismod. Nunc accumsan
                                                bibendum hendrerit.</h6>
                                            <small className='mb-3' style={{ fontSize: '14px', color: '#FFFFFFA1', letterSpacing: 'normal' }}>Wanda Frost</small><br />
                                            <small style={{ fontSize: '12px', color: '#FFFFFFA1', letterSpacing: 'normal' }}>Customer</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container pt-4'>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={5}
                        breakpoints={{
                            575: { slidesPerView: 4 },
                            425: { slidesPerView: 3 },
                            0: { slidesPerView: 2 },
                            991: { slidesPerView: 5 }
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="swiper-logo"
                                    style={{ width: '80%', objectFit: 'contain' }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper className='pt-3'
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={5}
                        breakpoints={{
                            575: { slidesPerView: 4 },
                            425: { slidesPerView: 3 },
                            0: { slidesPerView: 2 },
                            991: { slidesPerView: 5 }
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        {logos2.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={logo}
                                    alt={`Logo ${index + 1}`}
                                    className="swiper-logo"
                                    style={{ width: '80%', objectFit: 'contain' }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Page1;
