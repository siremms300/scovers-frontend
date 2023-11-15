import React, { useState, useEffect } from 'react';
import { awrapper } from '../../dummydata';

const AWrapper = () => {
  const [countedData, setCountedData] = useState([]);

  useEffect(() => {
    // Initialize the data with the original values
    setCountedData(awrapper);

    // Set up an interval to update the counted data every second
    const interval = setInterval(() => {
      setCountedData((prevData) =>
        prevData.map((val) => ({
          ...val,
          data: formatNumber(parseInt(val.data.replace(',', '')) + 1),
        }))
      );
    }, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <section className='awrapper'>
        <div className='containers grids'>
          {countedData.map((val) => (
            <div key={val.title} className='boxes flex'>
              {/* <div className='img'>
                <img src={val.cover} alt='' />
              </div> */}

              <div className='text'>
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
