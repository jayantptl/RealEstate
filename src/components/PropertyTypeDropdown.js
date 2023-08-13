import React from 'react';

const PropertyTypeDropdown = (prop) => {
  return   <div className="col-lg-3">
  <p className='title'>Property Type</p>
  <select value={prop.type} onChange={prop.handleType}>
      <option value="All-Types">All Types </option>
      <option value='House'>House </option>
      <option value='Apartment'>Apartment</option>

  </select>
</div>
};

export default PropertyTypeDropdown;
