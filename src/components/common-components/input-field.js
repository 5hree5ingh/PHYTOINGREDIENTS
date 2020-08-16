import React from 'react';
import '../../css-files/inputfield.css';

class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fieldtype: this.props.fieldObject.type,
            fieldName: this.props.fieldObject.name,
            fieldPlaceHolder: this.props.fieldObject.placeholder,
            isRequired: this.props.fieldObject.isRequired,
            fieldWidth: this.props.fieldObject.width,
            iconName: this.props.fieldObject.icon
        }
    }
    render(){
        return(
            <div className="input-field-container d-flex" style={{width:this.state.fieldWidth, paddingLeft:"5%"}}>
                <div className="inputs-icon-container" style={{width:"11%",height:"100%", background:"#dcdbdb"}}>
                    <i className={this.state.iconName} style={{fontSize:"13px",margin:"8px"}}></i>
                </div>
                <input type={this.state.fieldtype} name={this.state.fieldName} placeholder={this.state.fieldPlaceHolder} style={{width:"80%", borderLeft:"none", borderRight:"1px solid #c1bfbf",borderTop:"1px solid #c1bfbf",borderBottom:"1px solid #c1bfbf ", paddingLeft:"5px", fontSize:"12px"}} />
            </div>
        )
    }
}

export default InputField;