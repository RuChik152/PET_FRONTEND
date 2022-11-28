import React, { FC } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const App: FC = () => {
  return (
    <div className=''>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}