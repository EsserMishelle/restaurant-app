import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import UserLogOut from "../UserLogOut/UserLogOut";

export default function Nav({ user, setUser }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        Home - 拉面时光
      </Link>

      <Link className={styles.links1} to="/about">
        About
      </Link>

      {user ? (
        <>
          <div className={styles.helloDiv}>Hello, {user.name}! </div>
          <UserLogOut className={styles.links2} user={user} setUser={setUser} />
          <Link className={styles.links3} to="/orders/new">
            Order
          </Link>
          {user.role === "admin" && (
            <>
              <Link className={styles.links6} to="/admin">
                Admin Dashboard
              </Link>{" "}
              &nbsp; | &nbsp;
            </>
          )}
        </>
      ) : (
        <>
          {" "}
          <Link className={styles.links4} to="/users">
            Sign Up/Log In
          </Link>
          <Link className={styles.links5} to="/menu">
            Menu
          </Link>
        </>
      )}
    </nav>
  );
}
