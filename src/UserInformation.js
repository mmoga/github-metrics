import React from "react";
import "./UserInformation.css";
import PropTypes from 'prop-types';

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

// use PropTypes to check type and requirement of properties
UserInformation.propTypes = {
  info: PropTypes.object.isRequired
}

export default UserInformation;
