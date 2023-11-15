import React from 'react';


const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className='container flexSBB'>
        <div className='left column'>
          <h1>Newsletter - stay up to date with us</h1>
          <span>premium opportunities straight to your mail</span>
        </div>

        <div className='right column'>
          <div className='input-container'>
            <input type='email' placeholder='Enter email address' id='' />
            <button type='submit'>
              <i className='fa fa-paper-plane' /> Subscribe
            </button> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
