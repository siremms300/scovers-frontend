
import React, {Fragment, useState} from 'react'

const About = () => { 

    const [toggleTab, setToggleTab] = useState(1) 
    const toggleState=(index)=> {
        setToggleTab(index)
    }



  return (
    <Fragment>
       
      <section className='about'>
        <div className='rows'>
            <div className='column'>
                <div className='about-img'>

                </div>
            </div>

            <div className='column'>
                <div className='tabs'>
                    <div className={toggleTab === 1 ? 'single-tab active-tab': 'single-tab'}
                        onClick={()=> toggleState(1)} 
                    >
                        <h2>About Us</h2>
                    </div> 

                    <div className={toggleTab === 2 ? 'single-tab active-tab': 'single-tab'}
                        onClick={()=> toggleState(2)} 
                    >
                        <h2>Partnerships</h2>
                    </div>

                    <div className={toggleTab === 3 ? 'single-tab active-tab': 'single-tab'}
                        onClick={()=> toggleState(3)} 
                    >
                        <h2>Track record</h2>
                    </div> 

                    {/* <div className='single-tab'>
                        <h2>Team</h2> 
                    </div> */}
                </div>

                <div className='tab-content'>
                    {/* About content */} 
                    <div className={toggleTab === 1 ? 'content active-content' : 'content'}>
                        <h2>Our story</h2> 
                        <p>
                            Welcome to Scovers - Your Gateway to Global Learning. With a decade of dedicated service, Scovers has emerged as a prominent leader in the realm of international education.

                            Established by a team of passionate individuals sharing a vision for enabling global opportunities, Scovers has become synonymous with facilitating life-changing educational experiences abroad. Our core mission is clear: to empower individuals with the knowledge and skills needed to succeed in an interconnected world.

                            What sets us apart is our relentless commitment to providing personalized and holistic support for students pursuing overseas education. 
                         {/* </p> */}
                            <h3>We recognize your uniqueness</h3>
                            <p>
                                Recognizing the unique aspirations and circumstances of each individual, our seasoned counselors leverage their expertise in global education systems to craft tailor-made solutions that align with your goals.

                                Scovers nurtures strong alliances with a diverse network of institutions worldwide, ensuring an extensive range of choices for those seeking higher education, language programs, or vocational training. We guide you through every phase of your journey, from program selection and application preparation to visa processing and pre-departure orientation.

                                Throughout our journey, we've witnessed countless success stories, where students not only achieve academic excellence but also gain profound cultural insights, fostering a global perspective that will benefit them for life. 
                            </p>

                            <h3>We bring your dreams to life</h3>
                            <p>
                                At Scovers, our passion is to help you realize your dreams and shape a brighter future. Embark on an extraordinary voyage with us, and together, we'll unlock a world of possibilities.

                                Uncover, learn, and thrive with Scovers. Your global future begins here.
                            </p>
                        </p>
                    </div>

                    {/* Parnerships content */} 
                    <div className={toggleTab === 2 ? 'content active-content' : 'content'}>
                        <h2>Our Partnerships</h2> 
                        <p>
                            Scovers proudly collaborates with renowned universities worldwide to provide students with exceptional 
                            educational opportunities. Among our distinguished partners, Royal Roads University stands out as a 
                            beacon of academic excellence. These valuable partnerships enable us to offer an extensive array of programs, 
                            ensuring our students access top-tier education globally.
                        </p> 
                        <div className='partners-row'>
                            <div className='partners-column'>
                                <div className='progress-wrap'>
                                    <h3>Royal Roads University</h3> 
                                    <div className='progress'>
                                        <div className='progress-bar'>
                                            <span>100%</span> 
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='partners-column'>
                                <div className='progress-wrap'>
                                    <h3>Leeds University</h3> 
                                    <div className='progress'>
                                        <div className='progress-bar'>
                                            <span>100%</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    {/* track record content */}
                    
                    <div className={toggleTab === 3 ? 'content active-content' : 'content'}> 

                        <div className='exp-column'>

                        </div>
                        
                    </div> 

                </div>
            </div>
        </div>
      </section>
    </Fragment>
  )
}

export default About 
