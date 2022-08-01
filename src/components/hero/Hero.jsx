import { animateScroll as scroll } from 'react-scroll';

import styles from './Hero.module.scss';

function Hero() {
  const scrollToForm = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <h1 className={styles.hero_title}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.hero_text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button className={styles.hero_button} onClick={scrollToForm}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Hero;
