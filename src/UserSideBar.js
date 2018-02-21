import React from 'react';
import UserList from "./UserList";
import "./UserSideBar.css";
import PropTypes from 'prop-types';

const UserSideBar = props => {
  const { users, selectedUser, onSelect, removeUser } = props;

  return (
    <div className="UserSideBar--container">
      <h1 className="UserSideBar--header">GitHub Users</h1>
      <UserList
        users={users}
        selectedUser={selectedUser}
        onSelect={onSelect}
        removeUser={removeUser}
      />
      <div className="UserSideBar--user-form">
        <form onSubmit={e => props.addUser(e, props.username)}>
          <input
            type="text"
            value={props.username}
            placeholder="GitHub Username"
            onChange={e => props.updateUser(e)}
          />
        </form>
      </div>
    </div>
  );
};

UserSideBar.propTypes = {
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
}

export default UserSideBar;
