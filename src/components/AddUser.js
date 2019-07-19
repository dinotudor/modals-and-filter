import React, {Component} from 'react'

class AddUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      _id: '',
      picture: "http://placehold.it/32x32",
      name: '',
      email: '',
      phone: '',
      role: 'user',
    }
}


  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({ name: '', email: '', phone: '' });
  };

  handleChange(event) {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } );
  }
  render(){

  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder="Name" onChange={(e) => this.handleChange(e)} value={this.state.name} required />

      <label>Email</label>
      <input type="email" name="email" placeholder="email" onChange={(e) => this.handleChange(e)} value={this.state.email} required />

      <label>Phone</label>
      <input type="text" name="phone" placeholder="phone" onChange={(e) => this.handleChange(e)} value={this.state.phone}  />

      <button type="submit" >SUBMIT</button>

      </form>
    </div>
  )
}
}

export default AddUser;
