import React, { Component } from 'react';
import UserItem from './UserItem';

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

export default UserList;