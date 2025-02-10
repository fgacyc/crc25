import "./Testimony.css";
import { useState, useEffect } from "react";
import { testimonials } from "./testimonialsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimony = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const testimonialsPerPage = isMobile ? 1 : 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) =>
      prev > 0
        ? prev - 1
        : Math.ceil(testimonials.length / testimonialsPerPage) - 1
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prev) =>
      prev < Math.ceil(testimonials.length / testimonialsPerPage) - 1
        ? prev + 1
        : 0
    );
  };

  return (
    <section className="testimony-section">
      <img
        src="/titles/title-2.png"
        alt="Conference Speakers"
        className="testimony-header-image"
      />
      <div className="testimonials-container">
        <div className="testimonials-grid">
          {getCurrentTestimonials().map((testimonial, i) => {return(
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-image-container">
                <button className={`nav-button prev ${i 
                  >0 ? "hidden" : ""}`} onClick={handlePrevPage}>
                  <FaChevronLeft color="white" />
                </button>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-profile-image"
                />
                <button className={`nav-button next ${i < 2 ? "hidden" : ""}`} onClick={handleNextPage}>
                  <FaChevronRight color="white" />
                </button>
              </div>
              <img
                src={testimonial.introduction}
                alt={testimonial.name}
                className="testimonial-introduction-image"
                style={{ width: testimonial.width, height: testimonial.height }}
              />
              <div className="testimonial-description-container">
                <ul
                  className="testimonial-description"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  {testimonial.description.map((paragraph, index) => (
                    <li key={index}>{paragraph}</li>
                  ))}
                </ul>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
