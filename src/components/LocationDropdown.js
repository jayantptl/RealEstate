import React from 'react';

const LocationDropdown = (prop) => {
  return  <div className="col-lg-3">
  <p className='title'>Location</p>
  <select value={prop.location} onChange={prop.handleLocation}>
      <option value="Show-All">Show All </option>
      <option value="Canada">Canada</option>
      <option value="United States">United States </option>

  </select>
</div>
};

export default LocationDropdown;
