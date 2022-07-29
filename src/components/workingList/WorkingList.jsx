import { WorkingItem, Loader } from 'components';
import styles from './WorkingList.module.scss';

function WorkingList({ workers, nextPage, totalPage, page, loading }) {
  return (
    <div className={styles.working_container} id="list">
      <h2 className={styles.working_title}>Working with GET request</h2>
      <ul className={styles.working_list}>
        {workers.map(({ id, name, email, phone, position, photo }) => (
          <li className={styles.working_card} key={id}>
            <WorkingItem
              name={name}
              email={email}
              phone={phone}
              position={position}
              photo={photo}
            />
          </li>
        ))}
      </ul>
      {loading && <Loader />}
      {page !== totalPage && !loading ? (
        <button
          className={styles.working_button}
          type="button"
          onClick={nextPage}
        >
          Show more
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default WorkingList;
