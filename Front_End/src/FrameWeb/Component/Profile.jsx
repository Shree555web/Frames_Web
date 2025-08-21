// // src/components/ProfilePg.jsx
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Profile = () => {
//   // Static user data (from your MySQL table)
//   const [user,setuser] = useState([]);
//   function user1(){
//         console.log(localStorage.getItem('user'))

//   }

//   useEffect(()=>{
//     setuser(JSON.parse(localStorage.getItem('user')));
//   })

//   return (

//     <div className="container my-5">
//       <div className="card mx-auto shadow" style={{ maxWidth: '500px' }}>
//         <div className="card-header text-center bg-info bg-gradient text-white">
//           <h4>User Profile</h4>
//         </div>
//         <div className="card-body text-center">
//           <img
//             src={`http://localhost:3005/uploads/${user.profile}`}
//             alt="Profile"
//             className="rounded-circle mb-3"
//             width="150"
//             height="150"
//           />
//           <h5 className="card-title">{user.name}</h5>
//           <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
//           <p className="card-text mb-1"><strong>Contact:</strong> {user.contact}</p>
//           <p className="card-text mb-1"><strong>Address:</strong> {user.address}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;





import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base_Url from './api';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="d-flex rounded my-1 justify-content-center align-items-center" style={{ minHeight: '100vh', background: 'linear-gradient(150deg, #62c0d1ff, #ff7eb3)' }}>
      <div className="bg-white rounded-4 shadow-lg p-4 text-center position-relative" style={{ maxWidth: '450px', width: '100%' }}>
        
        {/* Profile Image */}
        <div className="position-absolute top-0 start-50 translate-middle" >
          <img
            src={`${Base_Url}/uploads/${user.profile}`}
            alt="Profile"
            className="rounded-circle shadow"
            width="150"
            height="150"
            style={{ border: '5px solid white' }}
          />
        </div>

        {/* Card content */}
        <div style={{ marginTop: '90px' }}>
          <h3 className="fw-bold">{user.name}</h3>
          <p className="text-muted">{user.email}</p>
          <h5 className="card-title">{user.name}</h5>
           <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
           <p className="card-text mb-1"><strong>Contact:</strong> {user.contact}</p>
           <p className="card-text mb-1"><strong>Address:</strong> {user.address}</p>

          {/* <button className="btn btn-gradient mt-3 px-4 py-2 rounded-pill text-white fw-semibold" style={{ background: 'linear-gradient(to right, #ff758c, #ff7eb3)', border: 'none' }}>
            Edit Profile
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

