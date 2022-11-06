import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions';

export const Profile = ({ userInfo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Профиль</h1>
      <h2 style={{ textAlign: 'left' }}>{userInfo.firstName}</h2>
      <h2 style={{ textAlign: 'left' }}>{userInfo.lastName}</h2>
      <h2 style={{ textAlign: 'left' }}>{userInfo.phone}</h2>
      <h2 style={{ textAlign: 'left' }}>{userInfo.hbDate}</h2>
      <h2 style={{ textAlign: 'left' }}>{userInfo.email}</h2>
      <h2 style={{ textAlign: 'left' }}>{userInfo.password}</h2>
      <button style={{ cursor: 'pointer' }} onClick={() => dispatch(logout())}>
        Выйти
      </button>
    </>
  );
};
