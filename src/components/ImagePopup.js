function ImagePopup(props) {
  const isOpenedOverview = props.card.link ? 'popup_is-opened' : '';

  return (
    <section className={`popup popup_type_overview ${isOpenedOverview}`}>
      <div className="popup__container popup__container_place_overview">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <div className="overview">
          <img
            className="overview__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="overview__title">{props.card.name}</p>
        </div>
      </div>
    </section>
  );
}

export default ImagePopup;
