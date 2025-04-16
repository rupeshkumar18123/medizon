// import React, { useState } from 'react';
// import UserComponent from './UserComponent';

// const MainComponent = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
      
//       if (!response.ok) {
//         throw new Error('Invalid username or password');
//       }

//       const userData = await response.json();
//       setIsLoggedIn(true);
//       setUsername(userData.username);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//     setPassword('');
//     setError(null);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <UserComponent userName={username} onLogout={handleLogout} />
//       ) : (
//         <div>
//           <input 
//             type="text" 
//             placeholder="Username" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//           <button onClick={handleLogin}>Login</button>
//           {error && <p>{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainComponent;

import React, { useState } from 'react';
import UserComponent from './UserComponent';

const MainComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const userData = await response.json();
      setIsLoggedIn(true);
      setUsername(userData.username);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setError(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <UserComponent userName={username} onLogout={handleLogout} />
      ) : (
        <div>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default MainComponent;

