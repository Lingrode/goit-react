import userData from "./userData.json";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

function App() {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
