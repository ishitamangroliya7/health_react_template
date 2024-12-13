import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import '../assets/css/style.css';
const Blog = () => {
    return (
        <>
            <div className='container'>
                <div className='row pb-3 align-items-center'>
                    <div className='col-sm-8 text-start'>
                        <p><small>Blog News</small></p>
                        <h2>Articles About Herbal Medicine</h2>
                    </div>
                    <div className='col-sm-4 text-end'>
                        <button type="button" className="btn m-0 btn-green">More Articles</button>
                    </div>
                </div>

                <div className='row gy-4'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={blog1} alt='Herbal Medicine' className='card-img-top' />
                            <div className='card-body'>
                                <p><small style={{ letterSpacing: 'normal' }}>September 6, 2023</small></p>
                                <h5>Herbal medicine interact with us</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut eget neque…</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={blog2} alt='Herbal Medicine' className='card-img-top' />
                            <div className='card-body'>
                                <p><small style={{ letterSpacing: 'normal' }}>September 6, 2023</small></p>
                                <h5>Herbal medicine interact with us</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut eget neque…</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card'>
                            <img src={blog3} alt='Herbal Medicine' className='card-img-top' />
                            <div className='card-body'>
                                <p><small style={{ letterSpacing: 'normal' }}>September 6, 2023</small></p>
                                <h5>Herbal medicine interact with us</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut eget neque…</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
