import AddToCart from "./AddToCart";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="#">Ele-x</a>
        </div>
        {/* Navigation */}
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
        <AddToCart/>
      </div>
    </header>
  );
}
