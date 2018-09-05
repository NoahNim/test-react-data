import React from 'react';
import UserData from './UserData.jsx';


const UserDataListInfo = [
  {
    badge: '334',
    dob: '1980',
    position: 'lead'
  },
  {
    badge: '335',
    dob: '1990',
    position: 'manager'
  }
];

const UserDataList = () => {
  return(
    <div>
      {UserDataListInfo.map((info, index) =>
        <UserData
          badge={info.badge}
          dob={info.dob}
          position={info.position}
          key={index}
        />
      )}
    </div>
  );
};

export default UserDataList;
