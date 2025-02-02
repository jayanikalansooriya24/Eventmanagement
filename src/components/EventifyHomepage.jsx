import React from 'react';
import '../styles/styles.css'; // Ensure correct CSS import
import logo from '../assets/logo.png'; // Import the logo from the assets folder
import rock from '../assets/rock.avif';
import drama from '../assets/drama.jpeg';
import concert from '../assets/concert.jpeg';

const events = [
  {
    id: 1,
    image: rock, 
    title: "Rock Concert",
    date: "March 10, 2025",
    time: "7:00 PM",
    location: "Colombo Stadium",
    category: "Concert",
    price: "50 USD",
  },
  {
    id: 2,
    image: drama,
    title: "Drama Night",
    date: "April 5, 2025",
    time: "6:30 PM",
    location: "National Theater",
    category: "Theater",
    price: "30 USD",
  },
  {
    id: 3,
    image: concert,
    title: "Live Concert",
    date: "May 2, 2025",
    time: "5:00 PM",
    location: "Colombo Grounds",
    category: "Music Festival",
    price: "25 USD",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <p className="event-date">{event.date} | {event.time}</p>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-location"><strong>Location:</strong> {event.location}</p>
        <p className="event-category"><strong>Category:</strong> {event.category}</p>
        <p className="event-price"><strong>Tickets:</strong> {event.price} Upwards</p>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

const EventifyHomepage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Eventify Logo" className="logo-image" />
        </div>
        <nav className="menu">
          <a href="#concerts">Concerts</a>
          <a href="#theater">Theater</a>
          <a href="#family">Family & Other</a>
          <a href="#login">Login</a>
        </nav>
        <button className="download-btn">Download Tickets</button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Let's Book Your Event</h1>
        <p>Book live events and discover concerts, events, theater, and more.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">Search</button>
        </div>
      </section>

      {/* Latest Events */}
      <section className="latest-events">
      <h2 className="testimonials-heading">
   <span className="blue-text">Latest</span> Events
</h2>
        <div className="tabs">
          <button>Concerts</button>
          <button>Theater</button>
          <button>Family</button>
        </div>
        <div className="event-cards">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
  {/* What People Say */}
<section className="testimonials">
  <h2 className="testimonials-heading">
    <span className="blue-text">What</span> People Say
  </h2>

  <div className="testimonial-cards">
    {[
      { name: "Yohan Shimalka", role: "Student", review: "Good and fast.", rating: 3 },
      { name: "Damith Chandimal", role: "Customer", review: "Give better service and nicely done.", rating: 4 },
      { name: "Nipuni Kosgahakumbura", role: "Senior Executive", review: "User-friendly website for the bookings.", rating: 5 },
      { name: "Dave Anthony Pate", role: "Finance Executive", review: "The team was very helpful. Well done, guys.", rating: 5 },
      { name: "Yohan Shimalka", role: "Student", review: "Good and fast.", rating: 5 },
      
    ].map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <h3>{testimonial.name}</h3>
        <p className="role">{testimonial.role}</p>
        <p>{testimonial.review}</p>
        <div className="stars">{"⭐".repeat(testimonial.rating)}</div>
      </div>
    ))}
  </div>

  {/* Wave Effect */}
  <div className="wave-container"></div>
</section>



      {/* Footer */}
<footer className="footer">
  <div className="footer-container">
    {/* Left Section: Logo & Description */}
    <div className="footer-left">
      <img src={logo} alt="Eventify Logo" className="footer-logo" />
      <p className="footer-description">
        Eventify is your go-to platform for booking live events, concerts, theater, and more. Experience seamless ticket booking with us!
      </p>
      <div className="footer-socials">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>

    {/* Right Section: Links & Contact */}
    <div className="footer-links">
      <div>
        <h3>Site Map</h3>
        <ul>
          <li><a href="#">Concerts</a></li>
          <li><a href="#">Theater</a></li>
          <li><a href="#">Family</a></li>
          <li><a href="#">Download Tickets</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
      <div>
        <h3>FAQ</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <p>📞 +9477 432 9876 | +9411 987 3214</p>
        <p>📍 No. 123, Main Road, Colombo</p>
        <p>✉️ eventify@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Eventify Pvt Ltd. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default EventifyHomepage;
