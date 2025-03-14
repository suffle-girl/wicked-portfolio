import { ReactNode } from 'react';
import styles from './style.module.less';
import Menu from '../Menu';
import Header from '../Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layoutItems}>
        <Menu />
        <div className={styles.layoutPages}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
