import React from 'react';
// import Footer from './footer';

class FooterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listItem :this.props.contentItem.listItem,
            title:this.props.contentItem.title
        }
    }

    render(){
        return (
            <div className="footer-content">
                <h5 className="footer-content-title">{this.state.title}</h5>
                <ul className="footer-content-list" style={{padding:"0 25px 0 0"}}>
                    {
                        this.state.listItem.map(value => {
                            return <li className="footer-content-list-item"><a href={value.link}>{value.itemName}</a></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default FooterComponent;