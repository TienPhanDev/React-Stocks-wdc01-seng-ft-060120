import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  
  render() {

    const stockMapper = (stock) => {
      return <Stock key={stock.id} stock={stock} addStock={this.props.removeStock}/>
    }

    return (
      <div>
        <h2>My Portfolio</h2>
        {
        this.props.portfolio.map(stockMapper)
        }
      </div>
    );
  }

}

export default PortfolioContainer;
