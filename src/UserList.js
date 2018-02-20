import React from "react";
import UserItem from "./UserItem";

const UserList = props => {
  const { users, selectedUser, onSelect, removeUser } = props;
  const Users = users.map((user, index) => (
    <UserItem
      key={index}
      user={user}
      onSelect={onSelect}
      selectedUser={selectedUser}
      removeUser={removeUser}
    />
  ));
  return <ul className="UserSideBar--list">{Users}</ul>;
};

export default UserList;
