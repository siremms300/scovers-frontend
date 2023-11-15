
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
                        <h2>Our mission</h2>
                    </div> 

                    {/* <div className='single-tab'>
                        <h2>Team</h2> 
                    </div> */}
                </div>

                <div className='tab-content'>
                    {/* About content */} 
                    <div className={toggleTab === 1 ? 'content active-content' : 'content'}>
                        <h2>Who we are</h2> 
                        <p>
                        Scovers Education is an organization that serves as a broker, ensuring
Partnering Universities and prospective students meeting their requirement meet.
As an international firm we are focused on student recruitment and helping
partners gain visibility within the African Space.
Sovers which mean Schooling Overseas is the goal. We aspire to remain the
major source of information and medium via which new and continuing students
from around Africa whose talent and ambition matches the interest of our
partnering institution.

With partnership with Universities around the world, and programs ranging from
certificate to PHD, Scovers Education is able to handle any kind of application.
                         {/* </p> */}
                            {/* <h3>We recognize your uniqueness</h3>
                            <p>
                                Recognizing the unique aspirations and circumstances of each individual, our seasoned counselors leverage their expertise in global education systems to craft tailor-made solutions that align with your goals.

                                Scovers nurtures strong alliances with a diverse network of institutions worldwide, ensuring an extensive range of choices for those seeking higher education, language programs, or vocational training. We guide you through every phase of your journey, from program selection and application preparation to visa processing and pre-departure orientation.

                                Throughout our journey, we've witnessed countless success stories, where students not only achieve academic excellence but also gain profound cultural insights, fostering a global perspective that will benefit them for life. 
                            </p>

                            <h3>We bring your dreams to life</h3>
                            <p>
                                At Scovers, our passion is to help you realize your dreams and shape a brighter future. Embark on an extraordinary voyage with us, and together, we'll unlock a world of possibilities.

                                Uncover, learn, and thrive with Scovers. Your global future begins here.
                            </p> */}
                        </p>
                    </div>

                    {/* Parnerships content */} 
                    <div className={toggleTab === 2 ? 'content active-content' : 'content'}>
                        <h2>Scovers ENGAGES THE MARKET USING IN-COUNTRY REPS</h2> 
                        <p>
                        Scovers Education Marketing and Recruiting provides your university with
necessary networking to states and communities. This is made possible with
partnerships within country reps and sub agents.
                        </p>  

                        <h3>RECRUITMENT STRATEGY</h3>
                            <p>
                            An effective strategy must consider culture and mindset of the target, as such we
adopt the following to guarantee a profitable result;
a. Social Media
b. Radio sessions
c. Educational Fairs
d. Online Webinars
e. Word of mouth Recommendations
f. Referrals
g. Lots more
                            </p>
                        {/* <div className='partners-row'>
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
                        </div> */}
                    </div> 

                    {/* track record content */}
                    
                    <div className={toggleTab === 3 ? 'content active-content' : 'content'}> 

                        <div className='exp-column'>
                            <h2>Our mission</h2>
                        <p>The mission of Scovers Education is to provide our university partners with a
global network of high-quality prospective students to partnering universities
using high performing results.</p>
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
