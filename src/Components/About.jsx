import React from 'react'
import icon1 from '..//assets/icon1.png';
import icon2 from '..//assets/icon2.png';
import icon3 from '..//assets/icon3.png';
import '../assets/css/style.css';

const About = () => {
    return (
        <>
            <div className='container' id='about'>
                <div className='row text-center align-items-center justify-content-center'>
                    <div className='col-md-7'>
                        <p><small>About Medral</small></p>
                        <h2>The Best Thing You Can Do to Your Health.
                            Lorem ipsum dolor sit amet, consec tetur
                            adipiscing elit.</h2>
                        <p>Suspendisse rhoncus neque elementum malesuada gravida. Donec gravida enim est, non
                            tincidunt magna pellentesque ac. Duis posuere tellus non ex porttitor, eget pretium ipsum iaculis.
                            Praesent consequat felis at mollis consequat.</p>
                        <div>
                            <button type="button" className="btn btn-green white-btn">Discover More</button>
                        </div>
                    </div>
                </div>
                <div className='row gy-4 text-center pt-5'>
                    <div className='col-md-4 justify-content-center align-items-center'>
                        <div className='about-box'>
                            <div><img src={icon1} alt='icon1' /></div>
                            <h5 className='mt-3'>Live healthily, live well. Lorem
                                ipsum sit amet.</h5>
                        </div>
                    </div>
                    <div className='col-md-4 middle-box'>
                        <div className='about-box'>
                            <div><img src={icon2} alt='icon1' /></div>
                            <h5 className='mt-3'>Go natural, be healthy.
                            Donec finibus eros.</h5>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='about-box'>
                            <div><img src={icon3} alt='icon1' /></div>
                            <h5 className='mt-3'>Healthy choices for you.
                            Integer convallis velit.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About