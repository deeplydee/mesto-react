import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        title="Обновить аватар"
        name="change-avatar"
        isOpen={isEditAvatarPopupOpen}
      >
        <input
          className="popup__data-input popup__data-input_type_avatar-link"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
          id="avatar-link-input"
        />
        <span
          className="popup__error popup__error_visible"
          id="avatar-link-input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile-edit"
        isOpen={isEditProfilePopupOpen}
      >
        <input
          className="popup__data-input popup__data-input_type_profile-name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          id="profile-name-input"
        />
        <span
          className="popup__error popup__error_visible"
          id="profile-name-input-error"
        ></span>
        <input
          className="popup__data-input popup__data-input_type_profile-description"
          type="text"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          id="profile-description-input"
        />
        <span
          className="popup__error popup__error_visible"
          id="profile-description-input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="card-add"
        isOpen={isAddPlacePopupOpen}
      >
        <input
          className="popup__data-input popup__data-input_type_card-name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="card-name-input"
        />
        <span
          className="popup__error popup__error_visible"
          id="card-name-input-error"
        ></span>
        <input
          className="popup__data-input popup__data-input_type_card-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          id="card-link-input"
        />
        <span
          className="popup__error popup__error_visible"
          id="card-link-input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="сonfirmation">
        <div className="popup__main-container">
          <button className="popup__form-submit" type="submit" aria-label="Да">
            Да
          </button>
        </div>
      </PopupWithForm>

      <ImagePopup></ImagePopup>

      <section className="popup popup_type_overview">
        <div className="popup__container popup__container_place_overview">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
          ></button>
          <div className="overview">
            <img className="overview__image" src="#" alt="#" />
            <p className="overview__title"></p>
          </div>
        </div>
      </section>

      <template className="template-card">
        <li className="card">
          <img className="card__image" src="#" alt="#" />
          <button
            className="card__delete-button"
            type="button"
            aria-label="Удалить карточку"
          ></button>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                className="card__like-button"
                type="button"
                aria-label="Мне нравится"
              ></button>
              <p className="card__like-count">6</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
