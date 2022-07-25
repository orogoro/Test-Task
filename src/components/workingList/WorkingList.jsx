import { WorkingItem } from 'components';
import styles from './WorkingList.module.scss';

function WorkingList({ workers }) {
  console.log(workers);
  return (
    <div className={styles.working_container}>
      <h2 className={styles.working_title}>Working with GET request</h2>
      <ul>
        {workers.map(({ id }) => (
          <li key={id}>
            <WorkingItem />
          </li>
        ))}
      </ul>
      <button type="button"></button>
    </div>
  );
}

export default WorkingList;
