import avatar from '../images/avatar.jpg';

function Main(props) {
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
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list"></ul>
      </section>
    </main>
  )
}

export default Main;
