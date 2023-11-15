import React from 'react';
import Title from '../title/Title';
import { homeAbout } from '../../dummydata'; 

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containerr flexSB'>
          <div className='rightt roww'>
            <Title subtitle='ACHIEVE YOUR DREAMS WITH SCOVERS' title='Benefits of using SCOVERS' />
            <div className='items'>
              {homeAbout.map((val) => (
                <div className='item flexSB' key={val.title}>
                  <div className='img'>
                    <img src={val.cover} alt={val.title} />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutCard;
