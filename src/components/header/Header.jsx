// import { animateScroll as scroll } from 'react-scroll';
// import {
//   Link,
//   // Button,
//   // Element,
//   // Events,
//   // animateScroll as scroll,
//   // scrollSpy,
//   // scroller,
// } from 'react-scroll';

import logo from '../../images/icons/Logo.svg';

import styles from './Header.module.scss';
function Header() {
  // const scrollBotom = () => {
  //   scroll.scrollToBottom();
  // };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/abz.agency/#">
          <img src={logo} alt="" />
        </a>

        <div className={styles.btn_container}>
          <a className={styles.button} href="#list">
            Users
          </a>
          <a className={styles.button} href="#form">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
