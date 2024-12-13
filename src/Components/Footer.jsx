import React from 'react'
import logo from '../assets/footer-logo.png';
import '../assets/css/style.css';
const Footer = () => {
    return (
        <>
            <div id='footer'>
                <div className='container mt-5 pb-5'>
                    <div className='row gy-4 align-items-center'>
                        <div className='col-sm-4'>
                            <img src={logo} alt='logo' className='footerlogo' />
                            <p className='pt-2 mb-0' style={{ color: '#FFFFFF', fontSize: '12px' }}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus.</p>
                        </div>
                        <div className='col-sm-8 d-flex gap-4 flex-wrap align-items-center footer-content justify-content-sm-end'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Services</a>
                            <a href="">Blog</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    <hr className='my-4' style={{ color: 'gray' }} />
                    <div className='row gy-5 gx-5'>
                        <div className='col-md-4'>
                            <h4>Address</h4>
                            <p style={{ color: '#FFFFFF', fontSize: '12px' }}>5116 Dietrich Mill, North Emmet
                                Dakota USA 45862</p>
                            <div className='d-flex gap-2'>
                                <div className='social-icon'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className='social-icon'> <i className="fa-brands fa-twitter"></i></div>
                                <div className='social-icon'> <i className="fa-brands fa-youtube"></i></div>
                                <div className='social-icon'> <i className="fa-brands fa-instagram"></i></div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Contact</h4>
                            <div className='mb-2 footer-content'>
                                <a href=""><p className='mb-0' style={{ color: '#FFFFFF', fontSize: '12px' }}>P:+1(234)567890</p></a>
                                <a href=""><p className='mb-0' style={{ color: '#FFFFFF', fontSize: '12px' }}>+0(987)654321</p></a>
                            </div>
                            <div className='mb-2 footer-content'>
                                <a href=""><p className='mb-0' style={{ color: '#FFFFFF', fontSize: '12px' }}>E:medral@mails.com</p></a>
                                <a href=""><p className='mb-0' style={{ color: '#FFFFFF', fontSize: '12px' }}>example@mail.com</p></a>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Let's talk about health!</h4>
                            <p style={{ color: '#FFFFFF', fontSize: '12px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Mauris sit amet cursus orci.</p>
                            <button type="button" className="btn m-0 btn-green footer-btn">Get Started</button>
                        </div>
                    </div>
                    <hr className='my-4' style={{ color: 'gray' }} />
                    <div className='row align-items-center'>
                        <div className='col-sm-4 col-5'>
                            <p className='pt-2 mb-0' style={{ color: '#FFFFFF', fontSize: '12px' }}>Copyright © 2023 ASK Project</p>
                        </div>
                        <div className='col-sm-8 col-7 d-flex gap-sm-4 gap-2 align-items-center footer-content justify-content-end'>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms & Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer