import './App.css';
import UserProfile from './UserProfile';
import profileImg from './assets/missPiggy.jpeg';

function App() {
  return (
    <div>
      <UserProfile
        name="Lillian Wimberly"
        bio="Struggling coder trying to advance slowly but surely."
        profileImg={profileImg}
      />
      <UserProfile
        name="Savanna Lewis"
        bio="Advanced programming engineer passionate about React."
        profileImg={profileImg}
      />
    </div>
  );
}

export default App;
