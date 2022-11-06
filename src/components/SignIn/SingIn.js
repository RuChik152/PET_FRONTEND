import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import login from '../../store/actions';

export const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={submitHandler}>
        <h1>Вход</h1>
        <span>введите электронную почту и пароль</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#">Забыли пароль?</a>
        <button type="submit" style={{ cursor: 'pointer' }}>
          войти
        </button>
      </form>
    </div>
  );
};
