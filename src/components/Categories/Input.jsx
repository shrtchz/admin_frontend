import React from 'react';
import './input.css'

const Input = ({value, onChange}) => {

  return (
    <div className='container align-items-start'>
            <input type='checkbox' className='me-4 '/>

      <div className='style d-flex  col-12'>
      <span className="icon_style col-3 d-flex align-items-center ps-3 ">%</span>
      
      <input
        type="text"
        className="input col-8 "
        value={value} onChange={onChange}
     />
      </div>
      
    </div>
  );
};

export default Input;
