import PopupWithForm from './PopupWithForm';

function PopupWithConfirmation({ isOpen, onClose, onSubmit, card }) {
  function handleDeleteConfirmation(evt) {
    evt.preventDefault();
    onSubmit(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="сonfirmation"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDeleteConfirmation}
      textButton={'Да'}
    ></PopupWithForm>
  );
}

export default PopupWithConfirmation;
