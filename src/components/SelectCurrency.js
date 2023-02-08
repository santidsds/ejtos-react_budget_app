import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const SelectCurrency = () => {
    const { budget, currency,expenses, dispatch } = useContext(AppContext);
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSelect = () => {
      
      
      dispatch({
        type: 'CHG_CURRENCY',
        payload: '$'
    });
  }

  return (
    <div >
      <button class="btn btn-success dropdown-toggle mt-2" onClick={toggle}>Currency ({currency})</button>
      {isOpen && (
        <ul class="drop-menu">
            <li class="list-group-item">$ Dollar</li>
            <li class="list-group-item">£ Pound</li>
            <li class="list-group-item">€ Euro</li>
            <li class="list-group-item">₹ Ruppee</li>
        </ul>
      )}
    </div>
  );
};
export default SelectCurrency;