import React from 'react';
import { Navigate,  Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token');  // Check if token exists

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };
