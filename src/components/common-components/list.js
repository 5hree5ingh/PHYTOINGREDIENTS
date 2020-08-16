import React from 'react';

class UnOrderList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listOptions:this.props.listOptions,
            isVisible:this.props.isVisible
        }
    }
    render(){
        return(
            <ul className="web-heading-list">
                {
                    this.state.listOptions.map(value => {
                        return <li>{value}</li>
                    })
                }
            </ul>
        )
    }
}

export default UnOrderList;