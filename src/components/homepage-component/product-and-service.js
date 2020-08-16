import React from 'react';

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state={
           link: this.props.link,
           title: this.props.title,
           imageURL:this.props.image,
           product_summary: this.props.summary
        }
    }
    render(){
        return (
            
                <div className="feature-type">
                    <a href={this.state.link} >
                        <div class="card">
                            <div className="card-image">
                                <img className="card-img-top" src={this.state.imageURL} alt="Card cap"></img>
                            </div>
                            <div class="card-body" style={{height:"30%"}}>
                                <h5 class="card-title">{this.state.title}</h5>
                                <p>{this.state.product_summary}</p>
                            </div>
                        </div>
                    </a>
                </div>
        )
    }
}
export default Products;