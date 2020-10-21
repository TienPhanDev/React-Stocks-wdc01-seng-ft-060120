import React from 'react'

const Stock = (props) => {
  const {id, name, price, ticker} = props.stock;
  return(<div>

    <div className="card" onClick={() => props.addStock(id)}>
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            `${ticker}: ${price}`
          }</p>
      </div>
    </div>
  </div>)
};

export default Stock
