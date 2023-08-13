import React from 'react';

const MoveInDropdown = (prop) => {
  return    <div className="col-lg-3">
  <p className='title'>MoveIn</p>
  <select value={prop.moveIn} onChange={prop.handleMoveIn}>
      <option value="Any-Time">Any Time </option>
      <option value="July-2023">July-2023 </option>
      <option value="Aug-2023">Aug-2023</option>
      <option value="Sep-2023">Sep-2023 </option>

  </select>
</div>
};

export default MoveInDropdown;
