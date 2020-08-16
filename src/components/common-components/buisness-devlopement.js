import React from 'react';
import '../../css-files/about-us.css';

class BuisnessDevelopement extends React.Component{
    render(){
        return(
            <div className="buisness-develeopement-container">
                <h5 className="buisness-dev-heading"  className="business-heading">Welcome to join us:</h5>
                <p className="buisness-dev-para">We are in constant search of partners that match our values, work ethics and commitment to patients. We regard partnership and collaboration as an integral part of our business strategy.</p>
                <p className="buisness-dev-para">We constantly seek to strengthen our presence, with a range of herbal products.We are currently interested in products that are of high value. We seek products that leverage our core strengths and complement our existing product portfolio like:</p>
                <ul className="buisness-dev-list">
                    <li className="buisness-dev-list-item">Herbal API Products</li>
                    <li className="buisness-dev-list-item">Phytochemicals</li>
                    <li className="buisness-dev-list-item">Gums & Resin based products</li>
                    <li className="buisness-dev-list-item">High value herbal extracts</li>
                    <li className="buisness-dev-list-item">Herbaceuticals</li>
                    <li className="buisness-dev-list-item">Nutraceuticals</li>
                </ul>
            </div>
        )
    }
}

export default BuisnessDevelopement;