import "./Header.css";
import image from "../to-do-list(1).png";

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Title">
        <img src={image} alt="list logo" />
        BucketList
      </h1>

      <button className="headerButton">Sign In</button>
    </header>
  );
};

export default Header;
