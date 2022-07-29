import ClipLoader from 'react-spinners/ClipLoader';

import styles from './Loader.module.scss';

function Loader() {
  return (
    <ClipLoader
      className={styles.loader}
      color="#00BDD3"
      // loading={loading}
      size={48}
    />
  );
}

export default Loader;
