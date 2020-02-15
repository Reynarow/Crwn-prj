import React from 'react';

import './Form-input.styles.scss';


const FormInput = ({ handleChange, lable, ...otherProps }) => (
    <div className="group">
        <input className="form-input" {...otherProps} onChange={handleChange} />
        {
            lable ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>
                    {lable}
                </label>)
                : null
        }

    </div>


);



export default FormInput;