import React, {Component} from 'react';

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
    };
  }

  componentDidMount() {
    const { _id, picture, name, email, phone, role} = this.props.userToEdit;
    this.setState({ _id, picture, name, email, phone, role })
  }

  closeModal = () => {
    const { _id, picture, name, email, phone, role} = this.props.userToEdit;
    this.setState({  _id, picture, name, email, phone, role })
    this.props.closeModal()
 }

 resetForm = (event) => {
  event.preventDefault()
  this.setState({  name:'', email:'', phone:''})
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
    let { name, value } = event.target;
    this.setState( { [name]: value } );

  }
  render(){
    return (
      <section className="add-parent">
      <h3>Edit User:</h3>
        <button className="btn-blue" onClick={this.resetForm}>Clear</button>
        <form className="add-parent"onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder={this.state.name} onChange={this.handleChange} value={this.state.name} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder={this.state.email} onChange={this.handleChange} value={this.state.email} required />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name="phone" placeholder={this.state.phone} onChange={this.handleChange} value={this.state.phone}  />
          </div>
          <button className="btn-blue" type="submit" >Confirm</button>
          <button className="btn-blue" onClick={this.closeModal}><i class="material-icons">close</i></button>
        </form>
    </section>
  )
}
}

export default EditUser;
