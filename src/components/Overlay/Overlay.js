import React from 'react';

export const Overlay = ({ setType }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>С возвращением!</h1>
          <p>
            Чтобы поддерживать с нами связь, пожалуйста, войдите в систему,
            указав свою личную информацию.
          </p>
          <button
            className="ghost"
            onClick={() => {
              setType('auth');
            }}
          >
            войти
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Привет, Друг!</h1>
          <p>Введите свои личные данные и начните путешествие с нами.</p>
          <button
            className="ghost"
            onClick={() => {
              setType('reg');
            }}
          >
            зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};
