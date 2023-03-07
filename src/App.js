import "./App.css";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <main className="App">
      {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>*/}
      <Profile {...user} />
      <div className="line" />
      <Statistics label="Upload Stats" stats={data} />
      <div className="line" />
      <Statistics stats={data} />
      <div className="line" />
      <FriendList friends={friends} />
      <div className="line" />
      {/*<TransactionHistory transactions={transactions} >*/}
    </main>
  );
}

export default App;
