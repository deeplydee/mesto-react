import avatar from '../images/avatar.jpg';

function Main() {

  function handleEditAvatarClick() {
    const buttonEditAvatarClick = document.querySelector('.popup_type_change-avatar');
    buttonEditAvatarClick.classList.add('popup_is-opened');
  }

  function handleEditProfileClick() {
    const buttonEditProfileClick = document.querySelector('.popup_type_profile-edit');
    buttonEditProfileClick.classList.add('popup_is-opened');
  }

  function handleAddPlaceClick() {
    const buttonAddPlaceClick = document.querySelector('.popup_type_card-add');
    buttonAddPlaceClick.classList.add('popup_is-opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={avatar}
            alt="Аватар пользователя"
          />
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Изменить аватар"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list"></ul>
      </section>
    </main>
  )
}

export default Main;
