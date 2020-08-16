
import React from 'react';
import TableCreator from '../common-components/tableCreater';
import '../../css-files/products.css';
import { NavLink } from 'react-router-dom';

class Standardized extends React.Component{
    state = {
        data : [["1.", "Amla extract", "Emblica officinalis", "Hydrolyzable tannin 20%-45%", "Gravimetric", "Anti aging, skin & hair care"],
            ["2.", "Aloe", "Aloe vera", "200:01:00", "Gravimetric", "Cosmetic ingredient"],
            ["3.", "Garlic extract", "Allium sativum", "Allin -1.3%", "HPLC", "Antilipemic, Anticholesteremic, Anitrheumatic"],
            ["4.", "Onion extract", "Allium cepa", "Quercetin", "HPLC", "Hypolipidemic"],
            ["5.", "Andrographis extract", "Andrographis paniculata", "Andrographolides 10%,20% & 95%", "HPLC", "Liver support"],
            ["6.", "Ashwagandha extract", "Withania somnifera", "Total withanolides 1.5%-2.5% & 5.0%", "Gravimetric", "Immune support, adaptogen"],
            ["7.", "Bacopa extract", "Bacopa monnieri", "Bacosides 10% , 20.0% & 50%", "HPLC/UV", "Memory support"],
            ["8.", "Banaba extract", "Lagerstroemia speciosa", "Corosolic acid 1% & 2%", "HPLC", "Blood sugar support & weight management"],
            ["9.", "Black pepper extract", "Piper nigrum", "Piperin 95%", "HPLC", "Gastrointestinal disorders, intermittent fever"],
            ["10.", "Boswellia extract", "Boswellia serrata", "Boswellic acids 60% & 90%", "Gravimetric / HPLC", "Skin care, bone health care"],
            ["11.", "AKBA", "Boswellia serrata", "AKBA- 10%,30% & 40%", "HPLC", "Anti-inflammatory"],
            ["12.", "Bamboo extract", "Bambusa arundinacea", "Natural silica 75%", "Gravimetric", "Regulates menstrual period and help digestion of proteins"],
            ["13.", "Calcium sennosides", "Cassia angustofolia", "Sennosides 6.0% ,10% & 20%", "HPLC", "Laxative"],
            ["14.", "Cassia extract", "Cassia fistula", "Saponin 10%", "Gravimetric", "skin diseases and in constipation"],
            ["15.", "Cissus extract", "Cissus quandrangularis", "Total Ketosterones 2.5% 10% & 40%", "Gravimetric", "Bone health care"],
            ["16.", "Coleus forskohlii extract", "Coleus forskohlii", "Forskolin 1.0% , 10.0% & 20%", "HPLC", "Weight management"],
            ["17.", "Coffee bean extract", "Coffea robusta", "Chlorogenic acid 45%,50% & 60%", "HPLC", "Antioxidant & weight management"],
            ["18.", "Cinamon extract", "Cinnamomum cassia", "Polyphenols 10% & 20%", "UV", "Anti diabetic, antioxidant"],
            ["19.", "Papaya leaf extract", "Carica papaya", "Tannin 5%", "UV", "Antitumor, increase platelet levels in blood, dengue fever and digestive"],
            ["20.", "Eclipta alba extract", "Eclipta alba", "Bitters -3%", "Gravimetric", "liver tonic"],
            ["21.", "Fenugreek extract", "Trigonella foenum graecum", "Saponin 50%", "Gravimetric", "Blood sugar support and cardiovascular support"],
            ["22.", "Guggul extract", "Commiphora mukul", "Guggulsterones Min.2.5%", "HPLC/UV", "Anti-inflammatory"],
            ["23.", "Ginger extract", "Zingiber officinalis", "Gingerols 5% & 20%", "HPLC", "Digestive support and Anti-inflammatory"],
            ["24.", "Ginkgo biloba extract", "Ginkgo biloba", "Flavonoe glycosides -24% & terpene lactones -6%", "HPLC", "Memory and concentration enhancer"],
            ["25.", "Gotu Kola extract", "Centella asiatica", "Total Triterpenes 10%, 20% & 40%", "HPLC", "Skin care and memory support"],
            ["26.", "Green Tea extract", "Camellia sinensis", "Polyphenols 25% & 90%", "UV", "Anti-oxidant, anti cancer"],
            ["27.", "Gymnema extract", "Gymnema Sylvestre", "Gymnemic acid 25%, 50% & 75%", "Gravimetric", "Anti-diabetic and stimulates heart and circulatory system"],
            ["28.", "Grape seed extract", "Vitis vinifera", "Proanthocyanidins 95%", "UV", "Antioxidant and general health"],
            ["29.", "Garcinia extract Hydroxy citric acid salts", "Garcinia cambogia", "Hydroxycitric acid 50% & 60% Ca, Mg ,K salt & water soluble salt", "HPLC", "Weight management"],
            ["30.", "Garcinia extract Hydroxy citric acid salts", "Garcinia cambogia", "Hydroxycitric acid 65% & 70 % Mg salt (water soluble salt", "HPLC", "Weight management"],
            ["30.", "Garcinia extract Hydroxy citric acid salts", "Garcinia cambogia", "Hydroxycitric acid 65% & 70 % Mg salt (water soluble salt", "HPLC", "Weight management"],
            ["31.", "Mangosteen extract", "Garcinia mangostana", "Mangosteen 10% & 40%", "HPLC", "Dietary supplement, for diarrhoea, dysentery, skin diseases, fever and urinary disorders"],
            ["32.", "Horse chestnut extract", "Aesculus hippocastanum", "Aescin , 20% & 40%", "HPLC / UV", "To treat hardening of the arteries, varicose veins, phlebitis, leg ulcers, hemorrhoids and frostbite"],
            ["33.", "Licorice extract", "Glycyrrhiza glabra", "Glycyrrhizic Acid 10%-25%", "HPLC / Gravimetric", "Digestive support"],
            ["34.", "Marigold extract", "Tagetes erecta", "Lutein 10% & 20%", "UV / HPLC", "Natural food colourant"],
            ["35.", "Mucuna extract", "Mucuna pruriens", "L-DOPA 10% & 50%", "HPLC", "Men’s health support and Parkinson’s disease"],
            ["36.", "Momordica extract", "Momordica charantia", "Bitter Principles 2.5%-15%", "Gravimetric", "Blood sugar support"],
            ["37.", "Moringa leaf extract", "Moringa oleifera", "Protein 15%", "Kjeldahl", "Immunes support"],
            ["38.", "Moringa seed extract", "Moringa oleifera", "Protein 60%", "Kjeldahl", "Immunes support"],
            ["39.", "Noni extract", "Morinda citrifolia", "Alkaloids -0.07%", "Gravimetric", "In Colic, seizures, cough, diabetes, urinary problem, menstrual problem,"],
            ["40.", "Neem leaf extract", "Azadirachta indica", "Bitter Principles 2.5% & 10%", "Gravimetric", "Antibacterial"],
            ["41.", "Neem bark extract", "Azadirachta indica", "Bitter principles 2.5% & 5.0%", "Gravimetric", "Antibacterial"],
            ["42.", "Phyllanthus amarus extract", "Phyllanthus amarus", "Bitter principles 2.5% & 5.0%", "Gravimetric", "Hepatocare"],
            ["43.", "Pomegranate extract", "Punica granatum", "Ellagic acid 5% & 40%", "HPLC", "Versatile antioxidant"],
            ["44.", "Kutki extract", "Picrorhiza kurroa", "Kutkin -5% Bitter principles 8% & 10 %", "HPLC Gravimetric", "Liver support"],
            ["45.", "Ginseng", "Panax ginseng", "Ginsengoside 20%", "HPLC", "Improve thinking, memory enhancer, physical stamina, athletic endurance"],
            ["46.", "Shatavari extract", "Asparagus racemosus", "Saponin 20%-50%", "Gravimetric", "Galactagogue"],
            ["47.", "Saw palmetto extract", "Serenoa repens", "Fatty acid 45% & 90%", "GC-HS", "Prostate enlargement, increase testosterone level and reduce hair loss"],
            ["48.", "Shilajit extract", "Asphaltum mineral pitch", "Total fulvic acid 2.5%", "Gravimetric", "Immune support"],
            ["49.", "Safed musli", "Chlorophytum borivilianum", "Saponin 20% & 40%", "Gravimetric", "Men’s health support"],
            ["50.", "Silymarin extract", "Silybum marianum", "Silymarin 70% & 80%", "UV", "Hepato protective"],
            ["51.", "Spirulina powder", "Spirulina platensis", "Protein 60%", "Kjeldahl", "Diabetes, hypertension, hypolipidemic"],
            ["52.", "Tribulus extract", "Tribulus terrestris", "Saponin 20% & 80%", "Gravimetric", "Immune support"],
            ["53.", "Triphala extract", "Emblica officinalis, Terminalia chebula and Terminalia bellirica", "Tannin 20% & 40%", "Titration", "Digestive support, rejuvenator and laxative"],
            ["54.", "Tulsi extract", "Ocimum sanctum", "Ursolic acid 1.5% & 2.5%", "HPLC", "Antipyretic, anti cough and cold, anti-oxidant"],
            ["55.", "Tulsi extract", "Ocimum sanctum", "Tannin 10%", "Gravimetric", "Antipyretic, anti cough and cold, anti-oxidant"],
            ["56.", "Turmeric extract", "Curcuma longa", "Curcuminoids 95%", "HPLC / UV", "Antioxidant"],
            ["57.", "Arjuna extract", "Terminalia arjuna", "Tannin-30%", "Gravimetric", "Circulation support"],
            ["58.", "Terminalia extract", "Terminalia bellirica", "Tannin -40%", "Gravimetric", "Detoxifier"],
            ["59.", "Tinospora extract", "Tinospora cordifolia", "Bitter 2.5% & 5%", "Gravimetric", "Immune support"],
            ["60.", "Vasaka extract", "Adhatoda vasica", "Alkaloids 1%-5%", "Gravimetric", "Respiratory support"],
            ["61.", "Vasaka extract", "Adhatoda Vasica", "1% Vasicine 2% Total alkaloids", "HPLC Gravimetric", "Respiratory support, cough cold aid"],
            ["62.", "Lodra extract", "Symplocos racemosa extract", "Saponin- 5%", "Gravimetric", "Eye disorders, diarrhea"],
            ["63.", "White kidney beans extract", "Phaseolus vulgaris", "Amylase Inhibitory activity 2000, 10,000-20,000 unit/gm", "Gravimetric", "Weight management"],
            ["64.", "Valeriana ext", "Valeriana wallichii", "Valerianic acids o.8%", "HPLC", "Calms nervous system, used in insomnia"],
            ["65.", "Nano-Curcumin", "Curcuma longa particle size 20-100 NMT", "Curcuminoid NLT 40%", "HPLC", "Antioxidant, anti-inflammatory, anti cancer"]],
        head : ["S. No", "Product Name", "Botanical Name", "Bio -Markers and Limits", "Testing Method", "Major Application"]
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
                    <div><h1>Standardized Herbal Extracts</h1></div>
                    <NavLink to='/contact-form' style={{color:'white'}}><div className='product-inquiry'>Product Inquiry</div></NavLink>
                </div>
                <br />
                <TableCreator head={this.state.head} rows={this.state.data}/>
            </div>
        )
    }
}


export default Standardized;