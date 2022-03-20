import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/meetup-react">All Meetups</Link>
          </li>
          <li>
            <Link to="/meetup-react/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/meetup-react/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
