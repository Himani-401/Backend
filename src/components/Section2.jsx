import React from 'react';
import './Section2.css'; 

const Section2 = () => {
  return (
    <div className="section2">
      
      <div className="cards-container">
        <div className="card1">
          <img src="https://i.pinimg.com/564x/bf/eb/7a/bfeb7a80c528296da27ca2a0db7dbd1b.jpg" alt="Item 1" />
          <div className="card-body">
            <p>Black dress</p>
            <button>View More</button>
          </div>
        </div>
        <div className="card2">
          <img src="https://imgs.search.brave.com/2UvtqTiVC_Y_YaXXIVu3Gx3poTXBb9Rby31sym8y7f0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cG9ydHJhaXQtb2Yt/aWxsdW1pbmF0ZWQt/bGFwdG9wLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" alt="Item 2" />
          <div className="card-body">
            <p>Laptop</p>
            <button>View More</button>
          </div>
        </div>
        <div className="card3">
          <img src="https://i.pinimg.com/236x/8d/d7/7c/8dd77c587962fdcc4a8cca7f19c05033.jpg" alt="Item 3" />
          <div className="card-body">
            <p>Grocery</p>
            <button>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
