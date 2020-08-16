import React from 'react';

class Testimonials extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.obj.name,
            msg: this.props.obj.msg
        }
    }
    render(){
        return(
            <div className="testimonials-container">
                
                <div className="name-container d-flex">
                    <div className="testimonials-symbol">
                        <div className="child-symbol"></div>
                    </div>
                    <div className="name-heading">
                        <h5>{this.state.name}</h5>
                    </div>
                </div>
                <div className="message-container">
                    <h5>{this.state.msg}</h5>
                </div>
            </div>
        )
    }
}
export default Testimonials;