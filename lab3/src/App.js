import "./App.css";
import React from "react";
import NavbarSection from "./components/NavbarSection";
import HeroSection from "./components/HeroSection";
import PizzaMenu from "./components/PizzaMenu";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <div className="menu-section" style={{ backgroundColor: "currentColor" }}>
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>Our Menu</h2>
          <PizzaMenu />
        </div>
      </div>
      <div className="booking-section" style={{ padding: "50px 0", backgroundColor: "currentColor" }}>
        <div className="container">
          <h2 className="section-title" style={{color: 'white'}}>Book Your Table</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default App;
