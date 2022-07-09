import { useState, useEffect } from 'react';

import avatar from '../images/avatar.jpg';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userAvatar, setUserAvatar] = useState(avatar);
  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [cards, setCards] = useState([]);

  const cardsElements = cards.map((card) => (
    <li className="card" key={card._id}>
      <Card
        card={card}
        onCardClick={onCardClick}
      />
    </li>
  ))

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар пользователя"
          />
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cardsElements}
        </ul>
      </section>
    </main>
  );
}

export default Main;
