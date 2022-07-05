function PopupWithForm(props) {

  const isOpened = props.isOpen ? 'popup_is-opened' : '';

  return (
    <section className={`popup popup_type_${props.name} ${isOpened}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__form-heading">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={`${props.name}`}
          noValidate
        >
          <div className="popup__main-container">
            <fieldset className="popup__form-input-container">
              {props.children}
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
  );
}

export default PopupWithForm;
