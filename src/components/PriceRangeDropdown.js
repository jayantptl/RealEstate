import React from 'react';

const PriceRangeDropdown = (prop) => {
  return  <div className="col-lg-3">
  <p className='title'>Price</p>
  <select value={prop.price} onChange={prop.handlePrice}>
      <option value="all-ranges">All Ranges </option>
      <option value='2/5'>$20000 - $50000 </option>
      <option value='5/15'>$50000 - $150000</option>
      <option value='15/25'>$150000 - $250000 </option>

  </select>
</div>
};

export default PriceRangeDropdown;
