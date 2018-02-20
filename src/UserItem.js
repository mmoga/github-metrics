import React from 'react';

const UserItem = props => {
        const {user, selectedUser, onSelect, removeUser } = props;
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

export default UserItem;