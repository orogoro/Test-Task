import logo from '../../images/icons/Logo.svg';

import styles from './Header.module.scss';
function Header() {
  const newLocal = '';
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href={newLocal}>
          <img src={logo} alt="" />
        </a>

        <div className={styles.btn_container}>
          <button className={styles.button} type="button">
            Users
          </button>
          <button className={styles.button} type="button">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
