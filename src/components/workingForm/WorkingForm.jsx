import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Loader } from 'components';
import { getToken } from 'axiosApi/axiosApi';

import styles from './WorkingForm.module.scss';

function WorkingForm({ positions, onSubmit, loading }) {
  const [disable, setDisable] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      file: [],
      phone: '+380',
    },
  });

  const file = watch('file')[0]?.name;
  const name = watch('name');
  const email = watch('email');
  const phone = watch('phone');
  const position = watch('position');

  const resultFile = file?.length > 30 ? file.slice(0, 30) + '...' : file;

  const handleSubmitForm = data => {
    getToken().then(response => {
      const config = { headers: { Token: response } };
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('position_id', data.position);
      formData.append('photo', data.file[0]);

      onSubmit(formData, config);
    });
  };

  useEffect(() => {
    if (name && email && phone && position && file) {
      setDisable(false);
    }
  }, [email, file, name, phone, position]);

  return (
    <div className={styles.form_container} id="form">
      <h2 className={styles.form_title}>Working with POST request</h2>
      <form
        className={styles.form_form}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className={styles.form_input__container}>
          <input
            className={errors.name ? styles.input_error : styles.form_input}
            type="text"
            {...register('name', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 60,
                message: 'Max length is 60',
              },
            })}
            placeholder="Your name"
          />
          <label>Your name</label>
          <p className={styles.error}>{errors.name?.message}</p>
        </div>
        <div className={styles.form_input__container}>
          <input
            className={errors.email ? styles.input_error : styles.form_input}
            type="email"
            {...register('email', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 100,
                message: 'Max length is 100',
              },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'example@gmail.com',
              },
            })}
            placeholder="Your email"
          />
          <label>Email</label>
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div className={styles.form_input__container}>
          <input
            className={errors.phone ? styles.input_error : styles.form_input}
            type="tel"
            {...register('phone', {
              required: 'This is required',
              pattern: /^[+]{0,1}380([0-9]{9})$/,
            })}
            placeholder="Your phone"
          />
          <label>Phone</label>
          <p className={styles.form_phone}>
            {errors.phone ? (
              <span className={styles.error}>+38 (XXX) XXX - XX - XX</span>
            ) : (
              '+38 (XXX) XXX - XX - XX'
            )}
          </p>
        </div>

        <p className={styles.form_text}>
          Select your position
          <span className={styles.error}>{errors.position?.message}</span>
        </p>
        {positions.map(({ id, name }) => (
          <label className={styles.lable_radio} key={id}>
            <input
              className={styles.input_radio}
              type="radio"
              {...register('position', {
                required: 'This is required',
              })}
              value={id}
            />
            <span>{name}</span>
          </label>
        ))}
        <div className={styles.field__wrapper}>
          <label className={styles.field__lable}>
            <input
              className={styles.field__file}
              type="file"
              {...register('file', {
                required: 'This is required',
              })}
              accept="image/*, image/jpeg, image/jpg"
            />
            <div className={styles.field__button}>Upload</div>
            <div className={styles.field__fake}>
              {file ? (
                <span className={styles.span_file}>{resultFile}</span>
              ) : (
                'Upload your photo'
              )}
            </div>
          </label>
        </div>
        <p className={styles.error}>{errors.file?.message}</p>

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
