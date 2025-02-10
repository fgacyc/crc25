import { useEffect, useState } from "react";
import "./Venue.css";

const Venue = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : venueImages.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < venueImages.length - 1 ? prev + 1 : 0));
  };

  const venueImages = [
    "/venue/venue-1.png",
    "/venue/venue-2.png",
    "/venue/venue-3.png",
  ];

  const buildingImages = [
    { image: "/venue/building-1.png", width: "300px", height: "500px" },
    { image: "/venue/building-2.png", width: "300px", height: "380px" },
    { image: "/venue/building-3.png", width: "300px", height: "500px" },
  ];

  const renderDesktopView = () => (
    <div className="venue-grid">
      {venueImages.map((image, index) => (
        <div key={`venue-group-${index}`} className="venue-item">
          <div>
            <img
              className="venue-subtitle"
              src={image}
              alt={`场地地图${index + 1}`}
            />
          </div>

          {buildingImages[index] && (
            <div className="venue-image">
              <img
                src={buildingImages[index].image}
                alt={`场地地图${index + 1}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderMobileView = () => (
    <div className="mobile-view">
      <button className="nav-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="venue-item">
        <div>
          <img
            className="venue-subtitle"
            src={venueImages[currentIndex]}
            alt={`场地地图${currentIndex + 1}`}
          />
        </div>

        {buildingImages[currentIndex] && (
          <div className="venue-image">
            <img
              src={buildingImages[currentIndex].image}
              alt={`场地地图${currentIndex + 1}`}
            />
          </div>
        )}
      </div>
      <button className="nav-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );

  return (
    <div className="venue-container">
      <div className="venue-content">
        <img src="/titles/title-4.png" className="venue-title" alt="场地资讯" />
      </div>
      {isMobile ? renderMobileView() : renderDesktopView()}

      <div className="venue-footer">
        <img src="/helpline_title.png" className="footer-title" alt="Emergency_hotline" />

        <img role="button" src="/whatsapp.png" onClick={() => window.open("https://wa.link/0d8gy4", "_blank")} className="whatsapp" alt="Whatsapp" />
        <a href="https://wa.link/0d8gy4" className="whatsapp-link">
          +60 11-2700 9925
        </a>
      </div>
    </div>
  );
};

export default Venue;
