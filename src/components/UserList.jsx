import React from 'react';
import UserName from './UserName.jsx';

const ListOfUsers = [
  {
    name: 'Bob',
    password: '12345'
  },
  {
    name: 'Jaquei',
    password: '54321'
  }
];

const UserList = () => {
  return(
    <div>
      <hr/>
      {ListOfUsers.map((user, index) =>
        <UserName
          name={user.name}
          password={user.password}
          key={index}
        /> )} 
    </div>
  );
};

export default UserList;
