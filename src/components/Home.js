import React, { Component } from 'react'
import usersData from './../assets/users.json'
import EditUser from './EditUser'
import AddUser from './AddUser'
import Modal from '@material-ui/core/Modal'
//TEST
import Add2 from './Add2'

const style = {
  background: 'pink',
  margin: '40px',
  border: '5px solid pink'
};

export default class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        users: usersData,
        search: "",
        open: false,
        temporalUser: ''
      }

      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(oneUser) {
    this.setState({ open: true })
    this.setState({ temporalUser: oneUser })
  }

  handleClose(){
    this.setState({ open: false });
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  editUserHandler = (editedUser) => {
    const usersCopy = [...this.state.users]
    const newId = editedUser._id
    const index = usersCopy.findIndex(item => item._id === newId)
    if (editedUser.name !==  this.state.users.name || editedUser.email !== this.state.users.email || editedUser.phone !== this.state.users.phone) {
    usersCopy.splice(index, 1, editedUser)
    this.setState({ users: usersCopy })
    } else {
      this.handleClose()
    }
  }

  addUserHandler = (newUser) => {
    const usersCopy = [...this.state.users]
    usersCopy.push(newUser);

    this.setState({ users: usersCopy })
  }


  render() {
    let filteredUsers = this.state.users.filter(
      (users) => {
        return users.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ||
        users.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ||
        users.role.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
      }
    )
    return(
      <div>
        <AddUser addUser={this.addUserHandler}/>
        <Add2 addUser={this.addUserHandler} closeModal={this.handleClose} to="/Add2">Add2</Add2>
        <label>Search</label>
            <input
              className="input"
              type="text"
              placeholder="Search by name, email, role ..."
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
          />
        <table className="highlight">
          <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Edit</th>
              </tr>
          </thead>
          {filteredUsers.map((oneUser, index)=>{
            return <tbody key={oneUser._id}>
                      <tr>
                        <td><img src={oneUser.picture} alt={'avatar'}/></td>
                        <td> {oneUser.name} </td>
                        <td> {oneUser.email} </td>
                        <td> {oneUser.role} </td>
                        <td><button onClick={(e) => {this.handleOpen(oneUser)}}>Edit user</button></td>
                      </tr>
                  </tbody>
            })}
      </table>
      <Modal style={style} open={this.state.open}>
        <EditUser userToEdit={this.state.temporalUser} editUser={this.editUserHandler} closeModal={this.handleClose}/>
      </Modal>
      </div>
    )
  }
}
