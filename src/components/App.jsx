import { useEffect, useState, useRef } from 'react';

import { Hero, Header, WorkingList, WorkingForm } from './';
import { getWorkies, getPositions, postWorkies } from 'axiosApi/axiosApi';
import successImg from '../images/icons/success-image.svg';

import styles from './App.module.scss';

export const App = () => {
  const [workers, setWorkers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [success, setSuccess] = useState(false);

  const pageLoaded = useRef(null);

  useEffect(() => {
    getPositions()
      .then(response => {
        setPositions([...response.positions]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (page === pageLoaded.current) {
      return;
    }

    setLoading(true);
    pageLoaded.current = page;
    getWorkies(page)
      .then(response => {
        setWorkers(state => [...state, ...response.users]);
        setTotalPage(response.total_pages);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const nextPage = () => {
    setPage(state => state + 1);
  };

  const handleFormSubmit = (dataForm, config) => {
    setLoading(true);

    postWorkies(dataForm, config)
      .then(response => {
        setSuccess(response.success);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));

    setPage(1);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Hero />
        <WorkingList
          workers={workers}
          nextPage={nextPage}
          totalPage={totalPage}
          page={page}
          loading={loading}
        />
        {!success ? (
          <WorkingForm
            positions={positions}
            onSubmit={handleFormSubmit}
            loading={loading}
          />
        ) : (
          <div className={styles.container_success}>
            <h2 className={styles.title}>User successfully registered</h2>
            <img src={successImg} alt="successImg" />
          </div>
        )}
      </main>
    </>
  );
};
