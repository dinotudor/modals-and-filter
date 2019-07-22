import React, { Component } from 'react'
import usersData from './../assets/users.json'
import EditUser from './EditUser'
import AddUser from './AddUser'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper';

const style = {
  background: 'white',
  margin: '40px',
  padding: '40px',
  color: 'white',
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
    usersCopy.push(newUser)

    this.setState({ users: usersCopy })
  }

  render() {
    let filteredUsers = this.state.users.filter(
      (users) => {
        return users.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ||
        users.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ||
        users.role.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
      }
    )
    return(
      <div>
        <AddUser addUser={this.addUserHandler}/>
        <section>
          <label className="search">Search</label>
            <input
              className="search-input"
              type="text"
              placeholder="Search by name, email, role ..."
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
        </section>
        <Paper>
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
                        <td><button onClick={(e) => {this.handleOpen(oneUser)}}><i class="material-icons">edit</i></button></td>
                      </tr>
                  </tbody>
            })}
      </table>
      </Paper>
      <Modal style={style} open={this.state.open}>
        <EditUser userToEdit={this.state.temporalUser} editUser={this.editUserHandler} closeModal={this.handleClose}/>
      </Modal>
      </div>
    )
  }
}
