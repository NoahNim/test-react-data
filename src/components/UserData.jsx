import React from 'react';
import PropTypes from 'prop-types';

const UserData = (props) => {
  return(
    <div>
      <p>
        {props.badge}
        {props.dob}
        {props.position}
      </p>
    </div>
  );
};

UserData.propTypes = {
  badge: PropTypes.string,
  dob: PropTypes.string,
  position: PropTypes.string
};

export default UserData;
