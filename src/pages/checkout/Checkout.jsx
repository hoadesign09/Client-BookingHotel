import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Checkout = () => {
  const location = useLocation();
  const { dates, options } = useContext(SearchContext);
  const { data } = useLocation();
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  // Function to calculate the difference in days between two dates
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleClick = () => {
    // Your logic for handling the payment or reservation process
  };

  return (
    <div>
      {/* Your Checkout Page UI */}
      <h1>Checkout Summary</h1>
      <p>Name: {user.username}</p>
      <p>Number of Nights: {days}</p>
      <p>Price Per Night: ${data.cheapestPrice}</p>
      <p>Number of Rooms: {options.room}</p>
      <p>Total Amount: ${days * data.cheapestPrice * options.room}</p>
      
      <button onClick={handleClick}>Pay Now</button>
    </div>
  );
};

export default Checkout;
