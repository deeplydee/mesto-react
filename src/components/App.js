import { useState, useEffect } from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleOpenEditAvatarPopup() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleOpenEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }

  function handleOpenAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  useEffect(() => {
    function handleEscKeyPress(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function closeClickOverlay(evt) {
      if (evt.target.classList.contains('popup_is-opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscKeyPress);
    document.addEventListener('mousedown', closeClickOverlay);

    return () => {
      document.removeEventListener('mousedown', closeClickOverlay);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen]);

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleOpenEditAvatarPopup}
        onEditProfile={handleOpenEditProfilePopup}
        onAddPlace={handleOpenAddPlacePopup}
        onCardClick={handleCardClick}
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

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
