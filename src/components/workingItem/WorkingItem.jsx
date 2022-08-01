import styles from './WorkingItem.module.scss';

function WorkingItem({ name, email, phone, position, photo }) {
  const resultName = name?.length > 40 ? name.slice(0, 40) + '...' : name;
  return (
    <>
      <img className={styles.card_photo} src={photo} alt="worker" />
      <p className={styles.card_text}>{resultName}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
}

export default WorkingItem;
