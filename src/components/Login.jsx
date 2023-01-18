// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export function Login() {
//   let url = "http://localhost:3001";
//   let history = useNavigate();

//   //React state
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   const onLogin = () => {
//     const loginData = {
//       username: username,
//       password: password,
//     };
//     axios.post(`${url}/users/login`, loginData).then((response) => {
//       if (response.data.error) {
//         loginErrText.innerText = response.data.error;
//       } else {
//         history("/dashboard");
//       }
//     });
//   };

//   return (
//     <div className="login-container">
//       <div className="login-entry-container">
//         <div className="login-entry">
//           <input
//             type="text"
//             className="login-input"
//             placeholder="username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             className="login-input"
//             placeholder="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="login-btn" onClick={() => onLogin()}>
//             LOGIN
//           </button>
//           <p className="sign-up-text">
//             Are you a new user?{" "}
//             <Link to="/signup" className="link-text">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
