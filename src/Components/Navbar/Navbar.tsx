import "../sass/_Navbar.scss";

export default function NavBar() {
  return (
    <nav className='nav'>
      <a href='' className='site-title'>
        Pizza Master's
      </a>
      <ul>
        <li className='active'>
          <a href='/Pizzor'>Pizzor</a>
        </li>
        <li>
          <a href='/Kontakta Oss'>Kontakta Oss</a>
        </li>
      </ul>
    </nav>
  );
}
