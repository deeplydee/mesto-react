import { useState, useEffect } from 'react';

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  function closePressButton(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function closeClickOverlay(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
      closeAllPopups();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closePressButton);
    document.addEventListener('mousedown', closeClickOverlay);

    return () => {
      document.removeEventListener('mousedown', closeClickOverlay);
      document.removeEventListener('keydown', closePressButton);
    };
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen]);

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
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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

      <PopupWithForm
        title="Вы уверены?"
        name="сonfirmation"
        onClose={closeAllPopups}
      >
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

    </div>
  );
}

export default App;
