import React from 'react';
import PropTypes from 'prop-types';

const UserName = (props) => {
  return (
    <div>
      <p>
        {props.name}
        {props.password}
      </p>
    </div>
  );
};

UserName.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string
};

export default UserName;
