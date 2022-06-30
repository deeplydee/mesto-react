import logo from './images/header-logo.svg';
import avatar from './images/avatar.jpg';

function App() {
  return (
    <div className="page">
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Лого Место Россия"
      />
    </header>

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
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
        ></button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list"></ul>
      </section>
    </main>

    <footer className="footer">
      <p className="footer__copyright">© 2020 Mesto Russia</p>
    </footer>

    <section className="popup popup_type_profile-edit">
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__form-heading">Редактировать профиль</h2>
        <form
          className="popup__form popup__form_type_profile-edit"
          name="profile-edit"
          novalidate
        >
          <div className="popup__main-container">
            <fieldset className="popup__form-input-container">
              <input
                className="popup__data-input popup__data-input_type_profile-name"
                type="text"
                name="name"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="40"
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
                minlength="2"
                maxlength="200"
                id="profile-description-input"
              />
              <span
                className="popup__error popup__error_visible"
                id="profile-description-input-error"
              ></span>
            </fieldset>
            <button
              className="popup__form-submit"
              type="submit"
              aria-label="Сохранить изменения"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </section>

    <section className="popup popup_type_card-add">
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__form-heading">Новое место</h2>
        <form
          className="popup__form popup__form_type_card-add"
          name="card-add"
          novalidate
        >
          <div className="popup__main-container">
            <fieldset className="popup__form-input-container">
              <input
                className="popup__data-input popup__data-input_type_card-name"
                type="text"
                name="name"
                placeholder="Название"
                required
                minlength="2"
                maxlength="30"
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
            </fieldset>
            <button
              className="popup__form-submit"
              type="submit"
              aria-label="Создать карточку"
            >
              Создать
            </button>
          </div>
        </form>
      </div>
    </section>

    <section className="popup popup_type_change-avatar">
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__form-heading">Обновить аватар</h2>
        <form
          className="popup__form popup__form_type_change-avatar"
          name="avatar"
          novalidate
        >
          <div className="popup__main-container">
            <fieldset className="popup__form-input-container">
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
            </fieldset>
            <button
              className="popup__form-submit"
              type="submit"
              aria-label="Обновить аватар"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </section>

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

    <section className="popup popup_type_delete-card">
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__form-heading">Вы уверены?</h2>
        <form
          className="popup__form popup__form_type_delete-card"
          name="сonfirmation"
          novalidate
        >
          <div className="popup__main-container">
            <button
              className="popup__form-submit"
              type="submit"
              aria-label="Да"
            >
              Да
            </button>
          </div>
        </form>
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
