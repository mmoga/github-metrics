import React from "react";
import "./UserInformation.css";

const UserInformation = props => {
  const { info } = props;
  if (!info) {
    return (
      <h1 className="UserInformation--header vertical-center">
        Please Select a User
      </h1>
    );
  }
  return (
    <div className="UserInformation--container">
      <h1 className="UserInformation--header">
        {info.name}
        <small>({info.login})</small>
      </h1>
      <div className="UserInformation--avatar-container">
        <img
          src={info.avatar_url}
          alt={info.login}
          className="UserInformation--avatar"
        />
      </div>
      <div className="UserInformation--metrics">
        <p>Followers: {info.followers}</p>
        <p>Gists: {info.public_gists}</p>
      </div>
    </div>
  );
};

export default UserInformation;
