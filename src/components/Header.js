import logo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Лого Место Россия"
      />
    </header>
  );
}

export default Header;
