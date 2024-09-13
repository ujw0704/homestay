import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";

function Booking() {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Number: "",
    Address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    console.log(formData); // Log form data on form submission
  };

  return (
    <div className="BookingContainer">
      <form onSubmit={handleSubmit}>
        <div className="BookingInput">
          <label>FirstName</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
          />
        </div>
        <div className="BookingInput">
          <label>Lastname</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
        </div>
        <div className="BookingInput">
          <label>PhoneNumber</label>
          <input
            type="text"
            name="Number"
            value={formData.Number}
            onChange={handleChange}
          />
        </div>
        <div className="BookingInput">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
          />
        </div>
        <div className="BookingDate">
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
          <div>
            <DatePicker
              selectsStart
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
            />
            <DatePicker
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
            />
          </div>
          <button className="bookingbutton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;

