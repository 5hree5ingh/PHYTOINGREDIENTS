
import React from 'react';
import TableCreator from '../common-components/tableCreater';
import '../../css-files/products.css';
import { NavLink } from 'react-router-dom'

class SprayDriedFruitsandVegetablePowders extends React.Component{
    state = {
        data : [["1.", "Spray Dried Tomato Powder"],
        ["2.", "Spray Dried Tomato Powder PJ Grade"],
        ["3.", "Spray Dried Tomato Powder (Premium)"],
        ["4.", "Spray Dried Dates Powder"],
        ["5.", "Spray Dried Honey Powder"],
        ["6.", "Spray Dried Tender Coconut Powder"],
        ["7.", "Spray Dried Apple Powder"],
        ["8.", "Spray Dried Orange Powder"],
        ["9.", "Spray Dried Banana Powder"],
        ["10.", "Spray Dried Alphonso Mango Powder"],
        ["11.", "Spray Dried Black Grape Powder"],
        ["12.", "Spray Dried Guava Powder"],
        ["13.", "Spray Dried Pineapple Powder"],
        ["14.", "Spray Dried ChicooPowder"],
        ["15.", "Spray Dried Lychee Powder"],
        ["16.", "Spray Dried Papaya Powder"],
        ["17.", "Spray Dried Pomegranate Powder"],
        ["18.", "Spray Dried Strawberry Powder"],
        ["19.", "Spray Dried Lemon Powder"],
        ["20.", "Spray Dried Lemon (Premium) powder"],
        ["21.", "Spray Dried Watermelon Powder"],
        ["22.", "Spray Dried Cucumber Powder"],
        ["23.", "Spray Dried Curd Powder"],
        ["24.", "Spray Dried Cheese Powder"],
        ["25.", "Spray Dried Cream Powder"],
        ["26.", "Spray Dried Tamarind Powder"],
        ["27.", "Spray Dried Green Chilies Powder"],
        ["28.", "Spray Dried Green Coriander Powder"],
        ["29.", "Spray Dried Onion Powder"],
        ["30.", "Spray Dried Ginger Powder"],
        ["31.", "Spray Dried Garlic Powder"],
        ["32.", "Spray Dried Raspberry Powder"],
        ["33.", "Spray Dried Mulberry Powder"],
        ["34.", "Spray Dried Coconut Milk Powder"],
        ["35.", "Spray Dried Chicory Powder"],
        ["36.", "Spray Dried AmlaPowder (Min 15 %"],
        ["37.", "Spray Dried Custard Apple Powder"],
        ["38.", "Spray Dried Beet root Powder (0.4 %"],
        ["39.", "Spray Dried Mint Powder"],
        ["40.", "Spray Dried Spinach Powder"],
        ["41.", "Spray dried Soya HVP Powder (for"],
        ["42.", "Spray Dried Blueberry Powder"],
        ["43.", "Spray Dried Carrot Powder"],
        ["44.", "Spray Dried Carrot (Premium) powder"],
        ["45.", "Spray Dried Pumpkin Powder"],
        ["46.", "Spray Dried Cranberry Powder"],
        ["47.", "Spray Dried Rose petal Powder"],
        ["48.", "Spray Dried Stevia Powder"],
        ["49.", "Spray Dried Jamun Powder"],
        ["50.", "Spray Dried Raw mango Powder"],
        ["51.", "Spray Dried Cherry Powder"],
        ["52.", "Spray Dried BlackBerry Powder"],
        ["53.", "Spray Dried Kiwi Powder"],
        ["54.", "Spray Dried Peach Powder"]],
        head : ["S.No.", "Product Name"]
    }

    render(){
        return (
            <div>
                <div className='product-tablename-container'>
                    <NavLink to='/essential-oil' activeClassName='active'><div className='button'>Essential Oil</div></NavLink>
                    <NavLink to='/cosmoceutical-herbal-products' activeClassName='active'><div className='button'>Cosmoceutical Herbal Products</div></NavLink>
                    <NavLink to='/standardized-herbal-extracts' activeClassName='active'><div className='button'>Standardized Herbal Extracts</div></NavLink>
                    <NavLink to='/phytochemical' activeClassName='active'><div className='button'>Phytochemical</div></NavLink>
                    <NavLink to='/oleoresines' activeClassName='active'><div className='button'>Oleoresines</div></NavLink>
                    <NavLink to='/spray-dried-fruits-and-vegetable-powders' activeClassName='active'><div className='button'>Spray Dried Fruits</div></NavLink>
                </div>
                <div className='product-heading-container'>
                    <div><h2>Spray Dried Fruits and Vegetable Powders</h2></div>
                    <NavLink to='/contact-form' style={{color:'white'}}><div className='product-inquiry'>Product Inquiry</div></NavLink>
                </div>
                <br />
                <TableCreator head={this.state.head} rows={this.state.data}/>
            </div>
        )
    }
}


export default SprayDriedFruitsandVegetablePowders;