import aboutImage from '../image/img/ghar.jpg'
// import StickyNavbar from "./StickyNavbar.jsx"
// import Subscribe from "./Subscribe"

const About = () => {
    return (
        <>
            <div className=" container mx-auto mb-3 p-3">
                <h5 className="card-title text-center" style={{ fontSize: '3rem' }}>About Us</h5>
                <div className="flex md:flex-row flex:col lg:gap-8 md:gap-4">
                    <div className="flex flex-col gap-4 md:gap-8">
                        <img src={aboutImage} className='h-[300px] w-[900px]' alt="about" />
                        <img src={aboutImage} className='h-[300px] w-[900px]' alt="about" />
                    </div>
                    <div className="">
                        <div className="card-body">
                            
                            <p className="card-text">
                                <span>
                                    <h4 className="aboutSubheading" style={{color:"#4dc7bc"}}>Incredible choice</h4>
                                    <p>Whether you want to stay in a chic city apartment, a luxury beach resort or a cosy B&B in the countryside, Booking.com provides you with amazing diversity and breadth of choice - all in one place.</p>
                                </span>

                                <span>
                                    <h4 className="aboutSubheading" style={{color:"#4dc7bc"}}>Low/Affordable Price</h4>
                                    <p>We guarantees to offer you the best available rates. And with our promise to price match, you can rest assured that you’re always getting a great deal.</p>
                                </span>

                                <span>
                                    <h4 className="aboutSubheading" style={{color:"#4dc7bc"}}>Broker Resist</h4>
                                    <p>If you are a young professional recently shifted to a new city, finding apartments and houses on rent can be an extremely frustrating and expensive affair.
                                       Frustrating because of the search for right place, and expensive because of brokers and middle men charging atrocious finders fee.
                                        This rental platform lets you find your dream house without any broker acting as a middleman. This is the most convenient way of finding your house without paying hefty brokerage.
                                    </p>
                                </span>


                                <span>
                                    <h4 className="aboutSubheading" style={{color:"#4dc7bc"}}>Instant confirmation</h4>
                                    <p>Every reservation is instantly confirmed. Once you’ve found your perfect stay, a few clicks are all it takes.</p>
                                </span>

                                <span>
                                    <h4 className="aboutSubheading" style={{color:"#4dc7bc"}}>24/7 support</h4>
                                    <p>Whether you’ve just booked or are already enjoying your trip, our customer experience team are on hand around the clock to answer your questions and advocate on your behalf in more than 40 languages. Make sure to check out our FAQ for travellers.</p>
                                </span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Subscribe /> */}
            
        </>
    )
}

export default About