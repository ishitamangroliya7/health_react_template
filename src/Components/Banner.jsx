import React from 'react'
import part1 from '../assets/part1.png';
import part2 from '../assets/part2.png'
import part3 from '../assets/part3.png'
import part4 from '../assets/part4.png'
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';
import '../assets/css/style.css';

const Banner = () => {
    return (
        <>
            <div className='container'>
                <div className='row gy-5 d-flex align-items-center' id='banner'>
                    <div className='col-md-6 banner-content'>
                        <div>
                            <p><small>Welcome to Medral</small></p>
                            <h1>Natural Solutions for a Great Health</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus nec ullamcorper mattis.</p>
                            <div className='btn-box'>
                                <button type="button" className="btn m-0 btn-green">Get Started</button>
                                <button type="button" className="btn btn-green white-btn">Contact Us</button>
                            </div>
                            <div className='person-box'>
                                <div>
                                    <img src={person1} alt='person1' className='person' />
                                    <img src={person2} alt='person1' className='person' />
                                    <img src={person3} alt='person1' className='person' />
                                    <img src={person4} alt='person1' className='person' />
                                </div>
                                <div>
                                    <h6>1,500+</h6>
                                    <p className='m-0'>Satisfied Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='d-flex gap-4 mb-4'>
                            <div className='parts'>
                                <img src={part1} alt='part1' className='w-100 part1' />
                            </div>
                            <div className='parts'>
                                <img src={part2} alt='part2' className='w-100 part2' />
                            </div>
                        </div>
                        <div className='d-flex gap-4'>
                            <div className='parts'>
                                <img src={part3} alt='part3' className='w-100 part3' />
                            </div>
                            <div className='parts'>
                                <img src={part4} alt='part4' className='w-100 part4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner