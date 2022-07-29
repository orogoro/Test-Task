import styles from './WorkingItem.module.scss';

function WorkingItem({ name, email, phone, position, photo }) {
  return (
    <>
      <img className={styles.card_photo} src={photo} alt="worker" />
      <p className={styles.card_text}>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
}

export default WorkingItem;
