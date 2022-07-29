import { animateScroll as scroll } from 'react-scroll';

import logo from '../../images/icons/Logo.svg';

import styles from './Header.module.scss';
function Header() {
  const scrollToList = () => {
    scroll.scrollTo(800);
  };
  const scrollToForm = () => {
    scroll.scrollToBottom();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/abz.agency/#">
          <img src={logo} alt="" />
        </a>

        <div className={styles.btn_container}>
          <button className={styles.button} onClick={scrollToList}>
            Users
          </button>
          <button className={styles.button} onClick={scrollToForm}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
