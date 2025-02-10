import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleImages = [
    'schedule/schedule-1.png',
    'schedule/schedule-2.png',
    'schedule/schedule-3.png'
  ];


  const [currentDayIndex, setCurrentDayIndex] = React.useState(0);

  const handlePrevDay = () => {
    setCurrentDayIndex((prev) => (prev > 0 ? prev - 1 : scheduleImages.length - 1));
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prev) => (prev < scheduleImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className='schedule-main-container'>
      <div className="schedule-container">
        <div>
          <img src="/titles/title-3.png" className="schedule-title" alt="特会流程" />
        </div>
        <div className="schedule-row">
          {/* Desktop view - show all cards */}
          <div className="desktop-view">
            {scheduleImages.map((imagePath, index) => (
              <div className="schedule-card" key={index}>
                <img 
                  src={imagePath} 
                  alt={`Schedule Day ${index + 1}`} 
                  className="schedule-day-image"
                />
              </div>
            ))}
          </div>
          
          {/* Mobile view - show single card with navigation */}
          <div className="mobile-view">
            <button className="nav-button prev" onClick={handlePrevDay}>&lt;</button>
            <div className="schedule-card">
              <img 
                src={scheduleImages[currentDayIndex]} 
                alt={`Schedule Day ${currentDayIndex + 1}`}
                className="schedule-day-image"
              />
            </div>
            <button className="nav-button next" onClick={handleNextDay}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
