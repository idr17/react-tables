import React, { Component } from "react";

import CustomHtml from './customHtml'

let datas = [
  {
    amount: 23.4,
    total: 0,
    price: 6.269
  },
  {
    amount: 20.3,
    total: 0,
    price: 6.269
  },
  {
    amount: 3.6,
    total: 0,
    price: 6.269
  },
  {
    amount: 4.1,
    total: 0,
    price: 6.269
  },
  {
    amount: 0.4,
    total: 0,
    price: 6.269
  },
  {
    amount: 500.2,
    total: 0,
    price: 6.269
  }
];

class TableA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableA: []
    };
  }

  componentDidMount() {
    let tableA = this.calculate()
    this.setState({ tableA })
  }

  calculate() {
    let newData = datas
    for (let i = 0; i < newData.length; i++) {
      if (i === 0) {
        newData[i].total += newData[i].amount;
      } else {
        newData[i].total = newData[i-1].total + newData[i].amount;
      }
    }

    let total = newData[newData.length-1].total
    for (let i = 0; i < newData.length; i++) {
      newData[i].percent = (newData[i].total / total * 100).toFixed(2);
    }

    return newData
  }

  render() {

    return (
      <div>
        <div className="divx header">
          <div>Total</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        {
          this.state.tableA.map((item, index) => {
            return (
              <div key={index}>
                <CustomHtml data={item} index={index} float={this.props.float} name={this.props.name} />
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default TableA;
