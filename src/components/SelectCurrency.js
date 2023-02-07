import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const SelectCurrency = () => {
    const { budget, currency,expenses } = useContext(AppContext);

    return (
        
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        
    );
};
export default SelectCurrency;