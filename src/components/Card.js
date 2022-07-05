function Card(props) {
  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} />
      <button
        className="card__delete-button"
        type="button"
        aria-label="Удалить карточку"
      ></button>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like-button"
            type="button"
            aria-label="Мне нравится"
          ></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
