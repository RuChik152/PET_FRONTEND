import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [hbDate, setHbDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(register({ firstName, lastName, phone, hbDate, email, password }));
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={submitHandler}>
        <h1>Регистрация</h1>
        <br></br>
        <label htmlFor="firstName" className="sign-up-label" data-icon="u">
          Имя:
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="Иван"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName" className="sign-up-label" data-icon="u">
          Фамилия:
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Иванов"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="tel" className="sign-up-label" data-icon="u">
          Номер телефона:
        </label>
        <input
          id="tel"
          type="tel"
          placeholder="+7(XXX)-XXX-XXXX"
          pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="hbDate" className="sign-up-label" data-icon="u">
          Дата рождения:
        </label>
        <input
          id="hbDate"
          type="date"
          min="1920-01-01"
          max="2022-01-01"
          value={hbDate}
          onChange={(e) => setHbDate(e.target.value)}
        />
        <label htmlFor="email" className="sign-up-label" data-icon="u">
          Адрес электронной почты:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="sign-up-label" data-icon="u">
          Пароль:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ cursor: 'pointer' }}>
          зарегистрироваться
        </button>
      </form>
    </div>
  );
};
