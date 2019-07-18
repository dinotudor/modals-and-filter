import React, {Component} from 'react'

class EditUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      _id: props.userToEdit._id,
      picture: "http://placehold.it/32x32",
      name: props.userToEdit.name,
      email: props.userToEdit.email,
      phone: props.userToEdit.phone,
      role: props.userToEdit.role,
    }
  }

  componentDidMount() {
    const { _id, picture, name, email, phone, role} = this.props.userToEdit;
    this.setState({ _id, picture, name, email, phone, role });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } );
    this.props.editUser(this.state);
    this.props.closeModal();
  };

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.name)
    // All our inputs have same `name` as the `state` property name.
    let { name, value } = event.target;
    this.setState( { [name]: value } );
    console.log(this.state)

  }
  render(){


    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
      <label>Name</label>
      <input type="text" name="name" placeholder={this.state.name} onChange={this.handleChange} value={this.state.name} required />

      <label>Email</label>
      <input type="email" name="email" placeholder={this.state.email} onChange={this.handleChange} value={this.state.email} required />

      <label>Phone</label>
      <input type="text" name="phone" placeholder={this.state.phone} onChange={this.handleChange} value={this.state.phone}  />

      <button type="submit" >SUBMIT</button>

      </form>
    </div>
  )
}
}

export default EditUser;
