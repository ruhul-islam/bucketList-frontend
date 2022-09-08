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
  // Get the button:
  let mybutton: any = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="App">
      <button onClick={topFunction} id="myBtn" title="Go to top">
        ^
      </button>
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
          <Route path="/:uid/friends/:friendUid" element={<FriendProfile />} />
          {/* <Route path="/gifs/:id/details" element={<Details />} />
         <Route path="/gifs/favorites" element={<Favorites />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <div className="FooterContainer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
