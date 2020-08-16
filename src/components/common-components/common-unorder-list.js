import React from 'react';

class UnorderedList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listItem:this.props.listItem
        }
    }
    render(){
        return (
            <ul className="common-unorder-list">
                {
                    this.state.listItem.map(value => {
                        return <li className="common-unorder-list-item">{value}</li>
                    })
                }
            </ul>
        )
    }
}

export default UnorderedList;