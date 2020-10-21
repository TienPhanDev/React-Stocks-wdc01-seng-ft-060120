import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'



class MainContainer extends Component {
  
  

  render() {
    return (
      <div>
        <SearchBar 
        handleChange={this.props.handleChange}
        handleFilter={this.props.handleFilter}
        sortBy = { this.props.sortBy }/>

          <div className="row">
            <div className="col-8">

              <StockContainer
              displayStocks={this.props.displayStocks} 
              addStock={this.props.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
              portfolio={this.props.portfolio}
              removeStock={this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
