import React from 'react';

class EventComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event_name:this.props.eventObj.name,
            event_summary:this.props.eventObj.summary,
            event_image:this.props.eventObj.image_url,
            download_file: this.props.eventObj.fileUrl
        }
    }
    render(){
        return(
            <div className="event-component-container d-flex">
                <div className="event-image-container">
                    <img src={this.state.event_image} alt="event"></img>
                </div>
                <div className="event-summary-container" >
                    <div className="evnet-heading-container">
                        <h5 style={{fontSize:"15px",marginTop:"5px", color:"black"}}>{this.state.event_name}</h5>
                    </div>
                    <div className="event-discription-container">
                        <p style={{fontSize:"13px", color:"black"}}>{this.state.event_summary}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventComponent;