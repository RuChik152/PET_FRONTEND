import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Overlay } from '../components/Overlay/Overlay';
import { SignIn } from '../components/SignIn/SingIn';
import { SignUp } from '../components/SignUp/SignUp';

export const Authentication = () => {
  const [type, setType] = useState('auth');

  const { error: errorLogin } = useSelector((state) => state.userLogin);
  const { error: errorReg } = useSelector((state) => state.userRegister);

  return (
    <>
      {(errorLogin || errorReg) && (
        <div className="alert">
          <div className="alert-wrp">
            <h1>Danger!</h1>
            <br></br>
            {errorReg || errorLogin}
          </div>
        </div>
      )}
      <div
        className={`container ${type === 'reg' ? 'right-panel-active' : ''}`}
      >
        <SignIn />
        <SignUp />
        <Overlay setType={setType} />
      </div>
    </>
  );
};
