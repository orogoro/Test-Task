import { useEffect, useState } from 'react';

import { Hero, Header, WorkingList } from './';
import { getWorkies } from 'axiosApi/axiosApi';

import styles from './App.module.scss';

export const App = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (workers) {
      return;
    }

    setLoading(true);

    getWorkies(page)
      .then(response => {
        setWorkers(state => [...state, ...response.users]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [page]);

  // const nextPage = () => {
  //   setPage(state => state + 1);
  //   //  scroll.scrollToBottom();
  // };

  // const handleFormSubmit = value => {
  //   // setInputValue(value);
  //   setPage(1);
  // };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Hero />
        <WorkingList workers={workers} />
      </main>
    </>
  );
};
