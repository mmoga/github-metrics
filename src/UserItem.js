import React, { Component } from 'react';

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

export default UserItem;