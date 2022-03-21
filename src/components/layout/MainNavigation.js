import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
// Name must end with ".module.css" to allow scoped style, or different styles for each component.
// Imports an object from the css file which are properties.
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/meetup-react">All Meetups</Link>
          </li>
          <li>
            <Link to="/meetup-react/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/meetup-react/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
