import { Link, useLocation } from 'react-router-dom';
import styles from './style.module.less';
import clsx from 'clsx';

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHomePage = currentPath === '/';
  const isTasksPage = currentPath === '/tasks';
  const isProfilePage = currentPath === '/profile';

  return (
    <div className={styles.menu}>
      <Link
        to="/"
        className={clsx(styles.menuItems, { [styles.activePage]: isHomePage })}
      >
        Home
      </Link>
      <Link
        to="/tasks"
        className={clsx(styles.menuItems, { [styles.activePage]: isTasksPage })}
      >
        Tasks
      </Link>
      <Link
        to="/profile"
        className={clsx(styles.menuItems, {
          [styles.activePage]: isProfilePage,
        })}
      >
        Profile
      </Link>
    </div>
  );
};

export default Menu;
