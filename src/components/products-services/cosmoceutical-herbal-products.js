
import React from 'react';
import TableCreator from '../common-components/tableCreater';
import '../../css-files/products.css';
import { NavLink } from 'react-router-dom';


class Cosmoceutical extends React.Component{
    state = {
        data : [["1.", "Amla extract powder", "Embilica officinalis", "Tannin NLT 40%", "Gravimetric", "Hair care especially to get long and lustrous hair"],
            ["2.", "Amla liquid extract", "Emblica officinalis", "Tannin NLT 5%", "Gravimetric", "Hair care especially to get long and lustrous hair"],
            ["3.", "Bhringraj extract", "Eclipta alba", "Bitters NLT 2%", "Gravimetric", "Hair care to promote the growth of healthy and strong hair"],
            ["4.", "Bhringraj liquid extract", "Eclipta alba", "Bitter NLT 0.5%", "Gravimetric", "Hair care to promote the growth of healthy and strong hair"],
            ["5.", "Boswellia extract", "Boswellia serrata", "Boswellic Acid NLT 75%", "Gravimetric", "Anti-inflammatory"],
            ["6.", "Brahmi extract", "(Bacopa monnieri", "Bacosides NLT 10%", "HPLC", "Hair care especially to get luxuriously long, shiny hair"],
            ["7.", "Centella extract", "Centella asiatica", "Asiaticosides NLT 10% & Total Triterpenes NLT 40%", "HPLC", "Skin conditioning agent, supports wound healing, circulation, texture and skin integrity"],
            ["8.", "Coffee Bean extract", "Coffea arabica", "Total Chlorogenic acid NLT 60%", "HPLC", "Antioxidant, anti-aging, hair care"],
            ["9.", "Licorice extract", "Glycyrrhiza glabra", "Glycyrrhizic Acid NLT 20%", "HPLC", "Skin conditioning & smoothening"],
            ["10.", "Hibiscus liquid extract", "Hibiscus rosa-sinensis", "Bitters 10% & 20%", "Gravimetric", "Natural hair colorant"],
            ["11.", "Neem extract powder", "Azadirachta indica", "Bitters NLT 5%", "Gravimetric", "Antiseptic"],
            ["12.", "Neem liquid extract", "Azadirachta indica", "Bitters NLT 0.5%", "Gravimetric", "Antiseptic"],
            ["13.", "Pomegranate extract", "Punica granatum", "Ellagic Acid NLT 40%", "HPLC ,UV", "Antioxidant, skin lightening"],
            ["14.", "Shikakai liquid extract", "Acacia concinna", "Saponin NLT 10% & 20%", "Gravimetric", "Natural surfactant, hair care"],
            ["15.", "Tulsi extract powder", "Ocimum sanctum", "Tannin NLT 10%", "Gravimetric", "Skin care to avoid acne and pimples"],
            ["16.", "Tulsi liquid extract", "Ocimum sanctum", "Tannin NLT 0.5%", "Gravimetric", "Skin care to avoid acne and pimples"],
            ["17.", "White Curcumin", "Curcuma longa", "Tetrahydrocurcuminoids NLT 95%", "HPLC", "Skin whitener, antioxidant"]],
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
                </div>
                <div className='product-heading-container'>
                    <div><h2>Cosmoceutical Herbal Products</h2></div>
                    <NavLink to='/contact-form' style={{color:'white'}}><div className='product-inquiry'>Product Inquiry</div></NavLink>
                </div>
                <br />
                <TableCreator head={this.state.head} rows={this.state.data}/>
            </div>
        )
    }
}


export default Cosmoceutical;