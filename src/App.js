// Route component defines different paths in the URL we are listening to and which components are needed.
import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

// Each component will be displyed if Route determines the url matches the current page, so if you at Favorites, the Favorite component will display.
function App() {
  return (
    <div>
      <Routes>
        <Route path="/meetup-react" element={<AllMeetupsPage />} />
        <Route path="/meetup-react/new-meetup" element={<NewMeetupPage />} />
        <Route path="/meetup-react/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
