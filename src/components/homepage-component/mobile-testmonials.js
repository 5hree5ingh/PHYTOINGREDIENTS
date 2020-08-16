import React from 'react';

class MobileTestimonials extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="mobile-testimonials-container">
                {
                    this.props.obj.map(value => {
                        return <div className="mobile-testimonials-content">
                            <h5>{value.name}</h5>
                            <p>{value.msg}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default MobileTestimonials;