import React from 'react';

function EventComponent({ eventObj }) {
    return (
        <div className="event-component-container-project d-flex">
            <div className="event-image-container">
                <img src={eventObj.image_url} alt="event"></img>
            </div>
            <div className="event-summary-container" >
                <div className="evnet-heading-container">
                    <strong style={{fontSize:"15px",marginTop:"5px", color:"black"}}>{eventObj.name}</strong>
                </div>
                <div className="event-discription-container" style={{textAlign:'justify', marginTop: '5px'}}>
                    <p style={{fontSize:"13px", color:"black"}}>{eventObj.summary}</p>
                </div>
            </div>
        </div>
    );
}

export default EventComponent;