import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency,expenses } = useContext(AppContext);

    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" value={budget} min={expenses} step="10" max="20000"></input></span>
        </div>
    );
};
export default Budget;