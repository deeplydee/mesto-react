function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        className="card__delete-button"
        type="button"
        aria-label="Удалить карточку"
      ></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            type="button"
            aria-label="Мне нравится"
          ></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
