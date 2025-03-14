import { ReactNode } from 'react';
import styles from './style.module.less';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <div>This is layout!</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
