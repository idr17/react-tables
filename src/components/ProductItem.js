import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accountHolderName: this.props.data.accountHolderName,
      accountNumber: this.props.data.accountNumber,
      swiftCode: this.props.data.swiftCode,
      address: this.props.data.address,
      city: this.props.data.city,
      country: this.props.data.country,
      currency: this.props.data.currency,
      type: this.props.data.type, // individual: 1 | company: 2
      firstname: this.props.data.firstname,
      lastname: this.props.data.lastname,
      company: this.props.data.company,
      isEdit: false
    }
  }

  onDelete = () => {
    const { onDelete, data } = this.props
    onDelete(data.accountNumber)
  }

  onEdit = () => {
    this.setState({ isEdit: true })
  }

  onEditSubmit = (event) => {
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
    
    this.props.onEditSubmit(submitData, this.state.accountNumber)
    
    this.setState({ isEdit: false })
  }

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

  render() {

    const { data } = this.props

    return (
      <div>
        {
          this.state.isEdit ? (
            <form onSubmit={this.onEditSubmit}>
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
                this.state.type === 1 ? (
                  <div>
                    <input placeholder="Firstname" ref={firstnameI => this.firstnameI = firstnameI} defaultValue={this.props.data.firstname} />
                    <input placeholder="Lastname" ref={lastnameI => this.lastnameI = lastnameI} defaultValue={this.props.data.lastname} />
                  </div>
                ) : (
                  <input placeholder="Company" ref={companyI => this.companyI = companyI} defaultValue={this.props.data.company} />
                )
              }

              <button>Save</button>
            </form>
          ) : (
            <div>
              <span>{data.accountHolderName}</span>
              <span>{data.accountNumber}</span>
              <span>{data.swiftCode}</span>
              <span>{data.address}</span>
              <span>{data.city}</span>
              <span>{data.country}</span>
              <span>{data.currency}</span>
              <span>{data.type}</span>
              <span>{data.firstname}</span>
              <span>{data.lastname}</span>
              <span>{data.company}</span>
              <span><button onClick={this.onEdit}>Edit</button></span>
              <span><button onClick={this.onDelete}>Delete</button></span>
            </div>
          )
        }
      </div>
    )
  }
}

export default ProductItem;
