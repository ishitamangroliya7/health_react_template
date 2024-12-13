import React from 'react'
import part5 from '../assets/part5.png';
import part6 from '../assets/part6.png';
import '../assets/css/style.css';
const Faqs = () => {
    return (
        <>
            <div className='container'>
                <div className='row gy-4 align-items-center'>
                    <div className='col-md-6 faqimg'>
                        <div className='d-flex gap-3'>
                            <div>
                                <img src={part5} alt="part5" className='w-100' />
                            </div>
                            <div>
                                <img src={part6} alt="part5" className='w-100 part5' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <p><small>FAQs</small></p>
                        <h2>Frequently Asked Questions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                            nec ullamcorper mattis leo.</p>

                        <div className="accordion mt-2 accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How much does it cost to a yoga lesson?
                                    </button>
                                </h6>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"><p>Placeholder content for this accordion, which is intended to demonstrate. This is the first item's accordion body.</p></div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How much does it cost to herbal tea?
                                    </button>
                                </h6>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"><p>Placeholder content for this accordion, which is intended to demonstrate. This is the second item's accordion body. Let's imagine this being filled with some actual content.</p></div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Is there a guarantee for the results?
                                    </button>
                                </h6>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"><p>Placeholder content for this accordion, which is intended to demonstrate the representative of how this would look in a real-world application.</p></div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Can I come for a consultation to your office?
                                    </button>
                                </h6>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"><p>Placeholder content for this accordion, which is intended to demonstrate the of how this would look in a real-world application.</p></div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h6 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        What payment methods do you provide?
                                    </button>
                                </h6>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body"><p>Placeholder content for this accordion, which is intended to demonstrate the representative of how this would look in a real-world application.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs