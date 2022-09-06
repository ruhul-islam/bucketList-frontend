import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import FriendsList from "./components/FriendsList";
import SearchFriendForm from "./components/SearchFriendForm";
import FriendProfile from "./components/FriendProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/users/:search" element={<UserProfile />} />
          <Route path="/:uid" element={<UserProfile />} />
          {/* <Route path="/:uid/friends-list" element={<FriendsList />} /> */}
          <Route
            path="/:uid/friends-list/search"
            element={<SearchFriendForm />}
          />
          <Route path="/:uid/friends/friendUid" element={<FriendProfile />} />
          {/* <Route path="/gifs/:id/details" element={<Details />} />
         <Route path="/gifs/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
