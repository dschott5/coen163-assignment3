import Navbar from "../components/Navbar";
import "../stylesheets/Account.css";

const Account = () => {
  return (
    <>
    <Navbar />
    <div className="account-container">
      <div className="profile">
        <h2>Profile</h2>
      </div>
      <div className="account-edit">
        <h2>Account Edit</h2>
      </div>
    </div>
    </>
  );
};

export default Account;
