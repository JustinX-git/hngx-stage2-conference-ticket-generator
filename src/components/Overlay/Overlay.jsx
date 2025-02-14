import "./Overlay.css";

const Overlay = ({ setShowNavs }) => {
  const navs = ["Events", "My Tickets", "About Project"];

  const closeNavsHandler = () => {
    setShowNavs(false);
  };

  return (
    <>
      <div className="links-container">
        <div tabIndex={0} className="close-btn" onClick={closeNavsHandler}>
          <img src="/hugeicons_ticket-01.png" alt="close-btn" />
        </div>
        <ul className="overlay-links">
          {navs.map((nav, index) => (
            <li
              key={index}
              tabIndex={0}
              className="nav-link"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {nav}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Overlay;
