import React from 'react';

class EventAndNews extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title: this.props.eventObj.name,
            image_url: this.props.eventObj.image_url,
            event_summary: this.props.eventObj.summary
        }
    }
    render(){
        return(
            <div class="card" style={{width: "14rem", height:"100%",margin:"20px 35px 35px 35px", overflow:"hidden", boxShadow:"2px 2px 7px 3px grey"}}>
                <img class="card-img-top" src={this.state.image_url} alt="Card cap"></img>
                <div class="card-body" style={{height:"40%"}}>
                    <h5 class="card-title" style={{fontSize:"15px"}}>{this.state.title}</h5>
                    <p class="card-text">{this.state.event_summary}</p>
                    <a href="/hhgh" class="card-link">Card link</a>
                </div>
            </div>
        )
    }
}

export default EventAndNews;