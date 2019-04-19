import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      accountHolderName: '',
      accountNumber: '',
      swiftCode: '',
      address: '',
      city: '',
      country: '',
      currency: '',
      type: 1, // individual: 1 | company: 2
      firstname: '',
      lastname: '',
      company: '',
      individual: true
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    const submitData = {
      accountHolderName: this.state.accountHolderName,
      accountNumber: this.state.accountNumber,
      swiftCode: this.state.swiftCode,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      currency: this.state.currency,
      type: this.state.type, // individual | company
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      company: this.state.company
    }
    console.log('submit data ', submitData)
    this.props.onAdd(submitData)

    this.setState({
      accountHolderName: '',
      accountNumber: '',
      swiftCode: '',
      address: '',
      city: '',
      country: '',
      currency: '',
      type: 1, // individual | company
      firstname: '',
      lastname: '',
      company: ''
    })
  }

  // set State
  onChangeType = (event) => {
    this.setState({ 
      type: parseInt(event.target.options[event.target.selectedIndex].value), 
      individual: !this.state.individual 
    })
  }
  onHandleAccountHolderName = (event) => {
    this.setState({ accountHolderName: event.target.value })
  }
  onHandleAccountNumber = (event) => {
    this.setState({ accountNumber: event.target.value })
  }
  onHandleSwiftCode = (event) => {
    this.setState({ swiftCode: event.target.value })
  }
  onHandleAddress = (event) => {
    this.setState({ address: event.target.value })
  }
  onHandleCity = (event) => {
    this.setState({ city: event.target.value })
  }
  onHandleCountry = (event) => {
    this.setState({ country: event.target.value })
    console.log('this.state ', this.state.country)
  }
  onHandleCurrency = (event) => {
    this.setState({ currency: event.target.value })
  }
  onHandleType = (event) => {
    this.setState({ type: event.target.value })
  }
  onHandleFirstname = (event) => {
    this.setState({ firstname: event.target.value })
  }
  onHandleLastname = (event) => {
    this.setState({ lastname: event.target.value })
  }
  onHandleCompany = (event) => {
    this.setState({ company: event.target.value })
  }
  // end set state

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add an Account</h3>
        <input type="text" placeholder="Account Holder Name" onChange={this.onHandleAccountHolderName} defaultValue={this.state.accountHolderName} />
        <input type="text" placeholder="Account Number" onChange={this.onHandleAccountNumber} defaultValue={this.state.accountNumber} />
        <input type="text" placeholder="Swift Code" onChange={this.onHandleSwiftCode} defaultValue={this.state.swiftCode} />
        <input type="text" placeholder="Address" onChange={this.onHandleAddress} defaultValue={this.state.address} />
        <input type="text" placeholder="City" onChange={this.onHandleCity} defaultValue={this.state.city} />
        <input type="text" placeholder="Country" onChange={this.onHandleCountry} defaultValue={this.state.country} />
        <input type="text" placeholder="Curency" onChange={this.onHandleCurrency} defaultValue={this.state.currency} />

        <select onChange={this.onChangeType} defaultValue={this.state.type} >
          <option value="1">Individual</option>
          <option value="2">Company</option>
        </select>

        {
          this.state.individual === true ? (
            <div>
              <input type="text" placeholder="Firstname" onChange={this.onHandleFirstname} defaultValue={this.state.firstname} />
              <input type="text" placeholder="Lastname" onChange={this.onHandleLastname} defaultValue={this.state.lastname} />
            </div>
          ) : ''
        }

        {
          this.state.individual === false ? (
            <div>
              <input type="text" placeholder="Company" onChange={this.onHandleCompany} defaultValue={this.state.company} />
            </div>
          ) : ''
        }

        <button>Add</button>
        <hr />
      </form>
    )
  }
}

export default AddProduct;
