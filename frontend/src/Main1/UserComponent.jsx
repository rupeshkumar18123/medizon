// import React from 'react';

// const UserComponent = ({ userName, onLogout }) => {
//   return (
//     <div>
//       <p>Welcome, {userName}!</p>
//       <button onClick={onLogout}>Logout</button>
//     </div>
//   );
// };

// export default UserComponent;
import React from 'react';

const UserComponent = ({ userName, onLogout }) => {
  return (
    <div>
      <p>Welcome, {userName}!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserComponent;
