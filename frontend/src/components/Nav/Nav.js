// import { Link } from 'react-router-dom';
// import Auth from '../../pages/Auth/Auth';
// import UserLogOut from '../UserLogOut/UserLogOut'

// export default function Nav({user, setUser}) {

//     return (
//         <nav>
//             <Link to='/'>Ramen Time - 拉面时光</Link> &nbsp; | &nbsp;
//             {user?(<>Hello {user.name}&nbsp; | &nbsp; <UserLogOut user={user} setUser={setUser} />
//             <Link to="/orders/new">Cart</Link> &nbsp; | &nbsp;</>):(<>
//                 <Link to = "/menu">Menu</Link>&nbsp; | &nbsp;
//              <Link to="/users">Sign Up/Log In</Link>
//             &nbsp; | &nbsp;
//             <Link to ="/cart"> Cart </Link>
//             </>
//             )}
// {/*
//             <Link to="/login">Login</Link>  &nbsp; | &nbsp;
//             <Link to="/signup">Sign Up</Link> */}

//         </nav>
//     )
// }

import { Link } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import UserLogOut from "../UserLogOut/UserLogOut";

export default function Nav({ user, setUser }) {
  return (
    <nav>
      <Link to="/">Ramen Time - 拉面时光</Link> &nbsp; | &nbsp;
      {user ? (
        <>
          <span>Hello, {user.name}!</span>&nbsp; | &nbsp;
          <Link to="/orders/new">Order</Link> &nbsp; | &nbsp;
          {user.role === 'admin' && (
            <>
              <Link to="/admin">Admin Dashboard</Link> &nbsp; | &nbsp;
            </>
          )}
          <UserLogOut user={user} setUser={setUser} />
          
        </>
      ) : (
        <>
        <Link to="/menu">Menu</Link>
        &nbsp; | &nbsp;
          {" "}
          <Link to="/users">Sign Up/Log In</Link>
        </>
      )}
      {/* <Link to="/login">Login</Link>  &nbsp; | &nbsp;
            <Link to="/signup">Sign Up</Link> */}
    </nav>
  );
}
