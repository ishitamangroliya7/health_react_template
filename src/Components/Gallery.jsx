import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import '../assets/css/style.css';
const Gallery = () => {
    return (
        <>
            <div id='page2'>
                <div className='container'>
                    <div className='row gy-3 text-center align-items-center justify-content-center'>
                        <div className='col-md-7'>
                            <p><small>Our Gallery</small></p>
                            <h2>Overall Well Being Is Our Priority</h2>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex gap-3' style={{ paddingBottom: '15px' }}>
                                <div className='parts'>
                                    <img src={img1} alt='img1' className='w-100' />
                                </div>
                                <div className='parts'>
                                    <img src={img2} alt='img1' className='w-100' />
                                </div>
                            </div>
                            <div className='d-flex  gap-3'>
                                <div className='parts'>
                                    <img src={img3} alt='img1' className='w-100' />
                                </div>
                                <div className='parts'>
                                    <img src={img4} alt='img1' className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={img5} alt='img1' className='w-100' />
                        </div>
                        <div className='col-md-6'>
                            <img src={img6} alt='img1' className='w-100' />
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex gap-3' style={{ paddingBottom: '15px' }}>
                                <div className='parts'>
                                    <img src={img7} alt='img1' className='w-100' />
                                </div>
                                <div className='parts'>
                                    <img src={img8} alt='img1' className='w-100' />
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='parts'>
                                    <img src={img9} alt='img1' className='w-100' />
                                </div>
                                <div className='parts'>
                                    <img src={img10} alt='img1' className='w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery