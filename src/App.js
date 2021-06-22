import "./App.css";
import Profile from "./Components/profile/Profile";
import ProfileData from "./Components/profile/user.json";
import Statistics from "./Components/Statistics/Statistics";
import data from "./Components/Statistics/statistical-data.json";
import FriendList from "./Components/FriendList/FriendList";
import friendData from "./Components/FriendList/friends.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import TransactionHistoryData from "./Components/TransactionHistory/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={ProfileData.name}
        tag={ProfileData.tag}
        location={ProfileData.location}
        avatar={ProfileData.avatar}
        stats={ProfileData.stats}
      />
      <Statistics title={data} stats={data} />
      <FriendList friends={friendData} />
      <TransactionHistory items={TransactionHistoryData} />
    </>
  );
}

export default App;
