import React from 'react';

class PopularEventComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event_name:this.props.eventObj.name,
            event_summary:this.props.eventObj.summary,
            event_image:this.props.eventObj.image_url
        }
    }
    render(){
        return(
            <div className="popular-event-component-container d-flex">
                <div className="event-image-container">
                    <img src={this.state.event_image} alt="event"></img>
                </div>
                <div className="event-summary-container">
                    <div className="evnet-heading-container">
                        <h5>{this.state.event_name}</h5>
                    </div>
                    <div className="event-discription-container">
                        <p>{this.state.event_summary}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularEventComponent;