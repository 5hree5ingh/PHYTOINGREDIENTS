
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common-components/header';
import Header2 from './components/common-components/header2';
import Homepage from './components/homepage-component/homepage';
import Footer from './components/common-components/footer-new';
import './App.css';
import EssentialOil from './components/products-services/essentialOil';
import Standardized from './components/products-services/standardized-herbal-extracts';
import Cosmoceutical from './components/products-services/cosmoceutical-herbal-products';
import Phytochemical from './components/products-services/phytochemical';
import Oleoresines from './components/products-services/oleoresines';
import ContractManufacturing from './components/products-services/contract-manufacturing';
import AboutUs from './components/common-components/about-us';
import Infrastructure from './components/common-components/buisness-devlopement';
import NewsAndEventsComponents from './components/common-components/about-news-and-events';
import ProductDevelopement from './components/common-components/project-2';
import ProjectManagement from './components/common-components/project-3';
import Akba from './components/products-services/ppakba';
import Ginseng from './components/products-services/ppginseng';
import Curcumin95 from './components/products-services/ppcurcumin95';
import Curcumin30 from './components/products-services/ppcurcumin30';
import Gymnema from './components/products-services/gymnemasylvestre';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />  
          <Header2 />
          <Route path="/" component={Homepage} exact />
          <Route path='/essential-oil' component={EssentialOil} exact/>
          <Route path='/standardized-herbal-extracts' component={Standardized} exact/>
          <Route path='/cosmoceutical-herbal-products' component={Cosmoceutical} exact/>
          <Route path='/phytochemical' component={Phytochemical} exact/>
          <Route path='/oleoresines' component={Oleoresines} exact/>
          <Route path='/contact-form' component={ContractManufacturing} exact/>
          <Route path='/about-us' component={AboutUs} exact/>
          <Route path='/infrastructure' component={Infrastructure} exact/>
          <Route path='/events-news' component={NewsAndEventsComponents} exact/>
          <Route path='/product-developement' component={ProductDevelopement} exact/>
          <Route path='/project-management' component={ProjectManagement} exact/>
          <Route path='/akba' component={Akba} exact />
          <Route path='/ginseng' component={Ginseng} exact />
          <Route path='/curcumin95' component={Curcumin95} exact />
          <Route path='/curcumin30' component={Curcumin30} exact />
          <Route path='/gymnema' component={Gymnema} exact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;