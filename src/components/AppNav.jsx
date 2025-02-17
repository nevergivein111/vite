import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
export function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">App</NavLink>
        </li>
      </ul>
    </nav>
  );
}
