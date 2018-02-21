import React from 'react';
import PropTypes from 'prop-types';

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

    UserItem.propTypes = {
        user: PropTypes.string.isRequired,
        selectedUser: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired,
        removeUser: PropTypes.func.isRequired
    }

export default UserItem;