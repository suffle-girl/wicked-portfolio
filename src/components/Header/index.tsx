import styles from './style.module.less';
import profilePicture from './img/profile-picture.jpg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.image}>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="profile picture"
        />
      </div>
      <div className={styles.greeting}>Good morning, suffle-girl</div>
    </div>
  );
};

export default Header;
