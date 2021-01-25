import React, { useState } from 'react';
import useDebounce from '../../utils/hooks/useDebounce';
import './style.css'

const SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);

    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(e) {
        setDisplayValue(e.target.value);
        debouncedChange(e.target.value);
    }
    return (
        <div className="main-container">
            <div className="input-container">
                <div className="input-field">
                    <input type="search" placeholder="Type here" value={displayValue} onChange={handleChange} />
                    <div className="underline"></div>
                </div>
            </div>
        </div>
    );
}

export default SearchInput;