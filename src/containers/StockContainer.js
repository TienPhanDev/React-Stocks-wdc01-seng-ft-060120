import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  
  render() {
    
    const stockMapper = (stock) => {
      return <Stock stock={stock} addStock={this.props.addStock}/>
    }
    return (
      <div>
        <h2>Stocks</h2>
        {
        this.props.displayStocks.map(stockMapper)
        }
      </div>
    );
  }
}

export default StockContainer;
