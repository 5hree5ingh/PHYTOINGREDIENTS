import React from 'react';
import '../../css-files/inputfield.css';

function InputField({ fieldObject }) {
    return (
        <div className="input-field-container d-flex" style={{width: fieldObject.width, paddingLeft:"5%"}}>
            <div className="inputs-icon-container" style={{width:"11%",height:"100%", background:"#dcdbdb"}}>
                <i className={fieldObject.icon} style={{fontSize:"13px",margin:"8px"}}></i>
            </div>
            <input type={fieldObject.type} name={fieldObject.name} placeholder={fieldObject.placeholder} style={{width:"80%", borderLeft:"none", borderRight:"1px solid #c1bfbf",borderTop:"1px solid #c1bfbf",borderBottom:"1px solid #c1bfbf ", paddingLeft:"5px", fontSize:"12px"}} />
        </div>
    );
}

export default InputField;