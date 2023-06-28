
import React from 'react';
import TableCreator from '../common-components/tableCreater';
import '../../css-files/products.css';
import { NavLink } from 'react-router-dom';

class Phytochemical extends React.Component{
    state = {
        data : [["1", "Kalmegh", "Andrographis paniculata", "Andrographolide NLT 95%", "HPLC", "Liver support"],
            ["2", "Curcumin", "Curcuma longa", "Curcuminoid NLT 95%", "HPLC", "Antioxidant, anti-inflammatory, anti cancer"],
            ["3", "Natural Caffeine", "Coffea robusta", "Caffeine NLT 95%", "HPLC", "Anti-oxidant"],
            ["4", "Piperine", "Piper nigrum", "Piperine NLT 95%", "HPLC", "Treats gastrointestinal disorders, Intermittent fever"],
            ["5", "Steviosides", "Stevia rebaudiana", "Stevioside NLT 90%", "HPLC", "Healthy natural sweetener"],
            ["6", "AKBA", "Boswellia serrata", "AKBA NLT 40%", "HPLC", "Antirheumatic, anti-inflammatory"]],
        head : ["S.No.", "Product Name", "Botanical Name", "Bio - Markers and Limits", "Testing Method", "Major Application"]
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
                    <div><h2>Phytochemical's</h2></div>
                    <NavLink to='/contact-form' style={{color:'white'}}><div className='product-inquiry'>Product Inquiry</div></NavLink>
                </div>
                <br />
                <TableCreator head={this.state.head} rows={this.state.data}/>
            </div>
        )
    }
}


export default Phytochemical;