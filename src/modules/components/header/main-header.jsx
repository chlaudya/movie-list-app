import logo from "assets/images/imdb.png";
import "./mainheader.scss";

export default () => {
  return (
    <header className="main-header">
      <img src={logo} className="main-header--logo" alt="main-logo" />
      <h1>Movie List App</h1>
    </header>
  );
};
