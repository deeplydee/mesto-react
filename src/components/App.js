import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import api from '../utils/api.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    setSelectedCard(null);
  }

  useEffect(() => {
    if (
      isEditAvatarPopupOpen ||
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      selectedCard
    ) {
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
    }
  }, [
    isEditAvatarPopupOpen,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    selectedCard,
  ]);

  function handleUpdateAvatar(newUserAvatar) {
    api
      .updateAvatar(newUserAvatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(newUserData) {
    api
      .updateProfileData(newUserData)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(dataCard) {
    api
      .addNewCard(dataCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleOpenEditAvatarPopup}
          onEditProfile={handleOpenEditProfilePopup}
          onAddPlace={handleOpenAddPlacePopup}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          title="Вы уверены?"
          name="сonfirmation"
          onClose={closeAllPopups}
          textButton={'Да'}
        ></PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
