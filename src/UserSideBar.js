import React, { Component } from 'react';
import './UserSideBar.css';

class UserItem extends Component {
    render(){
        const {user, selectedUser, onSelect, removeUser } = this.props;
        const classes = selectedUser === user ? 
                            'UserSideBar--list-item active' : 
                            'UserSideBar--list-item';
        return (<li className={classes}>
                    <button onClick={() => onSelect(user)}>
                        {user}
                    </button>
                    <span onClick={() => removeUser(user)}>
                        X
                    </span>
                </li>);
    }
}
class UserList extends Component {
    render(){
        const { users, selectedUser, onSelect, removeUser } = this.props;
        const Users = users.map((user, index) => <UserItem 
                                                        key={index}
                                                        user={user}
                                                        onSelect={onSelect}
                                                        selectedUser={selectedUser}
                                                        removeUser={removeUser}
                                                        />)
        return (
            <ul className='UserSideBar--list'>
                {Users}
            </ul>
        );
    }
}
class UserSideBar extends Component {
    render(){
        const { users, selectedUser, onSelect, removeUser } = this.props;
        
        return (
            <div className="UserSideBar--container">
                <h1 className='UserSideBar--header'>GitHub Users</h1>
                <UserList 
                    users={users}
                    selectedUser={selectedUser}
                    onSelect={onSelect}
                    removeUser={removeUser}/>
                <div className="UserSideBar--user-form">
                    <form onSubmit={(e) => this.props.addUser(e, this.props.username)}>
                        <input type="text" 
                            value={this.props.username} 
                            placeholder='GitHub Username'
                            onChange={e => this.props.updateUser(e)}/> 
                    </form> 
                </div>
            </div>
        );
    }
}

export default UserSideBar;