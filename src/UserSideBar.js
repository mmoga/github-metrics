import React from 'react';
import UserList from "./UserList";
import "./UserSideBar.css";

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

export default UserSideBar;
