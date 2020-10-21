import React, { Component } from 'react';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';

const url = `http://localhost:3000/stocks`;

class App extends Component {
  state = {
    stocks: [],
    displayStocks: [],
    portfolio: []
  }

  componentDidMount(){
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(stockData => this.setState({
      stocks: stockData,
      displayStocks: stockData,
      portfolio: []
    }))
  }

  addStock = (id) => {
    let newPortfolio = [...this.state.portfolio]

    if ( !newPortfolio.includes( id ) ) {
      newPortfolio.push( id )
      this.setState({
        portfolio: newPortfolio
      })
    }
  }

  removeStock = (id) => {
    let newPortfolio = [...this.state.portfolio];
    
    if ( newPortfolio.includes( id ) ) {
      newPortfolio = newPortfolio.filter( stockId => stockId !== id )
      this.setState({
        portfolio: newPortfolio
      })
    }
  }

  generatePortfolio = () => 
  {
    const stocks = [];
    this.state.portfolio.forEach(id => {
      stocks.push(this.state.displayStocks.find(stock => stock.id === id))
    })
    return stocks;
  }

  handleFilter = (e) => {
    let key = e.target.value;
    let stocks = this.state.stocks.filter(stock => stock.type === key);
    this.setState({
      displayStocks: stocks
    })
  }

  handleChange = (event) => {
    if(event.target.value === 'Price'){
      //console.log(event.target.value, this.state.displayStocks);
      let newDisplayStocks = this.state.displayStocks.sort(function(a, b){
        if(a.price < b.price) { return -1; }
        if(a.price > b.price) { return 1; }
        return 0;
    })
      console.log(newDisplayStocks);
      this.setState({
        displayStocks: newDisplayStocks
      })
    }
    else {
      if(event.target.value === 'Alphabetically'){
        console.log(event.target.value, this.state.displayStocks);
        let newDisplayStocks = this.state.displayStocks.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
        console.log(newDisplayStocks);
        this.setState({
          displayStocks: newDisplayStocks
      })
      }
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
        handleChange={this.handleChange}
        handleFilter={this.handleFilter}
        displayStocks={this.state.displayStocks} 
        portfolio={this.generatePortfolio()}
        
        addStock={this.addStock}
        removeStock={this.removeStock}
        />
      </div>
    );
  }
}

export default App;
