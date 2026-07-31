
import React from 'react';
import TableCreator from '../common-components/tableCreater';
import '../../css-files/products.css';
import { NavLink } from 'react-router-dom'

const data = [["1.", "Black pepper", "Piper nigrum", "Coloring and Flavoring agent"],
    ["2.", "Capsicum", "Capsicum annuum", "Flavoring agent"],
    ["4.", "Cumin", "Cuminum Cyminum", "Anti-Oxidant, Antiseptic, Antipasmodic"],
    ["5.", "Fenugreek", "Trigonella foenum-graecum", "Food Industry, Laxative, Digestive support"],
    ["6.", "Ginger", "Zingiber Officinalis", "Flavoring agent"],
    ["7.", "Turmeric", "Curcuma longa", "Coloring and Flavoring agent, Cosmetics"]];

const head = ["S.No.", "Product Name", "Botanical Name", "Applications"];

function Oleoresines() {
    return (
        <div>
            <div className='product-tablename-container'>
                <NavLink to='/essential-oil' className={({ isActive }) => isActive ? 'active' : ''}><div className='button'>Essential Oil</div></NavLink>
                <NavLink to='/cosmoceutical-herbal-products' className={({ isActive }) => isActive ? 'active' : ''}><div className='button'>Cosmoceutical Herbal Products</div></NavLink>
                <NavLink to='/standardized-herbal-extracts' className={({ isActive }) => isActive ? 'active' : ''}><div className='button'>Standardized Herbal Extracts</div></NavLink>
                <NavLink to='/phytochemical' className={({ isActive }) => isActive ? 'active' : ''}><div className='button'>Phytochemical</div></NavLink>
                <NavLink to='/oleoresines' className={({ isActive }) => isActive ? 'active' : ''}><div className='button'>Oleoresines</div></NavLink>
                <NavLink to='/spray-dried-fruits-and-vegetable-powders' className={({ isActive }) => isActive ? 'active' : ''}><div className='button'>Spray Dried Fruits</div></NavLink>
            </div>
            <div className='product-heading-container'>
                <div><h2>Oleoresines's</h2></div>
                <NavLink to='/contact-form' style={{color:'white'}}><div className='product-inquiry'>Product Inquiry</div></NavLink>
            </div>
            <br />
            <TableCreator head={head} rows={data}/>
        </div>
    );
}

export default Oleoresines;