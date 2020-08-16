import React from 'react';
import TableCreator from '../common-components/tableCreater';
import '../../css-files/products.css';
import { NavLink } from 'react-router-dom';

class EssentialOil extends React.Component{
    state = {
        data : [["1.", "Ajwain Oil", "Trachyspermum ammi", "Peppery and Thyme like Fragrance"],
        ["2.", "Black pepper Oil", "Piper nigrum", "Peppery Odor"],
        ["3.", "Citronella Oil", "Cymbopogon nardus", "Fresh sweet woody floral with a hint of rose"],
        ["4.", "Clove Leaf Oil", "Syzygium aromaticum", "Strong Spicy Odor"],
        ["5.", "Cumin Seed Oil", "Cuminum cyminum", "Spicy, masculine, earthy and sensual"],
        ["6.", "Davana Oil", "Artemisia pallens", "Sweet, Fruity Odor with the Hint of Vanilla"],
        ["7.", "Dill Oil", "Anethum graveolens", "Light fresh warm and spicy"],
        ["8.", "Fennel Oil", "Foeniculum vulgare", "Slightly Spicy Odor"],
        ["9.", "Palmarosa Oil", "Cymbopogon martini", "Sweet, floral slightly dry with a hint of rose"],
        ["10.", "Ginger Oil", "Zingiber officinale", "Sharp pungent, fiery and fortifying"],
        ["11.", "Kalonji Oil", "Nigella sativa", "Mild, Earthy, Peppery/Spicy, Woody"],
        ["12.", "Tagetes Oil", "Tagetes erecta", "Fresh, sweet, floral, slightly fruity"],
        ["13.", "Nagarmotha Oil", "Cyperus rotundus", "Aromatic, Herby diffusive, spicy"],
        ["14.", "Neem Oil", "Azadirachta indica", "Garlic like Odor"],
        ["15.", "Nutmeg Oil", "Myristica fragrans", "Spicy, sweet and slightly woody fragrance"],
        ["16.", "Patchouli Oil", "Pogostemoncablin", "Strong, earthy and exotic fragrance yet sweet and spicy too"],
        ["17.", "Peppermint Oil", "Mentha arvensis", "Strong, fresh, somewhat bitter-sweet mint"],
        ["18.", "Rosemary Oil", "Rosmarinus officinalis", "Fresh, herbaceous, sweet, slightly medicinal"],
        ["19.", "Tulsi Oil", "Ocimum tenuiflorum", "Warm woody with a hint of camphor"],
        ["20.", "Vetiver Oil", "Chrysopogon zizanioides", "Earthy, smoky aroma with a hint of fresh rain"]],
        head : ["S No.", "PRODUCT NAME","BOTANICAL NAME","AROMA PROFILE"]
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
                    <div><h1>Essential Oils and Oleoresins</h1></div>
                    <NavLink to='/contact-form' style={{color:'white'}}><div className='product-inquiry'>Product Inquiry</div></NavLink>
                </div>
                <br />
                <TableCreator head={this.state.head} rows={this.state.data}/>
            </div>
        )
    }
}


export default EssentialOil;