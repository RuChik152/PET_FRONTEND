import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Authentication } from '../pages/Authentication';
import { Profile } from '../pages/Profile';
import { getNewAccessToken } from '../store/actions';
import './App.css';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { userInfo, accessToken } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo && !accessToken) dispatch(getNewAccessToken());
  }, []);

  return (
    <div className="App">
      {userInfo ? <Profile userInfo={userInfo} /> : <Authentication />}
    </div>
  );
};
