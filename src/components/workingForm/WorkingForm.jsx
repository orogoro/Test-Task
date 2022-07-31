import { useState } from 'react';

import { Loader } from 'components';
import { getToken } from 'axiosApi/axiosApi';

import styles from './WorkingForm.module.scss';
import { useEffect } from 'react';

function WorkingForm({ positions, onSubmit, loading }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [file, setFile] = useState('');
  const [disable, setDisable] = useState(true);

  const handleSubmit = e => {
    const fileField = document.querySelector('input[type="file"]');

    getToken().then(response => {
      const config = { headers: { Token: response } };

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('position_id', position);
      formData.append('photo', fileField.files[0]);

      onSubmit(formData, config);
    });
  };

  const handleChange = e => {
    const { name, value, id } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'position':
        setPosition(id);
        break;

      case 'file':
        setFile(value);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    if (name && email && phone && position && file) {
      setDisable(false);
    }
  }, [email, file, name, phone, position]);

  return (
    <div className={styles.form_container} id="form">
      <h2 className={styles.form_title}>Working with POST request</h2>
      <form className={styles.form_form} onSubmit={handleSubmit}>
        <div className={styles.form_input__container}>
          <input
            className={styles.form_input}
            type="text"
            name="name"
            placeholder="Your name"
            minLength="2"
            maxLength="60"
            // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
            onChange={handleChange}
            required
          />
          <label>Your name</label>
        </div>
        <div className={styles.form_input__container}>
          <input
            className={styles.form_input}
            type="email"
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="100"
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            // pattern="^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$"
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className={styles.form_input__container}>
          <input
            className={styles.form_input}
            type="tel"
            name="phone"
            placeholder="Phone"
            pattern="^[\+]{0,1}380([0-9]{9})$"
            onChange={handleChange}
            required
          />
          <label>Phone</label>
          <p className={styles.form_phone}>+38 (XXX) XXX - XX - XX</p>
        </div>

        <p className={styles.form_text}>Select your position</p>
        {positions.map(({ id, name }) => (
          <label className={styles.lable_radio} key={id}>
            <input
              className={styles.input_radio}
              id={id}
              type="radio"
              name="position"
              value={name}
              onChange={handleChange}
              required
            />
            <span>{name}</span>
          </label>
        ))}
        <div className={styles.field__wrapper}>
          <label className={styles.field__lable}>
            <input
              className={styles.field__file}
              type="file"
              name="file"
              accept=".jpg, .jpeg, .png"
              value={file}
              onChange={handleChange}
              required
            />
            <div className={styles.field__button}>Upload</div>
            <div className={styles.field__fake}>
              {file ? file.slice(12) : 'Upload your photo'}
            </div>
          </label>
        </div>

        {!loading ? (
          <button className={styles.button} type="submit" disabled={disable}>
            Sign up
          </button>
        ) : (
          <Loader />
        )}
      </form>
    </div>
  );
}

export default WorkingForm;
